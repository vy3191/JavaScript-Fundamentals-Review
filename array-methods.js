// The array below is full of objects that represent different games. 
//Complete the tasks by using the For Each, Map, Filter and Reduce methods

const games = [
    {
        id: 1,
        name: 'Monopoly',
        gameType: 'Board',
        minPlayers: 2,
        maxPlayers: 6,
        difficulty: 'Medium',
        inInventory: 6,
    },
    {
        id: 2,
        name: 'Chess',
        gameType: 'Strategy',
        minPlayers: 2,
        maxPlayers: 2,
        difficulty: 'Hard',
        inInventory: 2,
    },
    {
        id: 3,
        name: 'Hearts',
        gameType: 'Card',
        minPlayers: 4,
        maxPlayers: 8,
        difficulty: 'Easy',
        inInventory: 4,
    },
    {
        id: 4,
        name: 'War',
        gameType: 'Card',
        minPlayers: 2,
        maxPlayers: 5,
        difficulty: 'Easy',
        inInventory: 9,
    },
    {
        id: 5,
        name: 'Risk',
        gameType: 'Strategy',
        minPlayers: 2,
        maxPlayers: 6,
        difficulty: 'Hard',
        inInventory: 1,
    },
    {
        id: 6,
        name: 'Scrabble',
        gameType: 'Word',
        minPlayers: 1,
        maxPlayers: 4,
        difficulty: 'Medium',
        inInventory: 7,
    },
    {
        id: 7,
        name: 'Boggle',
        gameType: 'Word',
        minPlayers: 1,
        maxPlayers: 8,
        difficulty: 'Easy',
        inInventory: 6,
    },
    {
        id: 8,
        name: 'Clue',
        gameType: 'Board',
        minPlayers: 3,
        maxPlayers: 6,
        difficulty: 'Easy',
        inInventory: 3,
    },
    {
        id: 9,
        name: 'Ticket to Ride',
        gameType: 'Strategy',
        minPlayers: 2,
        maxPlayers: 6,
        difficulty: 'Hard',
        inInventory: 2,
    },
    {
        id: 10,
        name: 'Checkers',
        gameType: 'Board',
        minPlayers: 2,
        maxPlayers: 2,
        difficulty: 'Easy',
        inInventory: 5,
    },
    {
        id: 11,
        name: 'Trivial Pursuit',
        gameType: 'Trivia',
        minPlayers: 2,
        maxPlayers: 5,
        difficulty: 'Hard',
        inInventory: 1,
    },
    {
        id: 12,
        name: 'Mastermind',
        gameType: 'Puzzle',
        minPlayers: 2,
        maxPlayers: 3,
        difficulty: 'Medium',
        inInventory: 8,
    },
    {
        id: 13,
        name: 'Settlers of Catan',
        gameType: 'Strategy',
        minPlayers: 2,
        maxPlayers: 6,
        difficulty: 'Medium',
        inInventory: 4,
    },
    {
        id: 14,
        name: 'Slapjack',
        gameType: 'Card',
        minPlayers: 2,
        maxPlayers: 4,
        difficulty: 'Easy',
        inInventory: 5,
    },
    {
        id: 15,
        name: 'The Game of Life',
        gameType: 'Board',
        minPlayers: 2,
        maxPlayers: 6,
        difficulty: 'Easy',
        inInventory: 3,
    },
    {
        id: 16,
        name: 'Codenames',
        gameType: 'Board',
        minPlayers: 4,
        maxPlayers: 8,
        difficulty: 'Medium',
        inInventory: 2,
    },
    {
        id: 17,
        name: 'Candy Land',
        gameType: 'Board',
        minPlayers: 2,
        maxPlayers: 4,
        difficulty: 'Easy',
        inInventory: 7,
    },
    {
        id: 18,
        name: 'Carcassone',
        gameType: 'Strategy',
        minPlayers: 2,
        maxPlayers: 5,
        difficulty: 'Medium',
        inInventory: 4,
    },
    {
        id: 19,
        name: 'Battleship',
        gameType: 'Board',
        minPlayers: 2,
        maxPlayers: 2,
        difficulty: 'Easy',
        inInventory: 3,
    },
    {
        id: 20,
        name: 'Poker',
        gameType: 'Card',
        minPlayers: 4,
        maxPlayers: 6,
        difficulty: 'Medium',
        inInventory: 6,
    },
]


// **Question 1: A customer has come into the game shop and wants to view the card game section. Using ForEach, 
//show the customer a list of all the card games
 games.forEach(function(ele){
       console.log(ele.name);
});




//**Question 2: The shop owner would like to create a booklet that tells the following for each game in his store:
// "Our store has GAMENAME, a TYPE game for MINPLAYERS to MAXPLAYERS players." Use Map to export that statement for
//each game.
let statement = games.map(function(element){
      return `Our store has ${element.name}, a ${element.gameType} for ${element.minPlayers} to ${element.maxPlayers} players.`;
});

console.log(statement);


//**Question 3: The shop owner would like to create 3 lists of games. Easy, medium and hard difficulty so 
//customers can quickly find the level they're looking for. Use Filter to return three arrays sorted by difficulty
   function getThreeArrays(arr) {
         let filterArray = [];
         let easyArray = arr.filter(function(ele){
               return ele.difficulty === 'Easy';
          });
         
         let mediumArray = arr.filter(function(ele){
              return ele.difficulty === 'Medium';
         });
         let hardArray = arr.filter(function(ele){
              return ele.difficulty === 'Hard';
         });

          filterArray.push(easyArray);
          filterArray.push(mediumArray);
          filterArray.push(hardArray);

          return filterArray;
   }

   console.log(getThreeArrays(games));


//**Question 4: A customer is hosting a party that will have 5 players in total. She would like a list of all the 
//games that her group of friends could play, appropriate for 5 players. Return an array list of those games.

let myArray = games.filter(function(element) {
                return element.maxPlayers === 5;
             }).map(function(element){
                return element.name; 
             });

console.log(myArray);             


//**Question 5: A buyer for a neaby toy store wants to come in and purchase 5 of every Easy game, 3 of every Medium game
// and 2 of every Hard game. Using any method, return a statement for each game in inventory that says if there
//are enough of that game in inventory to fulfill the order, and how many of each game will be left after the 
//order is fulfilled.

