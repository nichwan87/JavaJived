//startSection
const startQuiz = document.querySelector('#commence');

//quizInfo
const quizInfo = document.querySelector('#rules');
const escape = document.querySelector('#escape');
const proceed = document.querySelector('#proceed');

//quizArea
const quizSection = document.querySelector('#quizContainer');
const quizTimer = document.querySelector('#countDown');

//quizQuestions
const quizQs = document.querySelector('#ques');
const quizQues = document.querySelector('#questionNumb');
const quizAsk = document.querySelector('#question');


//quizAnswerChoices
const optionA = document.querySelector('#optionA');
const optionB = document.querySelector('#optionB');
const optionC = document.querySelector('#optionC');
const optionD = document.querySelector('#optionD');
const choices = document.querySelector('.choices');
const multiChoice = document.querySelector('#multiChoice');

//resultSection
const results = document.querySelector('#results');
const score = document.querySelector('#score');
const formInitials = document.querySelector('#initials');
const formEmail = document.querySelector('#email');
const submitBtn = document.querySelector('#submit'); 
const exitBtn = document.querySelector('#exit');
const scores = document.querySelector('#scores')

//parameters
let index = 0;
let timer = 90;
let interval = 0;

//pointCounter
let correct = 0;

//userInputAnswer
let inputAns = '';


//functionalityForStart
startQuiz.addEventListener('click' , ()=> {
    startQuiz.style.display = 'none';
    quizInfo.style.display = 'block';
})

//functionalityForEscape
escape.addEventListener('click' , ()=> {
    quizInfo.style.display = 'none';
    startQuiz.style.display = 'block';
})

exitBtn.addEventListener('click' , ()=> {
    results.style.display = 'none';
    quizSection.style.display = 'block';
})

let loadData = () => {
    quizQues.innerText = index + 1 + '. ';
    quizAsk.innerText = quePart[index].quest;
    optionA.innerText = quePart[index].optionA;
    optionB.innerText = quePart[index].optionB;
    optionC.innerText = quePart[index].optionC;
    optionD.innerText = quePart[index].optionD;
}

loadData();

//functionalityForCommence
proceed.addEventListener('click' , ()=> {
    quizInfo.style.display = 'none';
    quizSection.style.display = 'block';
    
    let countDown = () => {
        if(timer === 00){
            clearInterval(interval);
        }
        else{
            timer--;
            quizTimer.innerText = timer;
        }
    }
    
    interval = setInterval(countDown, 1000);
    loadData(); 
    

});


    multiChoice.addEventListener('click' , () => {
        
                
        //check answer
        if (inputAns === quePart[index].answer) {
            correct++;
        } 
        else { 
            correct += 0;
            timer -= 5;
        }
        
        if (index != quePart.length - 1) {
            index++; 
            //question
            loadData();
        }
        else if ((index <= quePart.length) || (timer <= 0)) {
            clearInterval(interval);
            quizSection.style.display = 'none';
            results.style.display = 'block';
            score.innerText = `${correct}`;
        }
      console.log(correct)
      
    })



//Store data
submitBtn.addEventListener ('click' , () => {
    localStorage.setItem("leaderBoard", JSON.stringify(scores));
    scores.innerText = JSON.parse(localStorage.getItem("leaderBoard"));
   });