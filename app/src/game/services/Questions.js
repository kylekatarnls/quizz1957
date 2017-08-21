import questions from 'questions';

class Questions {
  constructor() {
    this.index = 0;
    this.questions = questions;
  }

  getIndex() {
    return this.index;
  }

  getCount() {
    return this.questions.length;
  }

  isFirst() {
    return this.index === 0;
  }

  isLast() {
    return this.index === this.questions.length - 1;
  }

  previous() {
    return --this.index;
  }

  next() {
    return ++this.index;
  }

  getQuestion() {
    return this.questions[this.index].question;
  }

  getAnswer() {
    return this.questions[this.index].answer;
  }

  getEntrySound() {
    return this.questions[this.index].entrySound;
  }

  getExitSound() {
    return this.questions[this.index].exitSound;
  }

  getPoints() {
    return Math.max(1, this.questions[this.index].points | 0);
  }
}

export default angular
  .module("questions", ['ngMaterial'])

  .service('Questions', Questions);
