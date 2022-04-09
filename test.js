const { getSolution, pronouns, tenses, signs } = require('./game')

const testCases = [
    // presentSimple
    {
        task: {
            tense: tenses.presentSimple,
            pronoun: pronouns.i,
            sign: signs.positive,
        },
        solution: 'I work'
    },
    {
        task: {
            tense: tenses.presentSimple,
            pronoun: pronouns.i,
            sign: signs.negative,
        },
        solution: 'I do not work'
    },
    {
        task: {
            tense: tenses.presentSimple,
            pronoun: pronouns.i,
            sign: signs.question,
        },
        solution: 'Do i work?'
    },
    {
        task: {
            tense: tenses.presentSimple,
            pronoun: pronouns.you,
            sign: signs.positive,
        },
        solution: 'You work'
    },
    {
        task: {
            tense: tenses.presentSimple,
            pronoun: pronouns.you,
            sign: signs.negative,
        },
        solution: 'You do not work'
    },
    {
        task: {
            tense: tenses.presentSimple,
            pronoun: pronouns.you,
            sign: signs.question,
        },
        solution: 'Do you work?'
    },
    {
        task: {
            tense: tenses.presentSimple,
            pronoun: pronouns.he,
            sign: signs.positive,
        },
        solution: 'He works'
    },
    {
        task: {
            tense: tenses.presentSimple,
            pronoun: pronouns.he,
            sign: signs.negative,
        },
        solution: 'He does not work'
    },
    {
        task: {
            tense: tenses.presentSimple,
            pronoun: pronouns.he,
            sign: signs.question,
        },
        solution: 'Does he work?'
    },
    // presentContinuous
    {
        task: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.i,
            sign: signs.positive,
        },
        solution: 'I am working'
    },
    {
        task: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.i,
            sign: signs.negative,
        },
        solution: 'I am not working'
    },
    {
        task: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.i,
            sign: signs.question,
        },
        solution: 'Am i working?'
    },
    {
        task: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.you,
            sign: signs.positive,
        },
        solution: 'You are working'
    },
    {
        task: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.you,
            sign: signs.negative,
        },
        solution: 'You are not working'
    },
    {
        task: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.you,
            sign: signs.question,
        },
        solution: 'Are you working?'
    },
    {
        task: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.he,
            sign: signs.positive,
        },
        solution: 'He is working'
    },
    {
        task: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.he,
            sign: signs.negative,
        },
        solution: 'He is not working'
    },
    {
        task: {
            tense: tenses.presetContinuous,
            pronoun: pronouns.he,
            sign: signs.question,
        },
        solution: 'Is he working?'
    },
    // futureSimple
    {
        task: {
            tense: tenses.futureSimple,
            pronoun: pronouns.i,
            sign: signs.positive,
        },
        solution: 'I will work'
    },
    {
        task: {
            tense: tenses.futureSimple,
            pronoun: pronouns.i,
            sign: signs.negative,
        },
        solution: 'I will not work'
    },
    {
        task: {
            tense: tenses.futureSimple,
            pronoun: pronouns.i,
            sign: signs.question,
        },
        solution: 'Will i work?'
    },
    {
        task: {
            tense: tenses.futureSimple,
            pronoun: pronouns.you,
            sign: signs.positive,
        },
        solution: 'You will work'
    },
    {
        task: {
            tense: tenses.futureSimple,
            pronoun: pronouns.you,
            sign: signs.negative,
        },
        solution: 'You will not work'
    },
    {
        task: {
            tense: tenses.futureSimple,
            pronoun: pronouns.you,
            sign: signs.question,
        },
        solution: 'Will you work?'
    },
    {
        task: {
            tense: tenses.futureSimple,
            pronoun: pronouns.he,
            sign: signs.positive,
        },
        solution: 'He will work'
    },
    {
        task: {
            tense: tenses.futureSimple,
            pronoun: pronouns.he,
            sign: signs.negative,
        },
        solution: 'He will not work'
    },
    {
        task: {
            tense: tenses.futureSimple,
            pronoun: pronouns.he,
            sign: signs.question,
        },
        solution: 'Will he work?'
    },
    // pastSimple
    {
        task: {
            tense: tenses.pastSimple,
            pronoun: pronouns.i,
            sign: signs.positive,
        },
        solution: 'I worked'
    },
    {
        task: {
            tense: tenses.pastSimple,
            pronoun: pronouns.i,
            sign: signs.negative,
        },
        solution: 'I did not work'
    },
    {
        task: {
            tense: tenses.pastSimple,
            pronoun: pronouns.i,
            sign: signs.question,
        },
        solution: 'Did i work?'
    },
    {
        task: {
            tense: tenses.pastSimple,
            pronoun: pronouns.you,
            sign: signs.positive,
        },
        solution: 'You worked'
    },
    {
        task: {
            tense: tenses.pastSimple,
            pronoun: pronouns.you,
            sign: signs.negative,
        },
        solution: 'You did not work'
    },
    {
        task: {
            tense: tenses.pastSimple,
            pronoun: pronouns.you,
            sign: signs.question,
        },
        solution: 'Did you work?'
    },
    {
        task: {
            tense: tenses.pastSimple,
            pronoun: pronouns.he,
            sign: signs.positive,
        },
        solution: 'He worked'
    },
    {
        task: {
            tense: tenses.pastSimple,
            pronoun: pronouns.he,
            sign: signs.negative,
        },
        solution: 'He did not work'
    },
    {
        task: {
            tense: tenses.pastSimple,
            pronoun: pronouns.he,
            sign: signs.question,
        },
        solution: 'Did he work?'
    },
]

let errorsCount = 0
testCases.forEach(({ task, solution }) => {
    const result = getSolution(task)
    if (result !== solution) {
        errorsCount++
        console.error('Test failed for: ', task, `Result: "${result}"`)
    }
})

if (errorsCount) {
    process.exit(1)
} else {
    console.log('Tests passed')
    process.exit(0)
}