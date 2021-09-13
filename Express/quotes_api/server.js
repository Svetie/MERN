const { application } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors());



const quoteTable = [
    {
    content: 'Be yourself; everyone else is already taken.', 
    author: 'Oscar Wilde'
    },
    {
        content: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: 'Albert Einstein'
    },
    {
        content: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        content: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        content: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        content: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        content: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain"
    }
]



app.get("/api/",(req, res)=>{
    res.json({status: "OK", msg: "hello world"})
})

app.get("/api/quotes", (req, res)=>{
    res.json({status: "ok", count: quoteTable.length, results: quoteTable})
})

app.post("/api/quotes", (req,res)=>{
    console.log('info from request ', req.body)
    quoteTable.push(req.body);
    res.json({status: "ok", count: quoteTable.length, results: quoteTable})
})

app.get("/api/quotes/:idx", (req,res) =>{
    // const {idx} = req.params;
    console.log("request param is", req.params.idx)
    res.json({
        results: quoteTable[req.params.idx],
        msg: "ok"
    })
})

app.put("/api/quotes/:idx", (req,res) =>{
    quoteTable[req.params.idx] = req.body;
    res.json({status: "ok", count: quoteTable.length, results: quoteTable})
})

app.delete("/api/quotes/:idx", (req,res)=> {
    quoteTable.splice(req.params.idx, 1);
    res.json({status: "ok", count: quoteTable.length, results: quoteTable})
})

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );