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

class Task {
    pronoun;
    tense;
    sign;
    constructor(pronoun, tense, sign) {
        this.pronoun = pronoun;
        this.tense = tense;
        this.sign = sign;
    }
}

module.exports = {
    pronouns,
    tenses,
    signs,
    Task
}