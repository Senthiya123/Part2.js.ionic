import { Component } from '@angular/core';

import { StudentService, Media } from '../student.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page  {
    data: Array<Media>;

    position: number;
    currentTitle: string;
    currentAuthor: string;
    currentPublisher: string;
    currentType: string;
    currentNotes: string;
   

    message: string;


    constructor(private medias: StudentService) {
        this.data = medias.getList();
        if (this.data.length == 0) {
            this.position = -1;
            this.message = "There is no media added yet.";
        }
        else {
            this.message='';
        }

    }
    

  
    doSearch(): void {

        //access input values from search field and assigns to search string
        let search: string = (<HTMLInputElement>document.getElementById("sTitle")).value

        //compares input value to every element in the array and displays it if found

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].title == this.currentTitle) {
                this.currentTitle = "" + this.data[i].title;
                this.currentAuthor = this.data[i].author;
                this.currentPublisher = this.data[i].publisher;
                this.currentType = this.data[i].type;
                this.currentNotes = this.data[i].notes;
                this.message = "";

            }

            else {
                
                this.message = "There is no such data."

            }



        }
    }
    help() {
        this.message = "This link allows you to search for medias. For that, you have to enter the title of the media you want to search for and click the search button,  if that media exists, the corresponding author, publisher, type and notes is shown else an error message is shown";
    }
}
