import { Component, OnInit, Output, EventEmitter, Input,  SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  childVar: any;
  childVar1: any;
  constructor() { }
  
  @Input() parentToChild1: any;
  @Output() newItemEvent = new EventEmitter<any>();

  // @Input 1
  ngOnChanges(changes: SimpleChanges) {
    this.childVar1 = changes.parentToChild1.currentValue;
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values
  }

  //@Input 2
  @Input() set parentToChild(value: string) {
    this.childVar = value;
  }
  get parentToChild(): string {
    return this.childVar;
  }


  ngOnInit(): void {
  }

  action(response: any) {
    this.newItemEvent.emit(response.innerText);
    alert('Child to Parent Communication Alert')
  }
  
}
