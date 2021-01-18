
let startBtn = document.getElementById('startBtn')
let resultBody = document.getElementById('resultBody')
let questionBody = document.getElementById('questionBody')
let questionText = document.getElementById('questionText')
let answerLabel1 = document.getElementById('answerLabel1')
let answerLabel2 = document.getElementById('answerLabel2')
let answerLabel3 = document.getElementById('answerLabel3')
let answerLabel4 = document.getElementById('answerLabel4')
let radio1 = document.getElementById('ans1')
let radio2 = document.getElementById('ans2')
let radio3 = document.getElementById('ans3')
let radio4 = document.getElementById('ans4')
let userAnswer = []

const start = () =>{
    
    startBtn.style.display = 'none'
    questionBody.style.visibility= "visible"
    
    questionText.innerText = 'Q1.  Pakistan Zindabad'
    answerLabel1.innerText = 'one'
    answerLabel2.innerText = 'two'
    answerLabel3.innerText = 'three'
    answerLabel4.innerText = 'four'
    radio1 = answerLabel1
    radio2 = answerLabel2
    radio3 = answerLabel3
    radio4 = answerLabel4
    
    radio1 = getAnswer

}
const submitFn = () =>{
    console.log('hi')


}

const getAnswer = () =>{
    let userAnswer
    let rightAnswer = 'one'
  
    for(var i = 1; i < 5; i++)
    {
        if(radio1 === rightAnswer)
        {
            console.log('radio'+i)
        }
        break;
    }
  
  
  }
