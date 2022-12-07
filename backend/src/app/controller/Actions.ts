import Card from "../model/Card";

class Actions {
  constructor() {}

  protected getRandomNum(max: number) {
    return Math.floor(Math.random() * max);
  }

  protected randomBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  protected getCardNumber() {
    //Actual number of the card
    let number = this.randomBetween(1, 14);

    switch (number) {
      case 8:
        number = 11;
        break;
      case 9:
        number = 12;
        break;
      case 10:
        number = 13;
        break;
    }

    return number;
  }

  protected getCardSuite() {
    const num = this.getRandomNum(4);
    let suite = "";

    switch (num) {
      case 0:
        suite = "spades";
        break;
      case 1:
        suite = "hearts";
        break;
      case 2:
        suite = "clubs";
        break;
      case 3:
        suite = "diamonds";
        break;
    }
    return suite;
  }

  public drawCard(number: Number) {
    let dealedCards = new Array();
    while (dealedCards.length < number) {
      const number = this.getCardNumber();
      //Create a new card
      let card = new Card(this.getCardSuite(), number);

      const id = card.getId();
      // Check if the card already exists in the collection
      const found = dealedCards.some((el) => el.id === id);
      if (!found) dealedCards.push(card);
    }

    return dealedCards;
  }
}

export default new Actions();
