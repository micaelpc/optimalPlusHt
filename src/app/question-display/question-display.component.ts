import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Question } from '../model/question';

@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.css']
})
export class QuestionDisplayComponent implements OnInit {

  constructor(private questionService:QuestionsService) { }

  displayedQuestion:Question;
  ngOnInit() {
    this.questionService.questionDisplayedSubject.subscribe(question=>{
      this.displayedQuestion = question;
    });
    
  }

}
