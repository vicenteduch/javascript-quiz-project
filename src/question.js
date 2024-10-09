class Question {
    constructor(text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
    }

    shuffleChoices() {
        
            const shuffle = [];
            for(let i = this.choices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i+1));
                const temp = this.choices[i];
                this.choices[i] = this.choices[j];
                this.choices[j] = temp;      
            }
            return shuffle;
        }
    }

  


