const { pronouns, tenses, signs, verbs, Task } = require('./Task')
const { getRandomFromArray } = require('./utils/getRandomFromArray')

class TaskBuilder {
    createRandomTask() {
        const pronoun = getRandomFromArray(Object.values(pronouns))
        const tense = getRandomFromArray(Object.values(tenses))
        const sign = getRandomFromArray(Object.values(signs))
        const verb = getRandomFromArray(Object.values(verbs))
        return new Task({ tense, pronoun, sign, verb })
    }
}

module.exports = { TaskBuilder }