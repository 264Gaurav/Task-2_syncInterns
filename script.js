const quizDB=[
    {
        question: "Q1: What is the full form of WWW?",
        a: "World Web Wide",
        b: "World Website Web",
        c: "World Wide Web",
        d: "Wide Word Website",
        ans: "ans3"

    },
    {
        question: "Q2:Who is the father of Computers?",
        a:"James Gosling",
        b: "Charles Babbage",
        c:  "Bjarne Stroustup",
        d: "Dennis Ritchie",
        ans: "ans2"
    },



    {
        question: "Q3:String is a ------ .",
        a: "character",
        b: "Data type",
        c: " Data structure",
        d: "all of above",
        ans: "ans2"
    },
    {
        question: "Q4: Which of the following language does the computer understand?",
        a: "Computer understands only C Language",
        b: "Computer understands only Assembly Language",
        c: "Computer understands only Binary Language",
        d: "Computer understands only BASIC",
        ans: "ans3"
    },
    {
        question: "Q5: Which of the following is designed to control the operations of a computer?",
        a:"User" ,
        b:" Application Software",
        c:" System Software",
        d:" Utility Software",
        ans:"ans3"
    },

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');


//  for answer 

const answers=document.querySelectorAll('.answer');

// for score 

const showScore=document.querySelector('#showScore');

// load question function 

    let questionCount=0;
    let score=0;

const loadQuestion =() =>{

    const questionList=quizDB[questionCount];
    question.innerHTML=questionList.question;
    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;
    // option4.innerHTML=questionList.e;
}


loadQuestion();

// User submitted answer function 

const getCheckAnswer=() =>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;

}
    // decelect selected ans 

const deselectAll=() => {

    answers.forEach((curAnsElem)=> curAnsElem.checked=false);

}



submit.addEventListener('click',() => {
    const checkedAnswer= getCheckAnswer();
    console.log(checkedAnswer);

    // answer matched then score increase 

    if(checkedAnswer ==quizDB[questionCount].ans){
        score++;
    };

        // load another question 
        questionCount++;

        deselectAll();

        if(questionCount< quizDB.length){
            loadQuestion();
        }

        else{
            showScore.innerHTML=`

                <h3> Your Scored ${score}/${quizDB.length} </h3>            
                <button class="btn" onclick="location.reload()">RESTART QUIZ</button>
            `;

            showScore.classList.remove('scoreArea');
        }

});

