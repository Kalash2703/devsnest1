const quizDB = [
    {
        question:"Q1.if x=2.5 and y=1.25,what is x+y?",
        a: "3.75",
        b: "2.50",
        c: "4.25",
        d: "5.00",
        ans: "ans1"
    },
    {
        question:"Q2.What is the remainder of 21 divided by 7?",
        a: "21",
        b: "7",
        c: "1",
        d: "None of these",
        ans: "ans4"
    },
    {
        question:"Q3.How many years are there in decade?",
        a: "5",
        b: "10",
        c: "15",
        d: "20",
        ans: "ans2"
    },
    {
        question:"Q4.What is square of 15?",
        a: "15",
        b: "30",
        c: "252",
        d: "225",
        ans: "ans4"
    }
];

const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll(".answer");
const showScore=document.querySelector("#showScore");

const sound=document.querySelector(".sound")

let questionCount = 0;
let score=0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText=questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;

        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem)  => curAnsElem.checked = false)
}

submit.addEventListener('click',() =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;


    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML=`
            <h3> You Scored ${score}/${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});


document.addEventListener('click',() =>{
    sound.currentTime = 0;
    sound.play()
});
