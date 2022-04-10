const { pronouns, tenses, signs } = require('./Task')
const { capitalize } = require('./utils/capitalize')

function getSolution(task) {
    const tensesMap = {
        [tenses.presentSimple]: getPresentSimpleSolution,
        [tenses.presetContinuous]: getPresentContinuousSolution,
        [tenses.futureSimple]: getFutureSimpleSolution,
        [tenses.pastSimple]: getPastSimpleSolution,
    }
    const result = tensesMap[task.tense](task)
    return capitalize(result)
}

/* present simple
    + i work, you work, he works
    - i don't work, you don't work, he doesn't work
    ? do i work?, do you work?, does he work?
 */
function getPresentSimpleSolution(task) {
    const result = []
    if (task.sign === signs.positive) {
        result.push(task.pronoun)
        if ([pronouns.he, pronouns.she, pronouns.it].includes(task.pronoun)) {
            result.push('works')
        } else {
            result.push('work')
        }
    } else if (task.sign === signs.negative) {
        result.push(task.pronoun)
        if ([pronouns.he, pronouns.she, pronouns.it].includes(task.pronoun)) {
            result.push('does not work')
        } else {
            result.push('do not work')
        }
    } else {
        if ([pronouns.he, pronouns.she, pronouns.it].includes(task.pronoun)) {
            result.push('Does')
        } else {
            result.push('Do')
        }
        result.push(task.pronoun)
        result.push('work?')
    }
    return result.join(' ')
}

/* present continuous
    + i am working, you are working, he is working
    - i am not working, you aren't working, he isn't working
    ? am i working?, are you working?, is he working?
 */
function getPresentContinuousSolution(task) {
    const result = []
    let aux = 'am'
    if ([pronouns.you, pronouns.we, pronouns.they].includes(task.pronoun)) {
        aux = 'are'
    } else if ([pronouns.he, pronouns.she, pronouns.it].includes(task.pronoun)) {
        aux = 'is'
    }
    if (task.sign === signs.question) {
        result.push(aux, task.pronoun, 'working?')
    } else {
        result.push(task.pronoun, aux)
        if (task.sign === signs.negative) {
            result.push('not')
        }
        result.push('working')
    }
    return result.join(' ')
}

/* future simple
    + i will work, you will work, he will work
    - i will not work, you will not work, he will not work
    ? will i work?, will you work?, will he work?
 */
function getFutureSimpleSolution(task) {
    const result = []
    if (task.sign === signs.question) {
        result.push('will', task.pronoun, 'work?')
    } else {
        result.push(task.pronoun, 'will')
        if (task.sign === signs.negative) {
            result.push('not')
        }
        result.push('work')
    }
    return result.join(' ')
}

/* past simple
    + i worked, you worked, he worked
    - i didn't work, you didn't work, he didn't work
    ? did i work?, did you work?, did he work?
 */
function getPastSimpleSolution(task) {
    const result = []
    if (task.sign === signs.positive) {
        result.push(task.pronoun, 'worked')
    } else if (task.sign === signs.negative) {
        result.push(task.pronoun, 'did not work')
    } else {
        result.push('did', task.pronoun, 'work?')
    }
    return result.join(' ')
}

class Game {
    currentTask
    currentStep // task or solution
    #view
    #taskBuilder

    constructor(view, taskBuilder) {
        this.#view = view
        this.#taskBuilder = taskBuilder
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
        this.#view.printSolution(getSolution(this.currentTask))
    }
}

module.exports = {
    getSolution,
    Game,
    pronouns,
    tenses,
    signs,
}