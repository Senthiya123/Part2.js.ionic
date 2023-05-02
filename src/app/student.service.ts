// Media database injectable component

import { Injectable } from '@angular/core';

export interface Media { title: string, author: string, publisher: string, type: string, notes: string };

@Injectable()

export class StudentService {
    constructor() { }

    mediaData: Array<Media> = new Array<Media>();


    doAdd(s: Media) {
        this.mediaData[this.mediaData.length] = s;
    }



    isPresent(mtitle: string): boolean {
        for (let i = 0; i < this.mediaData.length; i++) {
            if (this.mediaData[i].title == mtitle) return true;
        }
        return false;
    }

    istitleEmpty(mtitle: string): boolean {

        if (mtitle == "") {
            return true;

        } else {
            return false;
        }
    }


    isauthorEmpty(mauthor: string): boolean {

        if (mauthor == "") {
            return true;

        } else {
            return false;
        }
    }

    ispublisherEmpty(mpublisher: string): boolean {

        if (mpublisher == "") {
            return true;

        } else {
            return false;
        }
    }




    istypeEmpty(mtype: string): boolean {

        if (mtype == "") {
            return true;

        } else {
            return false;
        }
    }

    getList(): Array<Media> {
        

        return this.mediaData;
        }

}
