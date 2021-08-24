import { Component, OnInit } from '@angular/core';

// this is very important importation
import { Question } from '../question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  // Quiz questions and contents
  questions = [
    new Question(' Simplify :150 ÷ (6 + 3 x 8) - 5',
      ['a. 2', ' b. 5', 'c. 0', ' d. 65'],
      'c. 0'),
    new Question('Simplify : 3 + 6 x (5 + 4) ÷ 3 - 7',
      ['a. 11', 'b. 16', 'c. 14', 'd. 15'],
      'c. 14'),
    new Question('Solve : 24 + 4 ÷ 4',
      ['a. 25', 'b. 6', 'c. 24', 'd. 7'],
      'a. 25'),
    new Question('Solve : 200 – (96 ÷ 4)',
      ['a. 105', 'b. 176', 'c. 26', 'd. 16'],
      '176'),
    new Question('Find the product of 72 × 3',
      ['a. 216', 'b. 224', 'c. 107', 'd. 124'],
      'a. 216'),
    new Question('Simplify: 26 + 32 - 12',
      ['a. 0', 'b. 32',
        'c. 56', 'd. 46'],
      'd. 46'),
    new Question('How much is 90  divided by 10?',
      ['a. 9', 'b. 10', 'c. 12', 'd. 900'],
      'a. 9'),
    new Question('What is 50 times 5 is equal to?',
      ['a. 205', 'b. 500', 'c. 300', 'd. 2500'],
      'd. 2500'),
    new Question('What is 457- 832 equal to?',
      ['a. -375', 'b. 57', 'c. 974', 'd. 875'],
      'a. -375'),
    new Question('Find the sum of 111 + 222 + 334',
      ['a. 667', 'b. 700', 'c. 104', 'd. 873'],
      'a. 667'),
  ];

  currentQuestion = 0;
  currentScore = 0;
  currentAns: string = '';
  quizEnded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // creating a function to check the answer
  submitAns() {
    if (this.currentAns == this.questions[this.currentQuestion].answer) {
      if (!this.questions[this.currentQuestion].answered)
        this.currentScore++;
    }
    this.questions[this.currentQuestion].answered = true;
  }

  // Incrementing the current question and moving on to the next question
  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    }
    else {
      this.quizEnded = true;
    }
  }
}