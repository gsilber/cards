import { Component, Input } from '@angular/core';

export enum Suit {
  Hearts = 1,
  Diamonds = 2,
  Clubs = 3,
  Spades = 4
}

export class CardData {
  constructor(public rank: number, public suit: Suit) { }
}

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() cardData: CardData = { rank: 1, suit: Suit.Hearts };
  @Input() show: boolean = true;

  //getImage()
  //@description: This function returns the image path for the card in the assets directory.  The image is named in the format "rank_of_suit.png", where rank is the rank of the card and suit is the suit of the card.  For example, the image for the ace of hearts would be "ace_of_hearts.png".
  //@params: none
  //@returns: string - the image path for the card in the assets directory.
  getImage(): string {
    const suitNames = ['hearts', 'diamonds', 'clubs', 'spades'];
    const rankNames = [null, 'ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    return `assets/images/${rankNames[this.cardData.rank]}_of_${suitNames[this.cardData.suit - 1]}.png`;
  }
}
