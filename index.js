var readlineSync = require('readline-sync');
var chalk = require('chalk');

var questions = [
    {
      question : 'Which is my favourite movie ? ',
      answer : 'Dark Night'
    },
    {
      question : 'Do you know my pet name ? ',
      answer : 'Aashu'
    },
    {
      question : 'From which state I am ? ',
      answer : 'Bihar'
    }
];

var name = readlineSync.question("Enter your name ? ");
console.log(`Welcome ${name} to Ashish's quiz. Let's see how much you know me.`);

var score = 0 ;

for(let obj of questions) {
    playQuiz(obj.question,obj.answer);
}
console.log('Your final score is : ' + chalk.green(score));

function playQuiz(question,answer) {
  let turn = true ;
  var rep ;
  while(turn) {
    var userAns = readlineSync.question('\n' + question);
    if(answer === userAns) {
        score += 1;
        console.log(chalk.green('Awesome! You are right'));
      console.log('Your current score is : ' + chalk.green(score));
        turn = false ;
    }
    else {
        console.log(chalk.red('Oops! you are wrong'));
        rep = readlineSync.question('Do you want to try again [Y / N] : ').toLowerCase();
        if(rep === 'n') {
            turn = false ;
        }
    }
  }
}