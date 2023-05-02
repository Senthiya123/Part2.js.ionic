import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { StudentService, Media } from '../student.service';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {
    newTitle: string;
    newAuthor: string;
    newPublisher: string;
    newType: string;
    newNotes: string;

    message: string;

    data: [Media];



    constructor(private medias: StudentService) { }
    
    
}

