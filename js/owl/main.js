let click = false;
const star1 = document.getElementById('star1');
const star2 = document.getElementById('star2');
const star3 = document.getElementById('star3');
const star4 = document.getElementById('star4');
const star5 = document.getElementById('star5');
const stars = [star1, star2, star3, star4, star5];

var voted = document.getElementById('voted');

    function rate() {
        if(star1.classList.contains('fullstar') === true) {
            star1.classList.remove('fullstar');   
            star2.classList.remove('fullstar');   
            star3.classList.remove('fullstar');   
            star4.classList.remove('fullstar');
            star5.classList.remove('fullstar');
        }
            else { 
            star1.classList.add('fullstar');
            voted = document.getElementById('voted').innerHTML = "Very bad. Thank you for voting";
        } 
    }

    function rate2() {
        if(star2.classList.contains('fullstar') === true) {
            star1.classList.remove('fullstar');   
            star2.classList.remove('fullstar');   
            star3.classList.remove('fullstar');   
            star4.classList.remove('fullstar');
            star5.classList.remove('fullstar');

        }
            else {
            star1.classList.add('fullstar');
            star2.classList.add('fullstar');
            voted = document.getElementById('voted').innerHTML = "Bad. Thank you for voting";
            }
    }

    function rate3() {
        if(star3.classList.contains('fullstar') === true) {
            star1.classList.remove('fullstar');   
            star2.classList.remove('fullstar');   
            star3.classList.remove('fullstar');   
            star4.classList.remove('fullstar');
            star5.classList.remove('fullstar');

        }
            else {
            star1.classList.add('fullstar');
            star2.classList.add('fullstar');
            star3.classList.add('fullstar');
            voted = document.getElementById('voted').innerHTML = "Good. Thank you for voting";
            }
    }

    function rate4() {
        if(star4.classList.contains('fullstar') === true) {
            star1.classList.remove('fullstar');   
            star2.classList.remove('fullstar');   
            star3.classList.remove('fullstar');   
            star4.classList.remove('fullstar');
            star5.classList.remove('fullstar');

        }
            else {
            star1.classList.add('fullstar');
            star2.classList.add('fullstar');
            star3.classList.add('fullstar');
            star4.classList.add('fullstar');
            voted = document.getElementById('voted').innerHTML = "Very Good! Thank you for voting";

            }
    }

    function rate5() {
        if(star5.classList.contains('fullstar') === true) {
            star1.classList.remove('fullstar');   
            star2.classList.remove('fullstar');   
            star3.classList.remove('fullstar');   
            star4.classList.remove('fullstar');
            star5.classList.remove('fullstar');

        }
            else {
            star1.classList.add('fullstar');
            star2.classList.add('fullstar');
            star3.classList.add('fullstar');
            star4.classList.add('fullstar');
            star5.classList.add('fullstar');
            voted = document.getElementById('voted').innerHTML = "Excelent! Thank you for voting";

            }
    }