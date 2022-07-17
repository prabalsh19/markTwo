const readLineSync = require('readline-sync')
let score = 0
const welcome = ()=>{
  const name = readLineSync.question("What can I call you? ")
  console.log("Welcome to my Quiz "+ name)
  console.log("Here we go! Hope you will enjoy it.")
  console.log(name.trim())
}

const questions = [{question:"Who was the first PM of India? (Enter Full name) ", answer:"Jawahar Lal Nehru"},{question:"First Marvel Movie " ,answer:"Iron Man"},{question:"Full Name Of Captian America in the movie " , answer:"Steve Roger"}]
const play = ()=>{
  for(const question in questions){
 const userAnswer = readLineSync.question(questions[question].question) 
  validateAnswer(userAnswer,questions[question].answer)
    
  }
}
const validateAnswer = (userAnswer,validAnswer)=>{
  if(userAnswer.toLowerCase() === validAnswer.toLowerCase()){
    score++
    console.log( 'Right')
    console.log("Current Score " + score)
    console.log("-------------")
    
    
  }else{
    console.log("Wrong")
    console.log("The correct answer is " + validAnswer)
    console.log("Current Score " + score)
    console.log("-------------")
  }
}
const highestScore = [{name:'SpiderMan' ,score:2},{name:"Black Widow" , score:3}]
const showHighestScore =()=>{
  console.log("Here are the people who scored the highest! ")
  for(const key in highestScore ){
    console.log(highestScore[key].name+ " : "+highestScore[key].score)
  }
}
welcome()
play()
showHighestScore()