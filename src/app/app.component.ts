import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-calcolatrice';

  num1 = 0;
  num2 = 0;
  res = 0;

  addizione(num1:number, num2:number) {
    this.num1 = num1
    this.num2 = num2
    this.res = this.num1 + this.num2
  }
  sottrazione(num1:number, num2:number) {
    this.num1 = num1
    this.num2 = num2
    this.res = this.num1 - this.num2
  }
  moltiplicazione(num1:number, num2:number) {
    this.num1 = num1
    this.num2 = num2
    this.res = this.num1 * this.num2
  }
  divisione(num1:number, num2:number) {
    this.num1 = num1
    this.num2 = num2
    this.res = this.num1 / this.num2
  }
}
