const quotes = [
    {
        quote: "When you have a dream, you’ve got to grab it and never let go.",
        author: "Carol Burnett",
    },
    {
        quote: "The future depends on what we do in the present.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
    },
    {
        quote: "I can’t go back to yesterday because I was a different person then.",
        author: "Lewis Carroll",
    },
    {
        quote: "Although the world is full of suffering, it is full also of the oversoming of it.",
        author: "Helen Keller",
    },
    {
        quote: "Energy and persistence conquer all things.",
        author: "Benjamin Franklin",
    },
    {
        quote: "It is difficult to say what is impossible, for the dream of yesterday is the hope of today and the reality of tomorrow.",
        author: "Robert H. Goddard",
    },
    {
        quote: "Resolve to perform what your ought, perform without fail what you resolve.",
        author: "Benjamin Franklin",
    },
    {
        quote: "A dream written down with a date becomes a goal, A goal broken down becomes a plan. A plan backed by Action makes your dream come true.",
        author: "Greg S, Reid",
    },
    {
        quote: "Never, Never, Never, Never give up",
        author: "Winston Churchill",
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

Math.random() * 10
TodaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// console.log(TodaysQuote);

quote.innerText = `"${TodaysQuote.quote}"`;
author.innerText = `\n- ${TodaysQuote.author}`;
