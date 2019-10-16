/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding defaults the function to the object unless it is in strict mode which will stop the binding from breaking the code and will result in undefined
* 2. Implicit binding is used 80% of the time in objects with methods and it refers to the object to the left of the dot "." when it is invoked.
* 3. Explicit binding uses the .call, .bind and .apply tp pass arguments and will explicity state which keyword that this is being applied to i.e. .call(info). 
* 4. New binding uses a new keyword in the constructor function to "construct" a new object and this will point to the new object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function movie() {
    console.log(this.genre);
}

var genre = 'action';

movie();

// Principle 2

// code example for Implicit Binding
let myTruck = {
    make: 'Dodge',
    model: '1500',
    version:function(){
        console.log(this.make);
    }
}
myTruck.version();

// Principle 3

// code example for Explicit Binding
//call
function faveMovie(){
    console.log(this.name);
}

let myFaveMovie = {
    name: 'Blade',
    genre: 'horror',
}

let otherFaveMovie = {
    name: 'The Hobbit',
    genre: 'fantasy',
}
faveMovie.call(myFaveMovie);
faveMovie.call(otherFaveMovie);

// Principle 4

// code example for New Binding
function Bestmovie(quote) {
    this.phrase = quote;
}
let myBestmovie = new Bestmovie('You\'re supposed to be dead.');

console.log(myBestmovie.phrase);