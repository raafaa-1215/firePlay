$(document).ready(function() {
    var star1 = document.getElementById('star1');
    var star2 = document.getElementById('star2');
    var star3 = document.getElementById('star3');
    var star4 = document.getElementById('star4');
    var star5 = document.getElementById('star5');
    var count = 0;
    var sum = 0;

    star1.addEventListener('click', function() {
        addValueToAverage(1);
    });

    star2.addEventListener('click', function() {
        addValueToAverage(2);
    });

    star3.addEventListener('click', function() {
        addValueToAverage(3);
    });

    star4.addEventListener('click', function() {
        addValueToAverage(4);
    });

    star5.addEventListener('click', function() {
        addValueToAverage(5);
    });


    function addValueToAverage(value) {
        count = count + 1;
        sum = sum + value;

        var average = sum / count;

        document.getElementById('average').textContent = average.toFixed(2);
        localStorage.setItem('Average-rating', average.toFixed(2));
    }
});