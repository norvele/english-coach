const pronouns = {
    i: 'i',
    you: 'you',
    we: 'we',
    they: 'they',
    he: 'he',
    she: 'she',
    it: 'it',
}
const tenses = {
    presentSimple: 'Present Simple',
    presetContinuous: 'Present Continuous',
    futureSimple: 'Future Simple',
    pastSimple: 'Past Simple',
}
const signs = {
    positive:  'positive',
    negative:  'negative',
    question:  'question',
}

function getRandomElement(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getQuestion() {
    const pronoun = getRandomElement(Object.values(pronouns))
    const tense = getRandomElement(Object.values(tenses))
    const sign = getRandomElement(Object.values(signs))
    return {
        pronoun,
        tense,
        sign,
    }
}

function getReply(question) {
    const tensesMap = {
        [tenses.presentSimple]: getPresentSimpleReply,
        [tenses.presetContinuous]: getPresentContinuousReply,
        [tenses.futureSimple]: getFutureSimpleReply,
        [tenses.pastSimple]: getPastSimpleReply,
    }
    const result = tensesMap[question.tense](question)
    return capitalize(result)
}

/* present simple
    + i work, you work, he works
    - i don't work, you don't work, he doesn't work
    ? do i work?, do you work?, does he work?
 */
function getPresentSimpleReply(question) {
    const result = []
    if (question.sign === signs.positive) {
        result.push(question.pronoun)
        if ([pronouns.he, pronouns.she, pronouns.it].includes(question.pronoun)) {
            result.push('works')
        } else {
            result.push('work')
        }
    } else if (question.sign === signs.negative) {
        result.push(question.pronoun)
        if ([pronouns.he, pronouns.she, pronouns.it].includes(question.pronoun)) {
            result.push('does not work')
        } else {
            result.push('do not work')
        }
    } else {
        if ([pronouns.he, pronouns.she, pronouns.it].includes(question.pronoun)) {
            result.push('Does')
        } else {
            result.push('Do')
        }
        result.push(question.pronoun)
        result.push('work?')
    }
    return result.join(' ')
}

/* present continuous
    + i am working, you are working, he is working
    - i am not working, you aren't working, he isn't working
    ? am i working?, are you working?, is he working?
 */
function getPresentContinuousReply(question) {
    const result = []
    let aux = 'am'
    if ([pronouns.you, pronouns.we, pronouns.they].includes(question.pronoun)) {
        aux = 'are'
    } else if ([pronouns.he, pronouns.she, pronouns.it].includes(question.pronoun)) {
        aux = 'is'
    }
    if (question.sign === signs.question) {
        result.push(aux, question.pronoun, 'working?')
    } else {
        result.push(question.pronoun, aux)
        if (question.sign === signs.negative) {
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
function getFutureSimpleReply(question) {
    const result = []
    if (question.sign === signs.question) {
        result.push('will', question.pronoun, 'work?')
    } else {
        result.push(question.pronoun, 'will')
        if (question.sign === signs.negative) {
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
function getPastSimpleReply(question) {
    const result = []
    if (question.sign === signs.positive) {
        result.push(question.pronoun, 'worked')
    } else if (question.sign === signs.negative) {
        result.push(question.pronoun, 'did not work')
    } else {
        result.push('did', question.pronoun, 'work?')
    }
    return result.join(' ')
}

class Game {
    currentQuestion
    currentStep // question or answer

    start() {
        this.popQuestion()
    }

    nextStep() {
        if (this.currentStep === 'answer') {
            this.popQuestion()
        } else {
            this.reply()
        }
    }

    popQuestion() {
        this.currentStep = 'question'
        this.currentQuestion = getQuestion()
        this.logQuestion(this.currentQuestion)
    }

    reply() {
        this.currentStep = 'answer'
        this.logReply(getReply(this.currentQuestion))
    }

    logQuestion(question) {
        console.clear()
        console.log(`[${question.tense}] [${question.sign}] ${question.pronoun} work`)
    }

    logReply(reply) {
        console.log(reply)
    }
}

module.exports = {
    getReply,
    Game,
    pronouns,
    tenses,
    signs,
}