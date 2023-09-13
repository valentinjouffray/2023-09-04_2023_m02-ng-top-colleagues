import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayColleagueDetailsPage } from './display-colleague-details.page';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    DisplayColleagueDetailsPage
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DisplayColleagueDetailsModule { }
