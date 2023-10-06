let quotes = [
    {quote:"The only way to do great work is to love what you do.", source:"Steve Jobs", citation:"Stanford University", year:"2005"},
    {quote:"Don't watch the clock; do what it does. Keep going.", source:"Sam Levenson"},
    {quote:"Your time is limited, don't waste it living someone else's life.", source:"Steve Jobs", citation:"Stanford University", year:"2005"},
    {quote:"Believe you can and you're halfway there.", source:"Theodore Roosevelt"},
    {quote:"The future depends on what you do today.", source:"Mahatma Gandhi"},
    {quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.", source:"Winston Churchill"},
    {quote:"The only place where success comes before work is in the dictionary.", source:"Vidal Sassoon"},
    {quote:"Don't let yesterday take up too much of today.", source:"Will Rogers"}
];

//To control which quotes were already displayed
let selectedQuotes = [];

function getRandomQuote(){

    let selected = selectedQuotes.length;

    //validate if all quotes were displayed
    if (selected != quotes.length)
    {
        let number = Math.floor(Math.random() * quotes.length);

        //If it's the first quote, don't go through the while.
        if (selected != 0)
        {
            while (quoteAlreadySelected(number))
            {
                number = Math.floor(Math.random() * quotes.length);
            }
            
        }

        selectedQuotes.push(number);
        return quotes[number];
    } else {
        return "";
    }
}

//Check if the quote was already displayed.
function quoteAlreadySelected(number){
    for (let i = 0; i < selectedQuotes.length; i++)
    {
        if (selectedQuotes[i] == number)
            return true;
    }
    return false;
}


function printQuote(){

    let selectedQuote = getRandomQuote();
    const container = document.querySelector(`.quote-box`);
    
    if (selectedQuote != "")
    {
        let quote = `
            <p class="quote">${selectedQuote.quote}</p>
            <p class="source">${selectedQuote.source}`;

        let endSource = `</p>`;

        if (selectedQuote.citation != null)
        {
            quote = quote.concat(`<span class="citation">${selectedQuote.citation}</span>`);
        }

        if (selectedQuote.year != null)
        {
            quote = quote.concat(`<span class="year">${selectedQuote.year}</span>`);
        }

        container.innerHTML = quote.concat(endSource);

    } else {
        container.innerHTML = `<p>Sorry, there are no more quotes.</p>`;
    }
}

document.addEventListener('DOMContentLoaded', printQuote);
document.getElementById('load-quote').addEventListener('click', printQuote)