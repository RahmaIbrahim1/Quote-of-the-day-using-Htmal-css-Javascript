var quote =[
{
    quote: "'Take risks now. Do something bold. You won’t regret it.'",
    auther: "Elon Musk",
    images:"images/223723.jpg"
},
{
    quote: "'Resentment is like drinking poison and then hoping it will kill your enemies'",
    auther: "Nelson Mandela",
    images:"images/Nelson_Mandela_1994.jpg"

},
{
    quote: "'Coincidence is God's way of remaining anonymous'",
    auther: "Albert Einstein",
    images:"images/einstein-12923-portrait-medium.jpgg.jpg"

},
{
    quote: "'Life is like riding a bicycle. To keep your balance, you must keep moving.'",
    auther: "Albert Einstein",
    images:"images/einstein-12923-portrait-medium.jpgg.jpg"

},
{
    quote: "'You are never too old to set another goal or to dream a new dream.'",
    auther: "C.S. Lewis",
    images:"images/TQ5MjY@._V1_.jpg"

},

];

function getQoutes(){
var gather = Math.floor(Math.random()*quote.length)
document.getElementById("quote").innerHTML = quote[gather].quote
document.getElementById("auther").innerHTML = quote[gather].auther
document.getElementById("images").src = quote[gather].images

};
