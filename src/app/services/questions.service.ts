import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Subject, EMPTY } from "rxjs";
import { Question } from "../model/question";
@Injectable({
  providedIn: "root"
})
export class QuestionsService {
  constructor(private httpClient: HttpClient) {}
  questionSubject: Subject<Array<Question>> = new Subject<Array<Question>>();
  questionDisplayedSubject: Subject<Question> = new Subject<Question>();
  isLoadingSubject: Subject<boolean> = new Subject<boolean>();

  getQuestionsRelated(tag: string) {
    if (tag) {
      this.isLoadingSubject.next(true);
      const getUrl = this.getGETUrl(tag);
      this.httpClient
        .get(getUrl)
        .pipe(
          map((response: any) => response.items),
          map(questions =>
            (questions as Array<any>).map(question => {
              return new Question(
                question.title,
                question.view_count,
                question.score,
                question.link
              );
            })
          )
        )
        .subscribe(
          questions => {
            this.questionSubject.next(questions);
            this.questionDisplayedSubject.next();
            this.isLoadingSubject.next(false);
          },
          err => {
            this.questionSubject.next();
            this.questionDisplayedSubject.next();
            this.isLoadingSubject.next(false);
            console.log(err);
            return EMPTY;
          }
        );
    }
  }

  getModelledQuestions(questions: Array<any>): Array<Question> {
    const modelledQuestions = new Array<Question>();
    if (questions && questions.length) {
      questions.forEach(q => {
        modelledQuestions.push(
          new Question(q.title, q.view_count, q.score, q.link)
        );
      });
    }
    return modelledQuestions;
  }

  setDisplayedQuestion(question: Question) {
    this.questionDisplayedSubject.next(question);
  }

  getGETUrl(tag: string) {
    return `https://api.stackexchange.com/2.2/tags/${tag}/faq?site=stackoverflow`;
  }
}
