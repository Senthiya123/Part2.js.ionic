import { Component } from '@angular/core';
import { StudentService, Media } from '../student.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    newTitle: string;
    newAuthor: string;
    newPublisher: string;
    newRadio: string;
    newNotes: string;

    message: string;

    data: Array<Media>;



    constructor(private medias: StudentService) { this.add();}

    add() {

        if (this.newTitle == "") {
            this.message = "Title field is empty.";
            return;
        } else {
            this.message = "";
        }
        if (this.newAuthor == "") {
            this.message = "Author field is empty.";
            return;


        } else {
            this.message = "";
        }


        if (this.newPublisher == "") {
            this.message = "Publisher field is empty.";
            return;

        } else {
            this.message = "";
        }
        if (this.newRadio == null) {
            this.message = "Media Type field is not selected.";
            

        } else {
            this.message = "";

        }


                        if (this.medias.isPresent(this.newTitle)) {
                            this.message = "There is another media with the same title.";



                        } else {
                            if (this.newTitle !== null || this.newAuthor !== null || this.newPublisher !== null || this.newRadio !== null) {
                                let md: Media;
                                md = { title: this.newTitle, author: this.newAuthor, publisher: this.newPublisher, type: this.newRadio, notes: this.newNotes };
                                this.medias.doAdd(md);
                                this.newTitle = "";
                                this.newAuthor = "";
                                this.newPublisher = "";
                                this.newRadio = "";
                                this.newNotes = "";

                            }
                        }



                    }
                


               

       help() {
        this.message = "This link allows you to add title, author, publisher, media type and notes. You cannot leave any field empty except Notes. You have to select media type from the options provided. The title field needs to be unique. After all these conditions are fulfilled, click Addd Media button to store this media.";
    }
}


