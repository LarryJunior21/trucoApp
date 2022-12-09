var cards: Card[] = require('../assets/cards.json');

class Card {
  private id: string;
  private picture_name: string;
  private suite: string;
  private number: number;
  private strength: number;

  constructor(suite: string, number: number) {
    this.suite = suite;
    this.number = number;

    const card = cards.find((card) => card.id === (suite + number).toString());
    const id = card?.id ?? '';
    const strength = card?.strength ?? 0;
    const picture_name = card?.picture_name ?? '';

    this.id = id;
    this.strength = strength;
    this.picture_name = picture_name;
  }

  public getId(): string {
    return this.id;
  }
  public getPictureName(): string {
    return this.picture_name;
  }
  public getSuite(): string {
    return this.suite;
  }
  public getNumber(): number {
    return this.number;
  }
  public getStrength(): number {
    return this.strength;
  }
}

export default Card;
