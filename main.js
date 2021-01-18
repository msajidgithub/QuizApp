// //app start Funtionality

// let getStudentName = prompt("Enter Your Name")
// let content = document.getElementById('content')
// // let studentName = document.getElementById("studentName")
// document.getElementById("studentName").innerText = getStudentName
// alert("welcome " + getStudentName + "\n lets Start Quiz")
// content.style.visibility = "visible"

    
  

var ulList = document.getElementById('answer-content');
var startQuizBtn = document.getElementById('start-quiz-btn')
var resultBody = document.getElementById('resultBody')
var submitQuizBtn =document.getElementById('submit-quiz-btn')
var answers = []


function Question(question, option, correctOption) {
        this.question = question;
        this.option = option;
        this.correctOption = correctOption;
    }


var questions = [
    new Question('js stand for ___________ ?',['JavaScriptt', 'JavaScript', 'javascrip', 'main.js'],1),
    new Question('js stand for ___________ ?',['JavaScriptt', 'JavaScript', 'javascrip', 'main.js'],1)

];


function startQuiz(){
    startQuizBtn.style.display = 'none'
    questionBody.style.visibility= "visible"
  
    for(var i = 0; i < questions.length; i++){
        let quesText = questions[i]['question'];
        let quesOption = questions[i]['option'];
        let listItem = document.createElement('li')
    
        
        questionTitle.innerText = quesText;

        listItem.appendChild(questionTitle);

        for(var j = 0;  j < quesOption.length; j++ ){
            let radioElement = document.createElement('input')
            let elemId = 'option_' + i + '_' +j;
            
            radioElement.setAttribute('id',elemId);
            radioElement.setAttribute('type', 'radio');
            radioElement.setAttribute('name','question'+i);
            radioElement.setAttribute('value',j);
            


            var radioLabel = document.createElement('label');
            radioLabel.setAttribute('for', elemId);

            radioElement.onclick = selectAnswer

            var optionText = document.createTextNode(quesOption[j]);
            radioLabel.appendChild(optionText);
            listItem.appendChild(radioElement);
            listItem.appendChild(radioLabel);

        }
    
        ulList.appendChild(listItem);
    } 
    
    submitQuizBtn.style.visibility = 'visible'
    submitQuizBtn.onclick = submitQuiz

}




function selectAnswer(elem){
    var selectedOption = elem.target.value;
    var selectionOptionId = elem.target.id;

    var isCorrect = questions[+selectionOptionId.split('_')[1]].correctOption == selectedOption;
    answers.push(isCorrect);
}


function submitQuiz(){
console.log('hi')    
    var correctAnsCount = 0;
    for(var i = 0; i < answers.length; i++)
    {
        if(answers[i]){
            correctAnsCount++;
        }
    }
    resultBody.innerText = 'result' + correctAnsCount + '/' +questions.length;


}


