var readlinesync = require("readline-sync");

var score = 0;
function Welcome(){
    var user_name = readlinesync.question("What's your good name?");
    console.log("Welcome!! "+user_name+" to Prithvi fanpage");
    console.log("Let's have a small quiz based on the story book 'Prithvi' ");
    game(user_name);

}

var questions =[{
    question:"1. What is real name of Prithvi?",
    options: {
      a:"Prithvi singh",
      b:"Prithviraj chauhan",
      c:"Prithviraj Singh Rathod"
    },
    answer: "c"
},
{
    question:"2. Name of the town where Nandini lives: ",
    options: {
      a: "Shamli",
      b: "Devgarh",
      c: "Raipur"
    },
    answer: "a"
},{
    question:"3. What role was Nandini playing in the college drama?",
    options: {
      a: "queen",
      b: "a fairy tale princess",
      c: "an inspirational character"
        
    },
    answer: "b"
},
{
    question:"4. If by being your side puts me in danger then I never want to be safe again, whose lines were these?",
    options:{
      a: "Nishi",
      b: "Nandini",
      c: "Vrinda"
    },
    answer: "b"
},
{
    question:"5. How was Sumer Singh actually related to Prithvi?",
    options:{
        a: "his uncle",
        b: "his maternal uncle",
        c: "servant of his father and his caretaker"
    },
    answer: "c"
    
},
{
    question:"6. The idea of abduction of Nandini, was whose?",
    options:{
        a: "Kundan Singh",
        b: "Indrajit",
        c: "Sankatmochan"
    },
    answer: "a"
    
},
{
    question:"7. What gift had Prithvi given to Nandini on her birthday?",
    options:{
        a: "bangles",
        b: "diamond anklets",
        c: "ring"
    },
    answer: "b"
    
},
{
    question:"8. The name of the baby, whom Prithvi used to call Football:",
    options:{
        a: "Arjun",
        b: "Prakash",
        c: "Rohit"
    },
    answer: "a"
    
},
{
    question:"9. What was Sarojini's occupation?",
    options:{
        a: "nurse",
        b: "priest",
        c: "nursery school teacher"
    },
    answer: "c"
    
},
{
    question:"10. Who took care of Nandini when she fell ill and her family was not there?",
    options:{
        a: "Prithvi",
        b: "Nishi",
        c: "Prakash"
    },
    answer: "a"
    
},
];

function play(question, answer, options){
    console.log(question);

    for(const key in options){
        console.log(`${key} : ${options[key]}`);
    }

    var user_answer = readlinesync.question("Choose your option: ");
    if (user_answer.toUpperCase() === answer.toUpperCase()){
        console.log("Correct!! "+ "\uD83D\uDE00" + "\uD83D\uDC4D");
        score+=1;
    }
    else{
        console.log("Wrong!! "+"\u2639\uFE0F"+"\uD83D\uDC4E\uD83C\uDFFC");
    }
     
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("current score: ", score);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}


function game(user_name){
    for(var i=0; i<questions.length; i++){
        var current_question = questions[i];
        play(current_question.question, current_question.answer, current_question.options);
    }

    show_scores(user_name);
}

function show_scores(user_name){
    console.log("Your Final Score: ", score);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("--------THANK YOU FOR ATTEMPTING---------");

}

Welcome();