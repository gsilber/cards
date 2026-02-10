import { Component } from '@angular/core';
import { Card, Hand } from '../utility/cards';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  //change this to change the button style
  buttonClass: string = "button-74";
  //The last card is hidden by default.  This variable makes it visible and is modified by the button click.
  show:boolean=false;
  //This variable is used to show the encoding of the hand when the button is clicked.
  showEncoding:boolean=false;

  hand: Hand = new Hand();

  //dealHand()
  //@description: This function is called when the button is clicked.  It creates a new hand and sets show to false to hide the last card.
  //@params: none
  //@returns: void
  dealHand(): void {
    this.show=false;
    this.hand = new Hand();
  }

  //getCardImage()
  //@description: This function takes a card object and returns the image path for that card.
  //@params: card: Card - the card object to get the image for.
  //@returns: string - the image path for the card in the assets directory.
  getCardImage(card: Card): string {
    return card.getImage();
  }
}
