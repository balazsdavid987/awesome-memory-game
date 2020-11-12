import arrayShuffle from "array-shuffle";

export const createDeck = (cardTypes, deckSize) => {
  let cards = cardTypes.slice(0, deckSize);
  cards = cards.reduce((result, card) => [...result, card, card], []);
  cards = arrayShuffle(cards);
  const deck = cards.map((card, i) => ({
    image: card,
    flipped: false,
    disabled: false,
    id: i,
  }));
  return deck;
};
