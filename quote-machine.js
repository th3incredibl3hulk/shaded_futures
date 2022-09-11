var quotes=[
    '"What is presented without evidence can be refuted without evidence" --Christopher hitchens',
    '"Weakness and ignorance are not barriers to survival, but arrogance is" -- Cixin Liu, Death\'s End',
    '"Don\’t cling to a mistake just because you spent a lot of time making it" --Unknown',
    '"If you find yourself in a fair fight your tactics suck" --Unknown',
    '"Truth is like poetry. And most people fucking hate poetry" --Overheard in a DC bar'
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]
}