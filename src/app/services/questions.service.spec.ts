import { TestBed } from "@angular/core/testing";
import { QuestionsService } from "./questions.service";
import { QuestionServiceTestingUtils } from "../testing-utils/question-service-test-utils";
import * as rawItemsJSON from '../testing-utils/rawItemsJSON.json'
import { HttpClient,HttpHandler } from "@angular/common/http";

describe("QuestionsService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[HttpClient,HttpHandler]
  }));

  it("should be created", () => {
    const service: QuestionsService = TestBed.get(QuestionsService);
    expect(service).toBeTruthy();
  });

  it("should convert items to Questions", () => {
    const service: QuestionsService = TestBed.get(QuestionsService);
    const questions = service.getModelledQuestions(rawItemsJSON['default']);
    expect(questions.length).toBe(30);
  });

});
