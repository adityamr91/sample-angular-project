import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi',
  templateUrl: './mi.component.html',
  styleUrls: ['./mi.component.css']
})
export class MiComponent implements OnInit {
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
