import {Component} from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    document.body.style.margin = '0';
  }
}
