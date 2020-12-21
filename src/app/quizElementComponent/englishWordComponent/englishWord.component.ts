import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-english-word',
  templateUrl: './englishWord.component.html'
})
export class EnglishWordComponent implements OnInit {

  @Input() englishWord: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
