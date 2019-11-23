import { Component, ChangeDetectionStrategy} from "@angular/core";
import { QuestionsService } from "../services/questions.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"] ,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent {
  searchString: string = "";
  constructor(private questionsService: QuestionsService) {}
  isLoading$ = this.questionsService.isLoadingSubject;

  onSearchClick() {
    this.questionsService.getQuestionsRelated(this.searchString);
  }
}
