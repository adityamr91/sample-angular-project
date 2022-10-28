import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {
  addOnItem: boolean = false;
  sum: any;
  constructor() { }

  ngOnInit(): void {
    this.addOnItem = false;
    
  }

  action() {
    console.log('test');
  }

  addOn() {
    this.addOnItem = true;
  }

  addItem(res : any) {
    console.log(res);
    this.sum = res;
  }
}
