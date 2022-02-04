

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
    
    startTimeCountDown();
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [{
      q: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      o: ['if i = !5 then', 'if(i != 5)', 'if 1 <> 5', 'if(i <> 5)'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'How do you round the number 7.25, to the nearest integer?',
      o: ['rnd(7.25)', 'round(7.25)', 'Math.rnd(7.25)', 'Math.round(7.25)'],
      a: 3,
    },
    {
      q: 'Which event occurs when the user clicks on an HTML element?',
      o: ['onmouseclick', 'onclick', 'onchange', 'onmouseover'],
      a: 1,
    },
    {
      q: 'A Function Associated With An object is Called?',
      o: ['Function', 'Method', 'Link', 'None'],
      a: 1,
    },
    {
      q: 'How do you write "Hello World" in an alert box?',
      o: ['alertBox("Hello World")', 'msgBox("Hello World")', 'alert("Hello World")', 'msg("Hello World")'],
      a: 2,
    }
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>

                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score
  const calculateScore = () => {
    const final_score = document.getElementById("score")
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);

        if (quizItem.a == i) {
          //change background color of li element here
          liElement.style.background = '#1cd108'

        }
         

        if (radioElement.checked) {

          // code for task 1 goes here
          if (r === `radio_${index}_${quizItem.a}`) {
            score += 1;
            console.log(r + `radio_${index}_${quizItem.a}`);
          }
          console.log(`Your score is ${score} out of 5.`);
          final_score.innerHTML = `Your score is ${score} out of 5.`;
        }
        else{
          final_score.innerHTML = `Your score is ${score} out of 5.`;

        }
      }
    });
  };

  // call the displayQuiz function
  displayQuiz();

  //submit button for
  const btnSubmit = document.querySelector('#btnSubmit')
  btnSubmit.addEventListener('click', function (e) {
    calculateScore()
    btnSubmit.disabled = true;
  });


});






//reste button
const btnReset = document.querySelector('#btnReset')
btnReset.addEventListener('click', reset)

function reset() {
  score = 0;
  window.location.reload()

}

// countdown timer
const timerElement = document.getElementById('time');
let timer;

function startTimeCountDown() {
  timer = 15;
  const timeCountdown = setInterval(countdown, 1000);
}


function countdown() {
  if (timer < 0) {
    clearTimeout(timer);
    // if( confirm("TIMES UP!")){
    //   document.querySelector('#btnSubmit').click();
    // }
    document.querySelector('#btnSubmit').click();

  } else {
    timerElement.innerHTML = timer + ' secs';
    timer--;
  }
}

