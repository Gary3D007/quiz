import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html'
})
export class ChoiceComponent implements OnInit {

  @Input() options: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
