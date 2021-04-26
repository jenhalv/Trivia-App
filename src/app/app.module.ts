import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TriviaComponent } from './trivia/trivia.component';
import { Route, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

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
    AboutComponent
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
