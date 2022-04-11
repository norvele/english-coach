const { pronouns, tenses, signs, Task } = require('../Task')
const { English } = require('./English')

const testCases = [
    // presentSimple
    {
        task: new Task(tenses.presentSimple, pronouns.i, signs.positive),
        solution: 'I work'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.i, signs.negative),
        solution: 'I do not work'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.i, signs.question),
        solution: 'Do i work?'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.you, signs.positive),
        solution: 'You work'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.you, signs.negative),
        solution: 'You do not work'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.you, signs.question),
        solution: 'Do you work?'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.he, signs.positive),
        solution: 'He works'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.he, signs.negative),
        solution: 'He does not work'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.he, signs.question),
        solution: 'Does he work?'
    },
    // presentContinuous
    {
        task: new Task(tenses.presetContinuous, pronouns.i, signs.positive),
        solution: 'I am working'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.i, signs.negative),
        solution: 'I am not working'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.i, signs.question),
        solution: 'Am i working?'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.you, signs.positive),
        solution: 'You are working'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.you, signs.negative),
        solution: 'You are not working'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.you, signs.question),
        solution: 'Are you working?'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.he, signs.positive),
        solution: 'He is working'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.he, signs.negative),
        solution: 'He is not working'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.he, signs.question),
        solution: 'Is he working?'
    },
    // futureSimple
    {
        task: new Task(tenses.futureSimple, pronouns.i, signs.positive),
        solution: 'I will work'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.i, signs.negative),
        solution: 'I will not work'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.i, signs.question),
        solution: 'Will i work?'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.you, signs.positive),
        solution: 'You will work'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.you, signs.negative),
        solution: 'You will not work'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.you, signs.question),
        solution: 'Will you work?'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.he, signs.positive),
        solution: 'He will work'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.he, signs.negative),
        solution: 'He will not work'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.he, signs.question),
        solution: 'Will he work?'
    },
    // pastSimple
    {
        task: new Task(tenses.pastSimple, pronouns.i, signs.positive),
        solution: 'I worked'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.i, signs.negative),
        solution: 'I did not work'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.i, signs.question),
        solution: 'Did i work?'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.you, signs.positive),
        solution: 'You worked'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.you, signs.negative),
        solution: 'You did not work'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.you, signs.question),
        solution: 'Did you work?'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.he, signs.positive),
        solution: 'He worked'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.he, signs.negative),
        solution: 'He did not work'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.he, signs.question),
        solution: 'Did he work?'
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
