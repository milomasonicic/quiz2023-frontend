



//questions api
/*async function getQuestions() {
  try {
    const {data} = await axios.get("http://localhost:8099/api/questions")
    var questDiv = document.getElementsByClassName("quest")
        
        data.forEach(function(question) {
            
                var text = question.questions_text
                var par = document.createElement("p")
                par.classList.add("question")
                par.innerText = text  
                /*quest.appendChild(par) 
                document.querySelector(".container").appendChild(quest)*/
                //questDiv.appendChild(par) 
                
            //});
       
               
    //*} catch(e){
        //*console.log(e)
    //*}
//*}

/*async function getAnswers() {
    try {
        const {data} = await axios.get("http://localhost:8099/api/answers")
        
        data.forEach(function(answer) {
          var answ = answer.answer
          /*var answBtn = document.createElement("button")
          answBtn.classList.add("answer") 
          answBtn.innerText = answ
          var quest = document.createElement("div")
          quest.classList.add("quest")
          quest.appendChild(answBtn)
          document.querySelector(".container").appendChild(quest)*/
          console.log(answ)
        })
               
    } catch(e){
        console.log(e)
    }
}

getQuestions()*/

/*function questionMaker() {
  var quest = document.createElement("div")
  quest.classList.add("quest")
  
  var questionText = getQuestions()
  var par = document.createElement("p")
  par.classList.add("question")
  par.innerText = questionText

  var answerText = getAnswers()
  var answBtn = document.createElement("button")
  answBtn.classList.add("answer") 
  answBtn.innerText = answerText

  quest.appendChild(par)
  quest.appendChild(answBtn)

  document.querySelector(".container").appendChild(quest)

  quest.appendChild(par) 
  document.querySelector(".container").appendChild(quest)
}

questionMaker()*/









