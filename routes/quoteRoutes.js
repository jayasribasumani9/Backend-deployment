const express= require('express');
const { filterByCategory, getRandom, formatQuote } = require('../helperFunctions/helperfunctions');
const router= express.Router();
const quotes=require('../data/quotesData');

router.get('/quote',(req,res)=>{

    const {category}= req.query;
    
    if(category){
        const filteredQuotes = filterByCategory(category);

        if(filteredQuotes.length===0){
            return res.status(404).json({
                error:"No quotes found for this category"
            });
        }
        const randomQuotes= getRandom(filteredQuotes);
        return res.json(formatQuote(randomQuotes));
    }
    const randomQuote=getRandom(quotes);
    console.log(randomQuote);   // DEBUG
    res.json(formatQuote(randomQuote));
    
});

router.get('/quotes',(req,res)=>{
    const formattedQuotes=quotes.map(formatQuote);
    res.json(formattedQuotes);
})

module.exports=router;