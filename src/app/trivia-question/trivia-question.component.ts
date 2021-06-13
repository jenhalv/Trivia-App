import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-trivia-question',
  templateUrl: './trivia-question.component.html',
  styleUrls: ['./trivia-question.component.scss']
})
export class TriviaQuestionComponent implements OnInit {
  @Input() public question: Question;
  @Input() public shouldDisplay: boolean;
  @Output() public answeredEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public onAnswerSelected(index: number): void {
    this.answeredEvent.emit(this.question.answers[index].correct);
  }

}
