class Game {
    currentTask
    currentStep // task or solution
    #view
    #taskBuilder
    #taskLanguage
    #solutionLanguage

    constructor(view, taskBuilder, taskLanguage, solutionLanguage) {
        this.#view = view
        this.#taskBuilder = taskBuilder
        this.#taskLanguage = taskLanguage
        this.#solutionLanguage = solutionLanguage
    }

    start() {
        this.suggestTask()
    }

    nextStep() {
        if (this.currentStep === 'solution') {
            this.suggestTask()
        } else {
            this.suggestSolution()
        }
    }

    suggestTask() {
        this.currentStep = 'task'
        this.currentTask = this.#taskBuilder.createRandomTask()
        const text = this.#taskLanguage.getSolution(this.currentTask)
        this.#view.printTask(text)
    }

    suggestSolution() {
        this.currentStep = 'solution'
        const text = this.#solutionLanguage.getSolution(this.currentTask)
        this.#view.printSolution(text)
    }
}

module.exports = { Game }