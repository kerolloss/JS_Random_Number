var userNames = [
"― Oscar Wilde",
"― Albert Einstein",
"― Frank Zappa",
"― Marcus Tullius Cicero",
"― Dr. Seuss",
"― Mae West"
];
var text = [
"Be yourself; everyone else is already taken.",
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
"So many books, so little time.",
"A room without books is like a body without a soul.",
"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
"You only live once, but if you do it right, once is enough."
];
document.getElementById("quote").innerHTML = "Hello";

function randomNumber(){
    var num = Math.floor( Math.random() * userNames.length );
    
    document.getElementById("quote").innerHTML = text[num];
    document.getElementById("author").innerHTML = userNames[num];
}

