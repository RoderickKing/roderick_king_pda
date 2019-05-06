// Testing task 2 code:

// Carry out dynamic testing on the code below.
// Correct the errors below that you spotted in task 1.
var Card = require('./card');

class CardGame{

  checkforAce(card){
    if(card = 1){     Comments 1,2,3
      return true;
    }else{
      return false;
    }
  }

Comments on checkforAce(card)

Comment 1 : card =1 is an assignment operator changing the value - not testing it's value.
Comment 2 : card is an object.  Card.value should be tested as this is a object being
            passed in.
Comment 3: For simplicity - the returned value should be derived as
return this.card.value === 1; }
as it's a boolean value which is all that is required.




  highestCard(card1 card2){        Comment 1
    if(card1.value > card2.value){
      return card.name             Comment 2
    }
    else{
      card2                        Comment 3
    }
   }
  }                                Comment 4, Comment 5

Comments for highestCard(card1 card2)
Comment 1 : A comma is missing between the card1 and card2 input parameters.

Comment 2 : card.name is undefined in the Card Class. Should read as per line below.
            return card1;
Comment 3 : This is doing nothing and is not valid Javascript syntax.
            It should be return card2;
Comment 4 : This is an extra }. There are 3 open {  and there must be 3 closed -
            here there are 4.
Comment 4 : The possiblity of the same value for the cards being passed in must be
            explicitly catered for.

  static.cardsTotal(cards){
    return total;    >> Comment 1
    for(let card of cards){
      total += card.value;  Comment 2
      return "You have a total of " + total; Comment 3
    }
  }
}

Comments for static.cardsTotal(cards)
1.  This will only return undefined and leave. No other processing will be done.
2.  Total is undefined - bad practice. card.value is undefined and processing will stop.
3.  The return would be executed the first time and thus no total will be returned.


Extra Comment : There's no module.exports
