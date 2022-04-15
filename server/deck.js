class Card
{
    constructor(value, name, suit)
    {
        this.value = value
        this.name = name
        this.suit = suit
    }

    print() {
        return (`my name is ${this.name} of ${this.suit}. I'm worth ${this.value}`)
    }
}

function Deck() {
    this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	let cards = [];
    
    for( let suit = 0; suit < this.suits.length; suit++ ) {
        for( let name = 0; name < this.names.length; name++ ) {
            cards.push( new card( name+1, this.names[name], this.suits[suit] ) );
        }
    }

    return cards;
}

export { Card, Deck }