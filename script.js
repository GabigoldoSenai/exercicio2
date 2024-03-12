//form: age, sexo [M/F], exp. serviço [S/N]
//sem quantage ||  para acabar, age = 0

//mostrar: candidatos femininos e masculinos, idade média dos homem com experiencia, porcentagem de homens +45, mulheres -21 com exp., menor idade entre mulheres com exp.

const main = document.querySelector('.main')
const submitBtn = document.querySelector("#btnSubmit")
const idElement = document.querySelector('#personId')
let personId = 1
let candidates = []

submitBtn.addEventListener('click', () => {
    const age = document.querySelector('#inAge').value
    const genre = document.querySelector('#inGenre').value
    const expServico = document.querySelector('#inExpServico').value

    validacao(age, genre, expServico)
})

function validacao(age, genre, expServico) {
    debugger
    let isValid

    if (age == '' || age == 0 || genre == '' || expServico == '') {
        isValid = false
    } else {
        isValid = true
    }

    if (isValid) {
        addCandidate(age, genre, expServico)
    } else {
        if (age == '' || age == 0) {
            if (personId == 1) {
                alert('Adicione pelo menos um candidato')
            } else {
                relatorio()
            }
        } else {
            alert('Os campos não podem estar vazios')
        }
    }
}

function addCandidate(age, genre, expServico) {
    let candidate = {}

    candidate.id = personId
    candidate.age = age
    candidate.genre = genre
    candidate.expServico = expServico

    candidates.push(candidate)

    alert('Candidato adicionado')

    personId += 1
    idElement.innerHTML = personId
}

function relatorio() {
    const formContainer = document.querySelector('#form-container')
    formContainer.remove()
    const resultsContainer = document.createElement('div')
    resultsContainer.classList.add('results-container')
    
    candidates.forEach((element) => {
        const candidateBox = document.createElement('div')
        candidateBox.classList.add('candidate-box')

        candidateBox.innerHTML = `
            <p>#${element.id}</p>
            <p>Idade: ${element.age}</p>
            <p>Gênero: ${element.genre}</p>
            <p>Experiência: ${element.expServico}</p>
        `

        resultsContainer.appendChild(candidateBox)
    })

    main.appendChild(resultsContainer)
}