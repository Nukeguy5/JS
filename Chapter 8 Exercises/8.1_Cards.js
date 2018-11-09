function Card() {
  var face;
  var suit;

  this.setValue = function() {
    var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    var faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

    // Pick random suit
    this.suit = suits[Math.floor(Math.random() * suits.length)];
    // Pick random face
    this.face = faces[Math.floor(Math.random() * faces.length)];

    alert([this.face + ' of ' + this.suit]);
  }
}
