import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {WelcomeModule} from './pages/welcome/welcome.module';
import {SharedModule} from './shared/shared.module';
import {CreateColleagueModule} from "./pages/create-colleague/create-colleague.module";
import {AppRoutingModule} from './app-routing.module';
import {CreateColleagueReactiveModule} from "./pages/create-colleague-reactive/create-colleague-reactive.module";
import {DisplayColleagueDetailsModule} from "./pages/display-colleague-details/display-colleague-details.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./interceptors/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    WelcomeModule,
    SharedModule,
    CreateColleagueModule,
    CreateColleagueReactiveModule,
    DisplayColleagueDetailsModule,
    // LoginModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
