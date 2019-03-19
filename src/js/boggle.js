function rollDie(diceNum, diceLetter) {
  const randNum = Math.floor(Math.random()*6);
  return diceLetter[randNum];
}

const dice0 = ["R", "I", "F", "O", "B", "X"];
const dice1 = ["I", "F", "E", "H", "E", "Y"];
const dice2 = ["D", "E", "N", "O", "W", "S"];
const dice3 = ["U", "T", "O", "K", "N", "D"];
const dice4 = ["H", "M", "S", "R", "A", "O"];
const dice5 = ["L", "U", "P", "E", "T", "S"];
const dice6 = ["A", "C", "I", "T", "O", "A"];
const dice7 = ["Y", "L", "G", "K", "U", "E"];
const dice8 = ["QU", "B", "M", "J", "O", "A"];
const dice9 = ["E", "H", "I", "S", "P", "N"];
const dice10 = ["V", "E", "T", "I", "G", "N"];
const dice11 = ["B", "A", "L", "I", "Y", "T"];
const dice12 = ["E", "Z", "A", "V", "N", "D"];
const dice13 = ["R", "A", "L", "E", "S", "C"];
const dice14 = ["U", "W", "I", "L", "R", "G"];
const dice15 = ["P", "A", "C", "E", "M", "D"];
const diceArr = [dice0, dice1, dice2, dice3, dice4, dice5, dice6, dice7, dice8, dice9, dice10, dice11, dice12, dice13, dice14, dice15];

function createGrid(dice) {
  let grid = [];
    for (let i = 0; i<4; i++) {
      let newArr=[];
      for (let j= (4 * i); j < 4 + (4 * i); j++) {
        let letter = rollDie(i, dice[j]);
        newArr.push(letter);
      }
      grid.push(newArr);
    }
  return grid;
}

const test = createGrid(diceArr);

console.log(test);
