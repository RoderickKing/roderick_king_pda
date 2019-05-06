const Card = require("../card.js");
const CardGame = require("../CardGame.js");

describe("card ", () => {
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;

  let allcards;
  let total;
  cardgame = new CardGame();
  beforeEach(() => {



    card1 = new Card("Diamonds",2);
    card2 = new Card("Spades",1);
    card3 = new Card("Hearts",3);
    card4 = new Card("Clubs",7);
    card5 = new Card("Spades",7);

    allcards = [card1, card2, card3, card4, card5];

    total = 0;
  });


  test("Card1 is not ace ", () => {
    expect(cardgame.checkforAce(card1)).toBe(false);
  });

  test("Card 1 should be greater than card 2 ", () => {
    expect(cardgame.highestCard(card1, card2)).toEqual(card1);
  });

  test("Card 3 should be  greater than card 2 ", () => {
    expect(cardgame.highestCard(card2, card3)).toEqual(card3);
  });
  test("Card 4 should be  the same as  card 5 ", () => {
    expect(cardgame.highestCard(card4, card5)).toBe("None");
  });


  test("grand total should be should be 20", () => {
    total = cardgame.cardsTotal(allcards);
    expect(total).toBe(20);
  });
});
