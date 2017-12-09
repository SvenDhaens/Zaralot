import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ZaralotModule} from './zaralot/zaralot.module';
import {routing} from './app.routes';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ZaralotModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
