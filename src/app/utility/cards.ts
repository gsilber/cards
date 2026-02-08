enum Suit {
	Hearts = 1,
	Diamonds = 2,
	Clubs = 3,
	Spades = 4
}

export class Card {
	public order: number = 0;
	constructor(public suit: Suit, public rank: number) {
		this.suit = suit;
		this.rank = rank;
	}
	getImage(): string {
	    const suitNames = ["hearts", "diamonds", "clubs", "spades"];
    	const rankNames = [null, "ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
		return `assets/images/${rankNames[this.rank]}_of_${suitNames[this.suit - 1]}.png`;
	}
}
export class Hand {
	cards: Card[] = [];
	constructor() {
		this.cards = Hand.getRandomHand();
		console.log(this.cards);
		this.orderHand();
		console.log(this.cards);
	}

	public orderHand():void{
		// Pick 2 cards from hand that are the same suit
		const suitGroups: { [key: number]: Card[] } = {};
		this.cards.forEach(card => {
			if (!suitGroups[card.suit]) {
				suitGroups[card.suit] = [];
			}
			suitGroups[card.suit].push(card);
		});
		let suit:Suit=1;
		Object.keys(suitGroups).forEach(key => {
			const group = suitGroups[parseInt(key)];
			if (group.length >= 2) {
				suit=key as unknown as Suit;
			}
		});
		let paired:Card[]=[];		
		for (let i=0;i<2;i++){
			paired.push(suitGroups[suit][i]);
			this.cards.splice(this.cards.indexOf(suitGroups[suit][i]),1);
		}
		console.log(paired);
		paired.sort((a,b)=>a.rank-b.rank);
		let diff=paired[1].rank-paired[0].rank;
		//if diff>6 swap the cards
		if (diff>6){
			const temp=paired[0];
			paired[0]=paired[1];
			paired[1]=temp;
		}
		diff=paired[1].rank-paired[0].rank;
		//if diff is negative figure out the difference with wrap around
		if (diff<0){
			diff=paired[1].rank+13-paired[0].rank;
		}
		console.log("diff: "+diff);
		//sort cards by rank, then suit
		this.cards.sort((a,b)=>{
			if (a.rank===b.rank){
				return a.suit-b.suit;
			}
			return a.rank-b.rank;
		});
		switch(diff){
			case 1: //sml
				break;
			case 2: //slm
				this.swapCards(1,2)
				break;
			case 3:  //msl
				this.swapCards(0,1);
				break;
			case 4: //mls
				this.swapCards(0,2)
				this.swapCards(0,1);
				break;
			case 5: //lsm
				this.cards.unshift(this.cards.pop()!);
				break;
			case 6: //lms
				this.cards.reverse();
				break;
		}
		this.cards.unshift(paired[0]);
		this.cards.push(paired[1]);
	}

	private swapCards(index1: number, index2: number): void {
		const temp = this.cards[index1];
		this.cards[index1] = this.cards[index2];
		this.cards[index2] = temp;
	}

	private static getRandomHand(): Card[] {
		const hand: Card[] = [];
		while (hand.length < 5) {
			const suit = Math.floor(Math.random() * 4) + 1; // Random suit between 1 and 4
			const rank = Math.floor(Math.random() * 13) + 1; // Random rank between 1 and 13
			const card = new Card(suit, rank);
			// Check for duplicates
			if (!hand.some(c => c.suit === card.suit && c.rank === card.rank)) {
				hand.push(card);
			}
		}
		return hand;
	}

}