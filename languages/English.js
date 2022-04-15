const { tenses, signs, pronouns} = require("../Task");
const { capitalize } = require("../utils/capitalize");

const irregularVerbs = {
    go: ['go', 'went', 'gone']
}

class English {
    getSolution(task) {
        const tensesMap = {
            [tenses.presentSimple]: this.#getPresentSimpleSolution.bind(this),
            [tenses.presetContinuous]: this.#getPresentContinuousSolution.bind(this),
            [tenses.futureSimple]: this.#getFutureSimpleSolution.bind(this),
            [tenses.pastSimple]: this.#getPastSimpleSolution.bind(this),
        }
        const result = tensesMap[task.tense](task)
        return capitalize(this.#minimize(result))
    }

    #getPresentSimpleSolution(task) {
        const result = []
        if (task.sign === signs.positive) {
            result.push(task.pronoun)
            if ([pronouns.he, pronouns.she, pronouns.it].includes(task.pronoun)) {
                result.push(this.#addSEnding(task.verb))
            } else {
                result.push(task.verb)
            }
        } else if (task.sign === signs.negative) {
            result.push(task.pronoun)
            if ([pronouns.he, pronouns.she, pronouns.it].includes(task.pronoun)) {
                result.push('does not')
            } else {
                result.push('do not')
            }
            result.push(task.verb)
        } else {
            if ([pronouns.he, pronouns.she, pronouns.it].includes(task.pronoun)) {
                result.push('Does')
            } else {
                result.push('Do')
            }
            result.push(task.pronoun)
            result.push(`${task.verb}?`)
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
        const verb = this.#addIngEnding(task.verb)
        if (task.sign === signs.question) {
            result.push(aux, task.pronoun, `${verb}?`)
        } else {
            result.push(task.pronoun, aux)
            if (task.sign === signs.negative) {
                result.push('not')
            }
            result.push(verb)
        }
        return result.join(' ')
    }

    #getFutureSimpleSolution(task) {
        const result = []
        if (task.sign === signs.question) {
            result.push('will', task.pronoun, `${task.verb}?`)
        } else {
            result.push(task.pronoun, 'will')
            if (task.sign === signs.negative) {
                result.push('not')
            }
            result.push(task.verb)
        }
        return result.join(' ')
    }

    #getPastSimpleSolution(task) {
        const result = []
        if (task.sign === signs.positive) {
            result.push(task.pronoun, this.#get2VerbForm(task.verb))
        } else if (task.sign === signs.negative) {
            result.push(task.pronoun, 'did not', task.verb)
        } else {
            result.push('did', task.pronoun, `${task.verb}?`)
        }
        return result.join(' ')
    }

    #addSEnding(verb) {
        const endChar = verb.charAt(verb.length - 1)
        if (endChar === 'y') {
            const body = verb.substring(0, verb.length - 1)
            return `${body}ies`
        }
        if (endChar === 'o') {
            return `${verb}es`
        }
        return `${verb}s`
    }

    #addIngEnding(verb) {
        return `${verb}ing`
    }

    #get2VerbForm(verb) {
        const irregularVerb = irregularVerbs[verb]
        if (irregularVerb) {
            return irregularVerb[1]
        }
        const endChar = verb.charAt(verb.length - 1)
        if (endChar === 'y') {
            const body = verb.substring(0, verb.length - 1)
            return `${body}ied`
        }
        return `${verb}ed`
    }

    #minimize(text) {
        const map = {
            'do not': "don't",
            'does not': "doesn't",
            'are not': "aren't",
            'is not': "isn't",
            'did not': "didn't",
            'will not': "won't"
        }
        let newText = text
        Object.entries(map).forEach(([search, replacer]) => {
            newText = newText.replace(search, replacer)
        })
        return newText
    }
}

module.exports = { English }