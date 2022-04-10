const { pronouns, tenses, signs, Task } = require('./Task')
const { getRandomFromArray } = require('./utils/getRandomFromArray')

class TaskBuilder {
    createRandomTask() {
        const pronoun = getRandomFromArray(Object.values(pronouns))
        const tense = getRandomFromArray(Object.values(tenses))
        const sign = getRandomFromArray(Object.values(signs))
        return new Task(tense, pronoun, sign)
    }
}

module.exports = { TaskBuilder }