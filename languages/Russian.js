const { tenses, signs} = require("../Task");
const { capitalize } = require("../utils/capitalize");

const pronounsMap = {
    i: 'я',
    you: 'ты',
    we: 'мы',
    they: 'они',
    he: 'он',
    she: 'она',
    it: 'это',
}

class Russian {
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

    #getPresentSimpleSolution(task, now = false) {
        const verbMap = {
            i: 'работаю',
            you: 'работаешь',
            we: 'работаем',
            they: 'работают',
            he: 'работает',
            she: 'работает',
            it: 'работает',
        }
        const acc = [pronounsMap[task.pronoun]]
        if (now) {
            acc.push('сейчас')
        }
        if (task.sign === signs.negative) {
            acc.push('не')
        }
        acc.push(verbMap[task.pronoun])
        const result = acc.join(' ')
        return (task.sign === signs.question) ? `${result}?` : result
    }

    #getPresentContinuousSolution(task) {
        return this.#getPresentSimpleSolution(task, true)
    }

    #getFutureSimpleSolution(task) {
        const verbMap = {
            i: 'буду работать',
            you: 'будешь работать',
            we: 'будем работать',
            they: 'будут работать',
            he: 'будет работать',
            she: 'будет работать',
            it: 'будет работать',
        }
        const acc = [pronounsMap[task.pronoun]]
        if (task.sign === signs.negative) {
            acc.push('не')
        }
        acc.push(verbMap[task.pronoun])
        const result = acc.join(' ')
        return (task.sign === signs.question) ? `${result}?` : result
    }

    #getPastSimpleSolution(task) {
        const verbMap = {
            i: 'работал',
            you: 'работал',
            we: 'работали',
            they: 'работали',
            he: 'работал',
            she: 'работала',
            it: 'работало',
        }
        const acc = [pronounsMap[task.pronoun]]
        if (task.sign === signs.negative) {
            acc.push('не')
        }
        acc.push(verbMap[task.pronoun])
        const result = acc.join(' ')
        return (task.sign === signs.question) ? `${result}?` : result
    }
}

module.exports = { Russian }