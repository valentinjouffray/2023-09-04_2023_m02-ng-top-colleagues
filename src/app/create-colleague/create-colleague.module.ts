import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleaguePage } from './create-colleague/create-colleague.page';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    CreateColleaguePage
  ],
  exports: [
    CreateColleaguePage
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CreateColleagueModule { }
