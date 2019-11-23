import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from "@angular/core";
import { QuestionsService } from "../services/questions.service";
import { Question } from "../model/question";

@Component({
  selector: "app-questions-list",
  templateUrl: "./questions-list.component.html",
  styleUrls: ["./questions-list.component.css"],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class QuestionsListComponent {
  constructor(private questionsService: QuestionsService) {}
  questionsList$ = this.questionsService.questionSubject;
  onQuestionSelect(question: Question) {
    this.questionsService.setDisplayedQuestion(question);
  }
}
