
const urlQuestion = "http://localhost:8099/api/questions"
const urlAnswers = "http://localhost:8099/api/answers"
const correctAnswers = "http://localhost:8099/api/answersCorrect"

var resArr = []

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
            div1.setAttribute("value", answer.id ) 
            div1.addEventListener("click", function() {
                var chosenVal = div1.value 
                resArr.push(chosenVal);
                div1.classList.add('bgcolor')     
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

getQuestions()
getAnswers()

var disply = JSON.parse(localStorage.getItem("pitanja")) 
//document.body.append(disply)

disply.forEach(function(displ) {
    addDiv(displ)
});

var finalBtn = document.getElementById("finalBtn")

finalBtn.addEventListener("click", function(){
    
    var compare = 0;
    
    if(resArr.length< 7){
        alert("Please choose your answers")
        location.reload()
        window.scrollTo({ top: 0});
    } else {
        
        var resultdiv = document.createElement("div") 
        resultdiv.classList.add("resultdiv")
        document.body.appendChild(resultdiv) 
                
        var par = document.createElement("p")
        par.classList.add("par")
        par.innerText = `Correct answers: ${compare}`
        resultdiv.appendChild(par)
            
        for(var i = 0; i<resArr.length; i++) {      
        //var temp = getCorrectAnswers(resArr[i]);
            axios.get(correctAnswers + "?id=" + resArr[i])
            .then(function(response){
            //console.log(response.data.correct)
                        
                if(response.data.correct == 1) {
                     
                compare ++                   
                //console.log(compare)    
                }
                par.innerText = `Correct answers: ${compare}`
                
            })
          
        }
        
    }
    finalBtn.disabled = true 
    var refresh = document.createElement("button")
    refresh.classList.add("refresh")
    refresh.innerText = "Play again"
    resultdiv.appendChild(refresh) 
    refresh.addEventListener("click", function(){
        location.reload()
        window.scrollTo({ top: 0 });
    })
})












