import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samsung',
  templateUrl: './samsung.component.html',
  styleUrls: ['./samsung.component.css']
})
export class SamsungComponent implements OnInit {
  addOnItem: boolean = false;
  sum: any;
  parentVariable: any;
  parentVariable1: any;
  constructor() { }

  ngOnInit(): void {
    this.addOnItem = false;
  }

  action() {
    console.log('test');
    this.parentVariable = 100;
    this.parentVariable1 = 1000;
  }

  addOn() {
    this.addOnItem = !this.addOnItem;
  }

  addItem(res : any) {
    console.log(res);
    this.sum = res;
  }

}
