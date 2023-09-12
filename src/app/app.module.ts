import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WelcomeModule } from './pages/welcome/welcome.module';
import { SharedModule } from './shared/shared.module';
import {CreateColleagueModule} from "./pages/create-colleague/create-colleague.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        WelcomeModule,
        SharedModule,
        CreateColleagueModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
