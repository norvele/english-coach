const { tenses, signs, pronouns} = require("../Task");
const { capitalize } = require("../utils/capitalize");

class English {
    getSolution(task) {
        const tensesMap = {
            [tenses.presentSimple]: this.#getPresentSimpleSolution.bind(this),
            [tenses.presetContinuous]: this.#getPresentContinuousSolution.bind(this),
            [tenses.futureSimple]: this.#getFutureSimpleSolution.bind(this),
            [tenses.pastSimple]: this.#getPastSimpleSolution.bind(this),
        }
        const result = tensesMap[task.tense](task)
        return capitalize(result)
    }
    
    #getPresentSimpleSolution(task) {
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

    #getPresentContinuousSolution(task) {
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

    #getFutureSimpleSolution(task) {
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

    #getPastSimpleSolution(task) {
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
}

module.exports = { English }