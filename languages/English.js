const { tenses, signs, pronouns} = require("../Task");
const { capitalize } = require("../utils/capitalize");

class English {
    getSolution(task) {
        const tensesMap = {
            [tenses.presentSimple]: this.#getPresentSimpleSolution,
            [tenses.presetContinuous]: this.#getPresentContinuousSolution,
            [tenses.futureSimple]: this.#getFutureSimpleSolution,
            [tenses.pastSimple]: this.#getPastSimpleSolution,
        }
        const result = tensesMap[task.tense](task)
        return capitalize(result)
    }

    /**
     * + i work, you work, he works
     * - i don't work, you don't work, he doesn't work
     * ? do i work?, do you work?, does he work?
     */
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

    /**
     * + i am working, you are working, he is working
     * - i am not working, you aren't working, he isn't working
     * ? am i working?, are you working?, is he working?
     */
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

    /**
     * + i will work, you will work, he will work
     * - i will not work, you will not work, he will not work
     * ? will i work?, will you work?, will he work?
     */
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

    /**
     * + i worked, you worked, he worked
     * - i didn't work, you didn't work, he didn't work
     * ? did i work?, did you work?, did he work?
     */
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