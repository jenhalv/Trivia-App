import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TriviaComponent } from './trivia/trivia.component';
import { Route, RouterModule } from '@angular/router';
import { TriviaQuestionComponent } from './trivia-question/trivia-question.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HeaderComponent } from './header/header.component';

const routes: Route[] = [
  {
  path: 'trivia',
  component: TriviaComponent
  },
  {
    path: '',
    component: TriviaComponent
  },
  {
  path: '**',
  component: TriviaComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TriviaComponent,
    TriviaQuestionComponent,
    AboutAppComponent,
    AboutMeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
