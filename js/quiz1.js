
const urlQuestion = "http://localhost:8099/api/questions"
const urlAnswers = "http://localhost:8099/api/answers"
const correctAnswers = "http://localhost:8099/api/answersCorrect"

var resArr = []
corrArr = []

//compare arrs
function compareArr(a, b) {
    var count = 0
  for(var i = 0; i<a.length; i++) {
    for(var j = 0; j<b.length; j++) {
        if(a[i] == b[j]) {
            count++
        }
    }
  }

  return count
}

function addDiv(question){
    const div = document.createElement('div')
    div.classList.add('quest')
    div.innerHTML = `
    <h3>${question.questions_text}</h3>
    `
     var answers = JSON.parse(localStorage.getItem("odgovori"))

     answers.forEach(function(answer) {
        if(answer.question_id === question.id) {

            const div1 = document.createElement('button') 
            div1.classList.add('answer')
            

            div1.innerHTML = `
            <p>${answer.answer}</p>
            `
            div1.addEventListener("click", function() {
                var choosenAnw = div1.innerText
                resArr.push(choosenAnw);
                div1.classList.add('bgcolor')
                //console.log(resArr);        
                var buttons = div.querySelectorAll('button.answer')
               for(var i = 0; i<buttons.length; i++) {
                    buttons[i].disabled = true
                }
                          
            })
            
            
            div.appendChild(div1)
        }
    })
    
    document.body.append(div) 
    var button = document.getElementById("finalBtn")
    document.body.appendChild(button)
}


async function getQuestions(){
    try {
        const {data} = await axios.get(urlQuestion)
        var data1 = JSON.stringify(data)
        localStorage.setItem("pitanja", data1)          
    } catch(e){
        console.error(e)
    }
}

async function getAnswers(){
    try {
        const {data} = await axios.get(urlAnswers)
        var data1 = JSON.stringify(data)
        localStorage.setItem("odgovori", data1)          
        

    } catch(e){
        console.error(e)
    }
}

async function getCorrectAnswers(){
    try {
        const {data} = await axios.get(correctAnswers)
        var data1 = JSON.stringify(data)
        localStorage.setItem("tacniodgovori", data1)          
        

    } catch(e){
        console.error(e)
    }
}


getQuestions()
getAnswers()

var disply = JSON.parse(localStorage.getItem("pitanja")) 
//document.body.append(disply)

//var odgovori = JSON.parse(localStorage.getItem("odgovori")) 


disply.forEach(function(displ) {
    addDiv(displ)
});

var finalBtn = document.getElementById("finalBtn")

finalBtn.addEventListener("click", function(){
    
    if(resArr.length< 7){
        alert("Please choose your answers")
        location.reload()
        window.scrollTo({ top: 0});
    } else {
        getCorrectAnswers()
        
        var correctAnswersToCompare = JSON.parse(localStorage.getItem("tacniodgovori"))
        correctAnswersToCompare.forEach(function(correctAnswerToCompare){
            corrArr.push(correctAnswerToCompare.answer) 
            console.log(corrArr)
        })
    }
    console.log(resArr)
    var compare = compareArr(resArr, corrArr); 
    console.log(compare)

    finalBtn.disabled = true 
    

    var resultdiv = document.createElement("div") 
    resultdiv.classList.add("resultdiv")
    document.body.appendChild(resultdiv) 

    var par = document.createElement("p")
    par.classList.add("par")
    par.innerText = `Correct answers: ${compare}`
    resultdiv.appendChild(par)

    var refresh = document.createElement("button")
    refresh.classList.add("refresh")
    refresh.innerText = "Play again"
    resultdiv.appendChild(refresh) 
    refresh.addEventListener("click", function(){
        location.reload()
        window.scrollTo({ top: 0 });
    })
})












