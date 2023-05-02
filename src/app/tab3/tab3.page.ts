import { Component } from '@angular/core';
import { StudentService, Media } from '../student.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    data: Array<Media>; 
    message: string;
    constructor(private medias: StudentService) {
        //students.doAdd({ID:1234, name:"John"}); // for testing purpose

        this.data = medias.getList();
    }
    help() {
        this.message = "This link displays the list of all correct media you have stored so far. If you want your media to be displayed then first you have to Add Media, you can do this by going to the Add Media page.";
    }

}
