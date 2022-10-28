import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-app';
  // favPhone: any;
  favoriteColorControl = new FormControl('');
  // favoriteColorControl.set('input');
  favPhone = this.favoriteColorControl.get('favoriteColorControl');
 testi : any;
}
