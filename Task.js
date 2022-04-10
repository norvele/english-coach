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
    tense;
    pronoun;
    sign;

    constructor(tense, pronoun, sign) {
        this.tense = tense;
        this.pronoun = pronoun;
        this.sign = sign;
    }
}

module.exports = {
    pronouns,
    tenses,
    signs,
    Task
}