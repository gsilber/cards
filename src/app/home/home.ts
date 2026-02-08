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

  show:boolean=false;
  hand: Hand = new Hand();

  dealHand(): void {
    this.show=false;
    this.hand = new Hand();
  }

  getCardImage(card: Card): string {
    return card.getImage();
  }
}
