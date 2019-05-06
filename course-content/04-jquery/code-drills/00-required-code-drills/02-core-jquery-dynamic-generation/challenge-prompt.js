$(document).ready(function () {

    $(document).on("click", "#randomLetter", function() {

        // create variable called `text` and have it equal an empty string
        var text = ""
        
        // create a variable called `possibleLetters` that contains all the letters of the alphabet
        var possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        
        // Create a new variable `randIndex` that is a random number between 0 and the last index of `possibleLetters`
        var  randIndex = Math.floor(Math.random()*possibleLetters.length)
        
        // Using the `randIndex` and `possibleLetters` variables, set `randLetter` to be a random letter
        var randLetter = possibleLetters[randIndex] 
        
        // console log the value of `randLetter`
        console.log(randLetter)
        
        // append `randLetter` to the element with an id of `letters`
        $("#letters").append(randLetter)
        

    });

});
