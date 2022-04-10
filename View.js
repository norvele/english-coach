class View {
    printTask(task) {
        console.clear()
        console.log(`[${task.tense}] [${task.sign}] ${task.pronoun} work`)
    }
    printSolution(solution) {
        console.log(solution)
    }
}

module.exports = { View }