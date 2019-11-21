import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Subscription } from 'rxjs';
import { Question } from '../model/question';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit ,OnDestroy {


  constructor(private questionsService:QuestionsService) { }
  questionsList:Array<Question>;
  questionsSubscription:Subscription;

  ngOnInit() {
    this.questionsSubscription=  this.questionsService.questionSubject.subscribe(questions=>{
      this.questionsList = questions;
    });
  }

  onQuestionSelect(question:Question) {
    this.questionsService.setDisplayedQuestion(question);
  }

  ngOnDestroy(): void {
    this.questionsSubscription.unsubscribe();
  }
}
