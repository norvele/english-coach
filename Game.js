class Game {
    currentTask
    currentStep // task or solution
    #view
    #taskBuilder
    #english

    constructor(view, taskBuilder, english) {
        this.#view = view
        this.#taskBuilder = taskBuilder
        this.#english = english
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
        this.#view.printTask(this.currentTask)
    }

    suggestSolution() {
        this.currentStep = 'solution'
        const solution = this.#english.getSolution(this.currentTask)
        this.#view.printSolution(solution)
    }
}

module.exports = { Game }