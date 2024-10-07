class Quiz {
    // YOUR CODE HERE:
     
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }
    
    getQuestion() {
        return this.questions[this.currentQuestionIndex];

    }
    
    moveToNextQuestion() {
        return this.currentQuestionIndex++
    }

    shuffleQuestions() {
        const shuffle = [];
        for(let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            const temp = this.questions[i];
            this.questions[i] = this.questions[j];
            this.questions[j] = temp;      
        }
        console.log(shuffle);
        return shuffle;
    }
    
    checkAnswer(answer) {
        
        if (this.questions[this.currentQuestionIndex].answer === answer) {
            this.correctAnswers++;
        } 
        return this.correctAnswers;
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false
        } else if (this.currentQuestionIndex === this.questions.length){
            return true
        }
    }
}