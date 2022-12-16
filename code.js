
class Card {
    constructor (suit, rank, score){
       this.suit = suit; 
       this.rank = rank; 
       this.score = score; 
    }
}


class Deck {
    constructor (){
        this.deck= []; 
        }
        createDeck (suits, ranks, scores){
                for (let i = 0; i <  suits.length; i ++){
                    for (let j = 0; j < ranks.length ; j ++){
                    this.deck.push (new Card (suits[i], ranks[j], scores[j]))
                       }
                    }
                    return this.deck; 
                }
    shuffle () {
        let counter = this.deck.length; 
        let temp = 0; 
        let i = 0; 
    while(counter){
        i = Math.floor(Math.random() * counter --); 
        temp = this.deck[counter]; 
        this.deck[counter] = this.deck[i]; 
        this.deck[i] = temp; 
    }
        return this.deck; 
    }

    // deal (){
    // let hand = [];
    // while(hand.length < 26){
    //     hand.push(this.deck.pop());
    // }
    // return hand; 
    
    
    deal (deck){
        const middle = Math.ceil (this.deck.length /2)
        const playerOne = this.deck.slice(0, middle); 
        const playerTwo = this.deck.slice(middle); 
        return { playerOne, playerTwo} ; 
    }
    
}   
     
      





// class Player {
//     constructor (playerOne, playerTwo){
//         this.playerOne = playerOne; 
//         this.playerTwo = playerTwo; 
//     }

    // play (){
    //     console.log(`Score: 
    //     player 1: ${playerOne} points 
    //     player 2: ${playerTwo} points`)
    //     deck.deal()
    //     if (Card[0].score > Card[1].score){
    //         playerOne ++
    //         playerTwo --
    //         return console.log(`Result: 
    //         player 1: ${Card[0]}
    //         player 2: ${Card[1]}
            
            
    //         player 1 wins!`)
    //     } else if (Card[1].score < Card[0].score){
    //         playerOne --;
    //         playerTwo ++;
    //         return console.log(`Result: 
    //         player 1: ${Card[0]}
    //         player 2: ${Card[1]}
            

    //         player 2 wins!`)
    //     }

    // }


//     (Card[0].score > Card[1].score){
//                 playerOne ++
//                 playerTwo --
//                 return console.log(`Result: 
//                 player 1: ${Card[0]}
//                 player 2: ${Card[1]}
                
                
//                 player 1 wins!`)
//             } else if (Card[1].score < Card[0].score){
//                 playerOne --;
//                 playerTwo ++;
//                 return console.log(`Result: 
//                 player 1: ${Card[0]}
//                 player 2: ${Card[1]}
                
    
//                 player 2 wins!`)
//             }
// }


const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]; 
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 
// let playerOne = 26; 
// let playerTwo = 26; 

const deck = new Deck(); 
const playerOne = deck.deal().playerOne; 
const playerTwo = deck.deal().playerTwo; 
deck.createDeck(suits, ranks, scores); 
//deck.shuffle(); 
//console.log(deck.deal()); 

//let myArray = deck.deal()


let playerOneScore = 26; 
let playerTwoScore = 26; 
const compare = (playerOne, playerTwo) => {
        let i = 0
        let winner = "error"; 
        while(playerOneScore > 0 && playerTwoScore > 0){
        if(deck.deal().playerOne[i].score > deck.deal().playerTwo[i].score){
            winner = 'player one wins!'
            playerOneScore ++; 
            playerTwoScore -- ;
            i ++
            break; 
        } else if(deck.deal().playerTwo[i].score > deck.deal().playerOne[i].score){
            winner = 'player two wins!'
            playerOneScore --; 
            playerTwoScore ++;
            i++
            break; 
        }
        return (`${winner} 
        Player One played ${playerOne[i].rank} of ${playerOne[i].suit}
        Player Two played ${playerTwo[i].rank} of ${playerTwo[i].suit}
        
        ***CARDS REMAINING***
        player One: ${playerOneScore}
        player Two: ${playerTwoScore}`);
            
            }
        }
     
//         if (playerOne[].score > array[1].score){
//         winner = "Player One wins!";
//         playerOneScore ++; 
//         playerTwoScore --
//     }else if (array[0].score < array[1].score){
//         winner = "Player Two wins!"
//         playerOneScore -- ; 
//         playerTwoScore ++ ; 
//         }
//         return (`${winner} 
//         Player One played ${deck.deal()[0].rank} of ${deck.deal()[0].suit}
//         Player Two played ${deck.deal()[1].rank} of ${deck.deal()[1].suit}
        
//         ***CARDS REMAINING***
//         player One: ${playerOneScore}
//         player Two: ${playerTwoScore}`);
//     }    
// // console.log(compare(myArray)); 
// deck.deal(); 
//console.log(deck);
deck.shuffle(); 
console.log(deck.deal());
console.log(compare(deck.deal().playerOne, deck.deal().playerTwo)); 
