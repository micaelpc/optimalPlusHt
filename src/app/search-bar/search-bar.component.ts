import { Component, OnInit } from "@angular/core";
import { QuestionsService } from "../services/questions.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  searchString: string = "";
  constructor(private questionsService: QuestionsService) {}
  isLoading = false;
  ngOnInit() {
    this.questionsService.isLoadingSubject.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  onSearchClick() {
    this.questionsService.getQuestionsRelated(this.searchString);
  }
}
