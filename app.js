const form = document.querySelector('.quiz-form')
const correctAnswers = ['A', 'B', 'B', 'A']
const showingScore = document.querySelector('.final-score')
let score = 0

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25
        }
    })
    showingScore.textContent = `Você marcou ${score} pontos!`
})