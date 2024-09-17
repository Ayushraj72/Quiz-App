const questions=[
    {question: "Which is the biggest animal in the world ?",
     answers: [
        {text :"shark",correct:false},
        {text :"Blue Whale",correct:true},
        {text :"Elephant",correct:false},
        {text :"Giraffe",correct:false},
     ]
},
    {question: "Which is the biggest Continent in the world ?",
     answers: [
        {text :"Europe",correct:false},
        {text :"Asia",correct:true},
        {text :"Africa",correct:false},
        {text :"North America",correct:false},
     ]
},
    {question: "Which is the biggest river in the world ?",
     answers: [
        {text :"Amazon",correct:true},
        {text :"Ganga",correct:false},
        {text :"Brahmaputra",correct:false},
        {text :"None of the Above ",correct:false},
     ]
},
    {question: "what is the value of 2+2/2 ?",
     answers: [
        {text :"2",correct:false},
        {text :"4",correct:false},
        {text :"3",correct:true},
        {text :"10",correct:false},
     ]
}

];
const questionEle=document.getElementById("question");
const answerbut=document.getElementById("answerbut");
const nextbut=document.getElementById("Next");
let currQind=0;
let score=0;
function startQuiz(){
currQind=0;
score=0;
nextbut.innerHTML="Next";
showQuestion();
}
function showQuestion(){
    resetState();
    let curQ=questions[currQind];
    let Qno=currQind+1;
    questionEle.innerHTML=Qno+". "+curQ.question;
    curQ.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn"); // add button tag to class "btn"
        answerbut.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;

        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextbut.style.display="none";
    while(answerbut.firstChild)
    {
        answerbut.removeChild(answerbut.firstChild);
    }
}
function selectAnswer(e){
const selectbtn=e.target;
const iscorrect=selectbtn.dataset.correct==="true";
if(iscorrect){
    selectbtn.classList.add("correct");
    score++;
    
}
else{
    selectbtn.classList.add("incorrect");
}
Array.from(answerbut.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled=true;
});
nextbut.style.display="block";
}
function showScore(){
    resetState();
    questionEle.innerHTML=`You Scored ${score} out of ${questions.length}!`;
    nextbut.innerHTML="play Again";
    nextbut.style.display="block";
}
function handleNextBut(){
    currQind++;
    if(currQind<questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}
nextbut.addEventListener("click",()=>{
    if(currQind<questions.length)
    {
        handleNextBut();
    }
    else {
        startQuiz();
    }
})
startQuiz();
