const fs = require('fs');
const questions = require('./app/questions.js');
const input = [];
const output = [];
questions.forEach(question => {
  if (question.entrySound) {
    input.push(question.entrySound);
  }
  if (question.exitSound) {
    input.push(question.exitSound);
  }
});
input.sort();

fs.readdir('./app/assets/mp3', (err, list) => {
  list.forEach(file => {
    if (/\.mp3$/.test(file)) {
      output.push(file.substr(0, file.length - 4));
    }
  });

  for (let i = 0; i < Math.max(input.length, output.length); i++) {
    let line = input[i] || '';
    while (line.length < 20) {
      line += ' ';
    }
    line += output[i] || '';
    console.log(line);
  }
});
