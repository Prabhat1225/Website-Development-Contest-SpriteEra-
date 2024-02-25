// For shake of understanding some comments are provided.

function showPage2() {
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');

    if (page1 && page2) {
        page1.style.display = 'none';
        page2.style.display = 'block';

        startTimer(5, 0);
    }
}

function startTimer(minutes, seconds) {
    var timerElement = document.getElementById('timer');

    var interval = setInterval(function () {
        if (minutes === 0 && seconds === 0) {
            clearInterval(interval);
            submitAnswers();
        } else {
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }

            timerElement.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    }, 1000);
}

function submitAnswers() {
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');
    var timeTakenElement = document.getElementById('timeTaken');
    var userAnswersElement = document.getElementById('userAnswers');

    if (page2 && page3 && timeTakenElement && userAnswersElement) {
        page2.style.display = 'none';
        page3.style.display = 'block';

        // It is used for total time  taken
        var timerElement = document.getElementById('timer');
        var timeTaken = 5 * 60 - parseInt(timerElement.innerText.split(':')[0]) * 60 - parseInt(timerElement.innerText.split(':')[1]);
        timeTakenElement.innerText = `${Math.floor(timeTaken / 60)} minutes and ${timeTaken % 60} seconds`;

        // It is used for collect user answer
        var userAnswers = "User Answers: ";
        var radioButtons = document.querySelectorAll('input[type="radio"]:checked');
        radioButtons.forEach(function (radioButton) {
            userAnswers += `${radioButton.value}, `;
        });

        userAnswersElement.innerText = userAnswers.slice(0, -2);
    }
}
