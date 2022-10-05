import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public step: number = 1;
  constructor() {}

  ngOnInit(): void {}

  nextStep(): void {
    this.step = this.step + 1;
  }
}
