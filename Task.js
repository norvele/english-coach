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

const verbs = {
    work: 'work',
    study: 'study',
    go: 'go'
}

class Task {
    tense;
    pronoun;
    sign;
    verb;

    constructor({ tense, pronoun, sign, verb }) {
        this.tense = tense;
        this.pronoun = pronoun;
        this.sign = sign;
        this.verb = verb;
    }

    toString() {
        return `${this.tense} | ${this.pronoun} ${this.sign} ${this.verb}`
    }
}

module.exports = {
    pronouns,
    tenses,
    signs,
    verbs,
    Task
}