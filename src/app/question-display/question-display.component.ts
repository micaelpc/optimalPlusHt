import { Component, ChangeDetectionStrategy} from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Question } from '../model/question';

@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class QuestionDisplayComponent  {

  constructor(private questionService:QuestionsService) { }

  displayedQuestion$ = this.questionService.questionDisplayedSubject;
}
