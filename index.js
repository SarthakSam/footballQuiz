const readlineSync = require('readline-sync'); 
const chalk = require('chalk');

function input(question) {
    let val = "";
    while( !val ) 
        val = readlineSync.question( chalk.bold.black.bgRed(question) );
    return val;    
} 



function randomColor(text) {
    let red = Math.floor( Math.random() * 255 );
    let green = Math.floor( Math.random() * 255 );
    let blue = Math.floor( Math.random() * 255 );
    if( red < 50) 
        red += 50;
    if( green < 50) 
        red += 50;
    if( blue < 50) 
        red += 50;
        
    
    return chalk.bold.rgb(red, green, blue)(text);
}

var quiz = [
    {
        statement: "Which player scored the fastest hat-trick in the Premier League? ",
        options: ["Sadio Mane", "Lionel Messi", "Christiano Ronaldo","Petr Cech"],
        answerIndex: 0
    },
    {
        statement: "Which country has won the most World Cups? ",
        options: ["Brazil", "Argentina", "England", "Germany", "France"],
        answerIndex: 0
    },
    {
        statement: "Messi has spent his entire professional career at Barcelona, but what was his schoolboy team? ",
        options: ["Sporting FC","Newell's Old Boys", "Youth well academy", "Santos FC"],
        answerIndex: 1
    },
    {
        statement: "Ronaldo is synonymous with the No.7, but what other number did he wear at Real Madrid? ",
        options: [10, 8, 9, 13, 30],
        answerIndex: 2
    },
    {
        statement: "Which player has won most Ballon D'ors ",
        options: ["Ronaldinho","Ronaldo","Zidane","Messi"],
        answerIndex: 3
    },
    {
        statement: "Messi wore the No.30 at the start of his Barca career and is now No.10. What other number has he worn for the club? ",
        options: [34, 19, 7, 3],
        answerIndex: 0
    },
    {
        statement: "Which German multinational sportswear company is Messi an ambassador for? ",
        options: ["Nike", "Puma", "Adidas", "Kappa"],
        answerIndex: 2
    },
    {
        statement: "Which club has won the most Champions League titles? ",
        options: ["Real Madrid", "Manchester United", "Bayern munich", "Barcelona"],
        answerIndex: 0
    },
    {
        statement: "Who is the Champions League's top goalscorer of all time? ",
        options: ["Lionel Messi", "Christiano Ronaldo", "Harry Kane", "Ronaldinho", "Ronaldo Nazario"],
        answerIndex: 1
    },
    {
        statement: "No of Games Christiano Ronaldo took to score his first champions League Goal? ",
        options: [20, 15, 27, 5, 9],
        answerIndex: 2
    },
    {
        statement: "With 365 goals, who holds the record for top Bundesliga goalscorer of all time? ",
        options: ["Robert Laewandowski", "Marco Reus", "Thomas Muller", "Arjen Robben", "Gerd Muller"],
        answerIndex: 4
    },
    {
        statement: "I made my international debut for Brazil in 1993 and scored in the game. I played in two World Cup finals and my club career saw me play in Brazil, Italy, Angola, Spain, Greece and Uzbekistan. ",
        options: ["Rivaldo", "Careca", "Muller", "Romario", "Roberto Carlos"],
        answerIndex: 0
    },
    {
        statement: "Who is the current captain of Football club Barcelona? ",
        options: ["Gerard Pique", "Sergio Busquets", "Jordi Alba", "Lionel Messi"],
        answerIndex: 3
    },
    {
        statement: "Football Club to win most La Liga titles since 2010? ",
        options: ["Real Madrid", "Atletico Madrid", "Barcelona", "Seville"],
        answerIndex: 2
    },
    {
        statement: "Who is all-time top scorer in the top five European leagues? ",
        options: ["Robert Laewandowski", "Lionel Messi", "Cristiano Ronaldo", "Pele"],
        answerIndex: 1
    },
    {
        statement: "No of players playing at a time for a team in a football match? ",
        options: [11, 12, 13, 10],
        answerIndex: 0
    },
];

function takeQuiz(quiz) {
    let score = 0;
    quiz.forEach(question => {
        console.log( chalk.underline.bold.italic( randomColor(question.statement) ) );
        let options = question.options.map( option => randomColor(option));
        let ans = readlineSync.keyInSelect(options,chalk.bold("Enter your choice") );
        if(ans == question.answerIndex) {
            score++;
            console.log( chalk.bold.greenBright("Your answer is correct") );
        }
        else {
            console.log( chalk.red( "Your answer is wrong") );
            console.log("correct ans is " + (question.answerIndex + 1));
            score--;
        }
        console.log("\n\n");
    });
    return score;
}

let name = input("Enter your name? ");
console.log(chalk.bold.cyan(`\nHI ${name} lets test your football knowledge with this awesome quiz`) );

let score = takeQuiz(quiz);

console.log( chalk.bold.green(`${name}, your score score is ${score}`) );
