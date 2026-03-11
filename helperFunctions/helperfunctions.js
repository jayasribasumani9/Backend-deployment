const quotes= require('../data/quotesData');

function getRandom(quotess){
    const number= Math.floor(Math.random()*quotess.length);
    return quotess[number];
}

function filterByCategory(category){
    return quotes.filter(q=>q.category.toLowerCase()===category.toLowerCase());
}

function formatQuote(quote){
    return {
        quote: quote.text,
        author:quote.author,
        category:quote.category
    };
}

module.exports={getRandom,filterByCategory,formatQuote};