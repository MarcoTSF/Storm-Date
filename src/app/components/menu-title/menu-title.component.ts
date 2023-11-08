import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent {
  inputValue: string = '';

  handleClick(): void {
    if (this.inputValue) {
      console.log(this.inputValue);
    } else {
      console.log("O campo de entrada está vazio.");
    }
  }
}