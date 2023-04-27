
const urlQuestion = "http://localhost:8099/api/questions"
const urlAnswers = "http://localhost:8099/api/answers"


function addDiv(question) {
    const div = document.createElement('div')
    div.classList.add('quest')
    div.innerHTML = `
    <h3>${question.questions_text}</h3>
    `

    var answers = JSON.parse(localStorage.getItem("odgovori"))

    answers.forEach(function (answer) {
        if (answer.question_id == question.id) {

            const div1 = document.createElement('button')
            div1.classList.add('answer')
            div1.innerHTML = `
            <p>${answer.answer}</p>
            `
            div.appendChild(div1)
        }
    })
    document.body.append(div)
}

async function getQuestions() {
    try {
        const { data } = await axios.get(urlQuestion)
        console.log(data)
        var data1 = JSON.stringify(data)
        localStorage.setItem("pitanja", data1)
    } catch (e) {
        console.error(e)
    }
}

async function getAnswers() {
    try {
        const { data } = await axios.get(urlAnswers)
        console.log(data)
        var data1 = JSON.stringify(data)
        localStorage.setItem("odgovori", data1);


    } catch (e) {
        console.error(e)
    }
}


getQuestions()
getAnswers()


var disply = JSON.parse(localStorage.getItem("pitanja"))
document.body.append(disply)




disply.forEach(function (displ) {
    addDiv(displ)
});



