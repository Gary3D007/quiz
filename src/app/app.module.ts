import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {QuizElementComponent} from './quizElementComponent/quizElement.component';
import {EnglishWordComponent} from './quizElementComponent/englishWordComponent/englishWord.component';
import {FormsModule} from '@angular/forms';
import {ChoiceComponent} from './quizElementComponent/choiceComponent/choice.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizElementComponent,
    EnglishWordComponent,
    ChoiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
