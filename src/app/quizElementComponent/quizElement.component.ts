import {Component, OnInit} from '@angular/core';
import {QuizElementsService} from './quizElements.service';
import {IQuizElement} from '../../types';

@Component({
  selector: 'app-quiz-element',
  templateUrl: './quizElement.component.html',
  providers: [QuizElementsService]
})
export class QuizElementComponent implements OnInit {

  elements: IQuizElement[];
  currentElement: IQuizElement;
  currentIndex: number;
  isLastElement: boolean;

  constructor(private quizElementsService: QuizElementsService) {
    this.elements = new Array<IQuizElement>();
  }

  ngOnInit(): void {
    this.loadElements();
    this.isLastElement = false;
  }

  loadElements = (): void => {
    this.quizElementsService.getQuizElements(1).subscribe(
      (response) => {
        this.elements = response.body;
        this.setCurrentElement(0);
        console.log(this.elements);
      });
  };

  changeElement = (): void => {
    this.setCurrentElement(++this.currentIndex);
  };

  setCurrentElement = (index: number): void => {
    if (index === this.elements.length - 1) {
      this.isLastElement = true;
    }
    this.currentIndex = index;
    this.currentElement = this.elements[this.currentIndex];
  };
}
