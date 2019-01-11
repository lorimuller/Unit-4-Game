
$(document).ready(function() {
    // var computerGuess;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var cry1;
    var cry2;
    var cry3;
    var cry4;
    
    
    
    
    // x = 19, y = 120
    // var targetNumber = Math.floor(Math.random()* ((120-19)+1)+19);
    // console.log("target number" + targetNumber);
    
    // $("#number-to-guess").text(targetNumber);
    
     // Create a randomly generated number between 19 and 120 for computer and between 1 & 12 for crystals   
        function newNumbers() {
            targetNumber = Math.floor(Math.random() * ((120-19)+1)+19);
            console.log("target number again " + targetNumber);
           
            cry1 = Math.ceil(Math.random() * 12); 
            console.log("crystal 1- " + cry1);
            
            cry2= Math.ceil(Math.random() * 12);
            console.log("crystal 2- " + cry2);
           
            cry3 = Math.ceil(Math.random() * 12);
            console.log("crystal 3- " + cry3);
           
            cry4 = Math.ceil(Math.random() * 12);
            console.log("crystal 4- " + cry4);
        }
    
        function newGame() {
            newNumbers();
            totalScore = 0;
            $("#number-to-guess").text(targetNumber);
            $("#totalScore").text(totalScore);
            $("#cry1").attr("data-crystalvalue", cry1);
            $("#cry2").attr("data-crystalvalue", cry2);
            $("#cry3").attr("data-crystalvalue", cry3);
            $("#cry4").attr("data-crystalvalue", cry4);
            $("#wins").text(wins);
            $("#losses").text(losses);
            $("#outcome").text("");
    
            console.log(cry1, cry2, cry3, cry4);
        }
    
        function winner() {
            $("#outcome").text("YOU WIN!");
            wins++;
            $("#wins").text(wins);
        }
    
        function looser() {
            $("#outcome").text("YOU LOSE");
            losses++;
            $("#losses").text(losses);
        }
    
        newGame();
    
        $(".crystalimg").hover(function() {
            $(this).css({opacity: 0.60});
        },
        function() {
            $(this).css({opacity: 1});
        });
    
        // Function to add the crystal values together
        $(".crystalimg").on("click", function() {
            if (totalScore >= targetNumber) {
                return;
            }
    
            var crystalValue = $(this).attr("data-crystalvalue");
            crystalValue = parseInt(crystalValue);
            totalScore += crystalValue;
            $("#totalScore").text(totalScore);
    
            if (totalScore === targetNumber) {
                winner();
            } else if (totalScore > targetNumber) {
                looser();
            }
        });
    
        $(".btn").on("click", function() {
            newGame();
        });
    
    });