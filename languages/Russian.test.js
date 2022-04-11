const { pronouns, tenses, signs, Task } = require('../Task')
const { Russian } = require('./Russian')

const testCases = [
    // presentSimple
    {
        task: new Task(tenses.presentSimple, pronouns.i, signs.positive),
        solution: 'Я работаю'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.i, signs.negative),
        solution: 'Я не работаю'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.i, signs.question),
        solution: 'Я работаю?'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.you, signs.positive),
        solution: 'Ты работаешь'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.you, signs.negative),
        solution: 'Ты не работаешь'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.you, signs.question),
        solution: 'Ты работаешь?'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.he, signs.positive),
        solution: 'Он работает'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.he, signs.negative),
        solution: 'Он не работает'
    },
    {
        task: new Task(tenses.presentSimple, pronouns.he, signs.question),
        solution: 'Он работает?'
    },
    // presentContinuous
    {
        task: new Task(tenses.presetContinuous, pronouns.i, signs.positive),
        solution: 'Я сейчас работаю'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.i, signs.negative),
        solution: 'Я сейчас не работаю'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.i, signs.question),
        solution: 'Я сейчас работаю?'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.you, signs.positive),
        solution: 'Ты сейчас работаешь'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.you, signs.negative),
        solution: 'Ты сейчас не работаешь'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.you, signs.question),
        solution: 'Ты сейчас работаешь?'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.he, signs.positive),
        solution: 'Он сейчас работает'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.he, signs.negative),
        solution: 'Он сейчас не работает'
    },
    {
        task: new Task(tenses.presetContinuous, pronouns.he, signs.question),
        solution: 'Он сейчас работает?'
    },
    // futureSimple
    {
        task: new Task(tenses.futureSimple, pronouns.i, signs.positive),
        solution: 'Я буду работать'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.i, signs.negative),
        solution: 'Я не буду работать'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.i, signs.question),
        solution: 'Я буду работать?'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.you, signs.positive),
        solution: 'Ты будешь работать'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.you, signs.negative),
        solution: 'Ты не будешь работать'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.you, signs.question),
        solution: 'Ты будешь работать?'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.he, signs.positive),
        solution: 'Он будет работать'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.he, signs.negative),
        solution: 'Он не будет работать'
    },
    {
        task: new Task(tenses.futureSimple, pronouns.he, signs.question),
        solution: 'Он будет работать?'
    },
    // pastSimple
    {
        task: new Task(tenses.pastSimple, pronouns.i, signs.positive),
        solution: 'Я работал'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.i, signs.negative),
        solution: 'Я не работал'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.i, signs.question),
        solution: 'Я работал?'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.you, signs.positive),
        solution: 'Ты работал'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.you, signs.negative),
        solution: 'Ты не работал'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.you, signs.question),
        solution: 'Ты работал?'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.he, signs.positive),
        solution: 'Он работал'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.he, signs.negative),
        solution: 'Он не работал'
    },
    {
        task: new Task(tenses.pastSimple, pronouns.he, signs.question),
        solution: 'Он работал?'
    },
]

describe('Russian language', () => {
    testCases.forEach(({ task, solution }) => {
        test(`${task}`, () => {
            const english = new Russian()
            const result = english.getSolution(task)
            expect(result).toEqual(solution)
        })
    })
})
