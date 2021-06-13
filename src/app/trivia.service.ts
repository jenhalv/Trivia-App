import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  public getTriviaQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('https://cnc-trivia-api.herokuapp.com/sampleQuestions');
  }

  constructor(private http: HttpClient) { }
}
