import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionDisplayComponent } from './question-display/question-display.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {QuestionsService} from './services/questions.service';
import {MaterialModule} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule,HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    QuestionsListComponent,
    QuestionDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [QuestionsService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
