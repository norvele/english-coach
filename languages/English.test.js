const { pronouns, tenses, signs, verbs, Task } = require('../Task')
const { English } = require('./English')

const testCases = [
    // presentSimple
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.i, sign: signs.positive, verb: verbs.work }),
        solution: 'I work'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.i, sign: signs.negative, verb: verbs.work }),
        solution: 'I do not work'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.i, sign: signs.question, verb: verbs.work }),
        solution: 'Do i work?'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.you, sign: signs.positive, verb: verbs.work }),
        solution: 'You work'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.you, sign: signs.negative, verb: verbs.work }),
        solution: 'You do not work'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.you, sign: signs.question, verb: verbs.work }),
        solution: 'Do you work?'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.he, sign: signs.positive, verb: verbs.work }),
        solution: 'He works'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.he, sign: signs.negative, verb: verbs.work }),
        solution: 'He does not work'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.he, sign: signs.question, verb: verbs.work }),
        solution: 'Does he work?'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.i, sign: signs.positive, verb: verbs.study }),
        solution: 'I study'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.he, sign: signs.positive, verb: verbs.study }),
        solution: 'He studies'
    },
    // presentContinuous
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.i, sign: signs.positive, verb: verbs.work }),
        solution: 'I am working'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.i, sign: signs.negative, verb: verbs.work }),
        solution: 'I am not working'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.i, sign: signs.question, verb: verbs.work }),
        solution: 'Am i working?'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.you, sign: signs.positive, verb: verbs.work }),
        solution: 'You are working'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.you, sign: signs.negative, verb: verbs.work }),
        solution: 'You are not working'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.you, sign: signs.question, verb: verbs.work }),
        solution: 'Are you working?'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.he, sign: signs.positive, verb: verbs.work }),
        solution: 'He is working'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.he, sign: signs.negative, verb: verbs.work }),
        solution: 'He is not working'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.he, sign: signs.question, verb: verbs.work }),
        solution: 'Is he working?'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.i, sign: signs.positive, verb: verbs.study }),
        solution: 'I am studying'
    },
    // futureSimple
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.i, sign: signs.positive, verb: verbs.work }),
        solution: 'I will work'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.i, sign: signs.negative, verb: verbs.work }),
        solution: 'I will not work'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.i, sign: signs.question, verb: verbs.work }),
        solution: 'Will i work?'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.you, sign: signs.positive, verb: verbs.work }),
        solution: 'You will work'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.you, sign: signs.negative, verb: verbs.work }),
        solution: 'You will not work'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.you, sign: signs.question, verb: verbs.work }),
        solution: 'Will you work?'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.he, sign: signs.positive, verb: verbs.work }),
        solution: 'He will work'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.he, sign: signs.negative, verb: verbs.work }),
        solution: 'He will not work'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.he, sign: signs.question, verb: verbs.work }),
        solution: 'Will he work?'
    },
    // pastSimple
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.i, sign: signs.positive, verb: verbs.work }),
        solution: 'I worked'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.i, sign: signs.negative, verb: verbs.work }),
        solution: 'I did not work'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.i, sign: signs.question, verb: verbs.work }),
        solution: 'Did i work?'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.you, sign: signs.positive, verb: verbs.work }),
        solution: 'You worked'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.you, sign: signs.negative, verb: verbs.work }),
        solution: 'You did not work'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.you, sign: signs.question, verb: verbs.work }),
        solution: 'Did you work?'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.he, sign: signs.positive, verb: verbs.work }),
        solution: 'He worked'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.he, sign: signs.negative, verb: verbs.work }),
        solution: 'He did not work'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.he, sign: signs.question, verb: verbs.work }),
        solution: 'Did he work?'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.i, sign: signs.positive, verb: verbs.study }),
        solution: 'I studied'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.i, sign: signs.positive, verb: verbs.go }),
        solution: 'I went'
    },
]

describe('English language', () => {
    testCases.forEach(({ task, solution }) => {
        test(`${task}`, () => {
            const english = new English()
            const result = english.getSolution(task)
            expect(result).toEqual(solution)
        })
    })
})
