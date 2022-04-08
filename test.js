const { getReply, pronouns, tenses, signs } = require('./game')

const testCases = [
    // presentSimple
    {
        question: {
            tense: tenses.presentSimple,
            pronoun: pronouns.i,
            sign: signs.positive,
        },
        answer: 'I work'
    },
    {
        question: {
            tense: tenses.presentSimple,
            pronoun: pronouns.i,
            sign: signs.negative,
        },
        answer: 'I do not work'
    },
    {
        question: {
            tense: tenses.presentSimple,
            pronoun: pronouns.i,
            sign: signs.question,
        },
        answer: 'Do i work?'
    },
    {
        question: {
            tense: tenses.presentSimple,
            pronoun: pronouns.you,
            sign: signs.positive,
        },
        answer: 'You work'
    },
    {
        question: {
            tense: tenses.presentSimple,
            pronoun: pronouns.you,
            sign: signs.negative,
        },
        answer: 'You do not work'
    },
    {
        question: {
            tense: tenses.presentSimple,
            pronoun: pronouns.you,
            sign: signs.question,
        },
        answer: 'Do you work?'
    },
    {
        question: {
            tense: tenses.presentSimple,
            pronoun: pronouns.he,
            sign: signs.positive,
        },
        answer: 'He works'
    },
    {
        question: {
            tense: tenses.presentSimple,
            pronoun: pronouns.he,
            sign: signs.negative,
        },
        answer: 'He does not work'
    },
    {
        question: {
            tense: tenses.presentSimple,
            pronoun: pronouns.he,
            sign: signs.question,
        },
        answer: 'Does he work?'
    },
    // presentContinuous
    {
        question: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.i,
            sign: signs.positive,
        },
        answer: 'I am working'
    },
    {
        question: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.i,
            sign: signs.negative,
        },
        answer: 'I am not working'
    },
    {
        question: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.i,
            sign: signs.question,
        },
        answer: 'Am i working?'
    },
    {
        question: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.you,
            sign: signs.positive,
        },
        answer: 'You are working'
    },
    {
        question: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.you,
            sign: signs.negative,
        },
        answer: 'You are not working'
    },
    {
        question: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.you,
            sign: signs.question,
        },
        answer: 'Are you working?'
    },
    {
        question: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.he,
            sign: signs.positive,
        },
        answer: 'He is working'
    },
    {
        question: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.he,
            sign: signs.negative,
        },
        answer: 'He is not working'
    },
    {
        question: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.he,
            sign: signs.question,
        },
        answer: 'Is he working?'
    },
    // futureSimple
    {
        question: {
            tense: tenses.futureSimple,
            pronoun: pronouns.i,
            sign: signs.positive,
        },
        answer: 'I will work'
    },
    {
        question: {
            tense: tenses.futureSimple,
            pronoun: pronouns.i,
            sign: signs.negative,
        },
        answer: 'I will not work'
    },
    {
        question: {
            tense: tenses.futureSimple,
            pronoun: pronouns.i,
            sign: signs.question,
        },
        answer: 'Will i work?'
    },
    {
        question: {
            tense: tenses.futureSimple,
            pronoun: pronouns.you,
            sign: signs.positive,
        },
        answer: 'You will work'
    },
    {
        question: {
            tense: tenses.futureSimple,
            pronoun: pronouns.you,
            sign: signs.negative,
        },
        answer: 'You will not work'
    },
    {
        question: {
            tense: tenses.futureSimple,
            pronoun: pronouns.you,
            sign: signs.question,
        },
        answer: 'Will you work?'
    },
    {
        question: {
            tense: tenses.futureSimple,
            pronoun: pronouns.he,
            sign: signs.positive,
        },
        answer: 'He will work'
    },
    {
        question: {
            tense: tenses.futureSimple,
            pronoun: pronouns.he,
            sign: signs.negative,
        },
        answer: 'He will not work'
    },
    {
        question: {
            tense: tenses.futureSimple,
            pronoun: pronouns.he,
            sign: signs.question,
        },
        answer: 'Will he work?'
    },
    // pastSimple
    {
        question: {
            tense: tenses.pastSimple,
            pronoun: pronouns.i,
            sign: signs.positive,
        },
        answer: 'I worked'
    },
    {
        question: {
            tense: tenses.pastSimple,
            pronoun: pronouns.i,
            sign: signs.negative,
        },
        answer: 'I did not work'
    },
    {
        question: {
            tense: tenses.pastSimple,
            pronoun: pronouns.i,
            sign: signs.question,
        },
        answer: 'Did i work?'
    },
    {
        question: {
            tense: tenses.pastSimple,
            pronoun: pronouns.you,
            sign: signs.positive,
        },
        answer: 'You worked'
    },
    {
        question: {
            tense: tenses.pastSimple,
            pronoun: pronouns.you,
            sign: signs.negative,
        },
        answer: 'You did not work'
    },
    {
        question: {
            tense: tenses.pastSimple,
            pronoun: pronouns.you,
            sign: signs.question,
        },
        answer: 'Did you work?'
    },
    {
        question: {
            tense: tenses.pastSimple,
            pronoun: pronouns.he,
            sign: signs.positive,
        },
        answer: 'He worked'
    },
    {
        question: {
            tense: tenses.pastSimple,
            pronoun: pronouns.he,
            sign: signs.negative,
        },
        answer: 'He did not work'
    },
    {
        question: {
            tense: tenses.pastSimple,
            pronoun: pronouns.he,
            sign: signs.question,
        },
        answer: 'Did he work?'
    },
]

let errorsCount = 0
testCases.forEach(({ question, answer }) => {
    const result = getReply(question)
    if (result !== answer) {
        errorsCount++
        console.error('Test failed for: ', question, `Result: "${result}"`)
    }
})

if (errorsCount) {
    process.exit(1)
} else {
    console.log('Tests passed')
    process.exit(0)
}