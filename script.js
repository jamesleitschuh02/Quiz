//one page for highscores
//one page for the quiz

let startBtn = document.getElementById("start-button");
let questionList = document.getElementById("question-container");
let mainQuestion = document.getElementById("question");
let title = document.getElementById("title");
let btn1 = document.getElementById("button-1");
let btn2 = document.getElementById("button-2");
let btn3 = document.getElementById("button-3");
let btn4 = document.getElementById("button-4");
let i = 0;
let correctCount = 0;

let mainList = [
    {
        question: "What is the best gaming console?",
        answer: ["Xbox One", "Playstation", "Nintendo Switch", "PC Gamin ;)"]
    },
    {
        question: "Is coding hard?",
        answer: ["Yes", "No", "Maybe", "Depends on who you ask"]
    },
    {
        question: "Best energy drink?",
        answer: ["RedBull", "Monster", "Reign", "Bang"]
    },
    {
        question: "What is the radius of the sun?",
        answer: ["432,450 miles", "865,194 miles", "132,982 miles", "100,165,458 miles"]
    },
    {
        question: "Lake Superior contains the lowest point in Minnesota, how low is that point in feet?",
        answer: ["209 feet", "601 feet", "432 feet", "974 feet"]
    }
];

startBtn.addEventListener("click", function(){
    startBtn.classList.add("hide");
    title.classList.add("hide");
    questionList.classList.remove("hide");
    setQuestions();
});

btn1.addEventListener("click", function(){
    if (i === 3){
        correctCount++;
    }
    i++;
    setQuestions();
});

btn2.addEventListener("click", function(){
    if (i === 4){
        correctCount++;
    }
    i++;
    setQuestions();
});

btn3.addEventListener("click", function(){
    if (i === 2){
        correctCount++;
    }
    i++;
    setQuestions();
});

btn4.addEventListener("click", function(){
    if (i === 0 || i === 1){
        correctCount++;
    }
    i++;
    setQuestions();
});


function setQuestions(){
    if (i > 4){
        alert(correctCount);
        alert("You're done!");
        location.replace("HighScore.html");
    }
    else {
        mainQuestion.innerText = mainList[i].question;
        btn1.innerText = mainList[i].answer[0];
        btn2.innerText = mainList[i].answer[1];
        btn3.innerText = mainList[i].answer[2];
        btn4.innerText = mainList[i].answer[3];
    }
}