import { Component } from '@angular/core';

import { StudentService, Media } from '../student.service';


@Component({
    selector: 'app-tab4',
    templateUrl: './tab4.page.html',
    styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
    data: Array<Media>;
    position: number;

    currentTitle: string;
    currentAuthor: string;
    currentPublisher: string;
    currentType: string;
    currentNotes: string;
    message: string;



    constructor(private students: StudentService) {
        
            this.data = students.getList();
            if (this.data.length == 0) {
                this.position = -1;
                this.currentTitle = "";
                this.currentAuthor = "";
                this.currentPublisher = "";
                this.currentType = "";
                this.currentNotes = "";


            } else {
                this.position = 0;
                this.currentTitle = "" + this.data[0].title;
                this.currentAuthor = this.data[0].author;
                this.currentPublisher = this.data[0].publisher;
                this.currentType = this.data[0].type;
                this.currentNotes = this.data[0].notes;
            }
        }


    

    doPrev() {
        if (this.position <= 0) {
            this.message = "There is no previous media.";
        } else {
            this.message = "";
            this.position--;

            this.currentTitle = "" + this.data[this.position].title;
            this.currentAuthor = this.data[this.position].author;
            this.currentPublisher = this.data[this.position].publisher;
            this.currentType = this.data[this.position].type;
            this.currentNotes = this.data[this.position].notes;

        }
    }
    doNext() {
        if (this.position == this.data.length - 1) {
            this.message = "There is no next student.";
        } else {
            this.message = "";
            this.position++;
            this.currentTitle = "" + this.data[this.position].title;
            this.currentAuthor = "" + this.data[this.position].author;
            this.currentPublisher = "" + this.data[this.position].publisher;
            this.currentType = "" + this.data[this.position].type;
            this.currentNotes = "" + this.data[this.position].notes;

        }
    }
    doUpdate() {
        if (this.position < 0) {
            this.message = "There is no current student to update.";
        } else {


            this.data[this.position].title = this.currentTitle;
            this.data[this.position].author = this.currentAuthor;
            this.data[this.position].publisher = this.currentPublisher;
            this.data[this.position].type = this.currentType;
            this.data[this.position].notes = this.currentNotes;
        }
    }
    doDelete() {
        this.data.splice(this.position, 1);
        if (this.position == this.data.length) { //deleted the last media

            this.position--;
        }
        if (this.data.length == 0) { // there was only one media, and it was deleted


            this.message = "No more media in the list to delete."
            this.currentTitle = "";
            this.currentAuthor = "";
            this.currentPublisher = "";
            this.currentType = "";
            this.currentNotes = "";

        } else {
            //there are other medias in the list

            let result = confirm("Are you sure that you want to delete this media?");

            if (result) {
                this.currentTitle = "" + this.data[this.position].title;
                this.currentAuthor = "" + this.data[this.position].author;
                this.currentPublisher = "" + this.data[this.position].publisher;
                this.currentType = "" + this.data[this.position].type;
                this.currentNotes = "" + this.data[this.position].notes;
            }
            else {
                this.currentTitle = "" + this.data[this.position-1].title;
                this.currentAuthor = "" + this.data[this.position-1].author;
                this.currentPublisher = "" + this.data[this.position-1].publisher;
                this.currentType = "" + this.data[this.position-1].type;
                this.currentNotes = "" + this.data[this.position-1].notes;

            }
        }

    }

    help() {
        this.message = "This link allows you to browse through  the list of medias you have entered so far. It allows you to navigate through the media items. And gives you privilege to update and delete media items according to your wish. Click the Prev button when you want to see the previous media. CLick the Next button when you want to see the next media. Click Update button when you want to update the media and click Delete button when you want to  delete the media.";
    }






}


