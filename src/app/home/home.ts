import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hand } from "../components/hand/hand";

@Component({
  selector: 'app-home',
  imports: [CommonModule, Hand],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  //change this to change the button style
  buttonClass: string = "button-74";
  //This variable is used to show the encoding of the hand when the button is clicked.
  showEncoding:boolean=false;

}
