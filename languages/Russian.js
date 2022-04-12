const { tenses, signs, verbs} = require("../Task");
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

const verbsMap = {
    work: {
        present: {
            i: 'работаю',
            you: 'работаешь',
            we: 'работаем',
            they: 'работают',
            he: 'работает',
            she: 'работает',
            it: 'работает',
        },
        past: {
            i: 'работал',
            you: 'работал',
            we: 'работали',
            they: 'работали',
            he: 'работал',
            she: 'работала',
            it: 'работало',
        },
        future: 'работать'
    },
    study: {
        present: {
            i: 'обучаюсь',
            you: 'обучаешься',
            we: 'обучаемся',
            they: 'обучаются',
            he: 'обучается',
            she: 'обучается',
            it: 'обучается',
        },
        past: {
            i: 'обучался',
            you: 'обучался',
            we: 'обучались',
            they: 'обучались',
            he: 'обучался',
            she: 'обучалась',
            it: 'обучалось',
        },
        future: 'обучаться'
    },
    go: {
        present: {
            i: 'иду',
            you: 'идешь',
            we: 'идем',
            they: 'идут',
            he: 'идет',
            she: 'идет',
            it: 'идет',
        },
        past: {
            i: 'шел',
            you: 'шел',
            we: 'шли',
            they: 'шли',
            he: 'шел',
            she: 'шла',
            it: 'шло',
        },
        future: 'идти'
    }
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
        const acc = [pronounsMap[task.pronoun]]
        if (now) {
            acc.push('сейчас')
        }
        if (task.sign === signs.negative) {
            acc.push('не')
        }
        acc.push(verbsMap[task.verb]['present'][task.pronoun])
        const result = acc.join(' ')
        return (task.sign === signs.question) ? `${result}?` : result
    }

    #getPresentContinuousSolution(task) {
        return this.#getPresentSimpleSolution(task, true)
    }

    #getFutureSimpleSolution(task) {
        const beMap = {
            i: 'буду',
            you: 'будешь',
            we: 'будем',
            they: 'будут',
            he: 'будет',
            she: 'будет',
            it: 'будет',
        }
        const acc = [pronounsMap[task.pronoun]]
        if (task.sign === signs.negative) {
            acc.push('не')
        }
        acc.push(beMap[task.pronoun], verbsMap[task.verb]['future'])
        const result = acc.join(' ')
        return (task.sign === signs.question) ? `${result}?` : result
    }

    #getPastSimpleSolution(task) {
        const acc = [pronounsMap[task.pronoun]]
        if (task.sign === signs.negative) {
            acc.push('не')
        }
        acc.push(verbsMap[task.verb]['past'][task.pronoun])
        const result = acc.join(' ')
        return (task.sign === signs.question) ? `${result}?` : result
    }
}

module.exports = { Russian }