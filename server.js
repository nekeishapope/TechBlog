var express = require('express');
const app = express();
const port = 3000;
const path = require('path')
const expbs = require("express-handlebars") 
const RssFeedEmmitter = require('rss-feed-emitter');
const feeder = new RssFeedEmmitter();
//const feeder = new RssFeedEmmitter({userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'})

//  RSS FEED
//const fs = require("fs");
//const Parser = require("rss-parser");

// static file like css images

app.use(express.static('public'));

app.engine('handlebars', expbs.engine({defaultLayout: 'main'}));

app.set('view engine', 'handlebars')
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/tech', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/tech.html'))
})
app.get('/learn', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/learn.html'))
})
app.get('/bestBook', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/bestBook.html'))
})
app.get('/bestBookInterview', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/bestBookInterview.html'))
})
app.get('/bestWebSite', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/bestWebSite.html'))
})
app.get('/topYTchannel', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/topYTchannel.html'))
})
app.get('/bestKeyboard', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/bestKeyboard.html'))
})
app.get('/macVSpc', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/macVSpc.html'))
})
app.get('/gadgets', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/gadgets.html'))
})
app.get('/deskSetup', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/deskSetup.html'))
})

app.get('/bestMonitor', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/bestMonitor.html'))
})

app.get('/whatsnew', (req, res) =>{

  res.sendFile(path.join(__dirname, '/public/htmlFiles/whatsnew.html'))
   
  /* feeder.add({
    url:'https://www.theverge.com/rss/index.xml',
    refresh: 200
})

feeder.on('new-item', function(item){
  
   
   // res.send(item)
       // res.send(item)
        console.log(item)
   
    
    
})*/



})
app.get('/about', (req, res) =>{
    res.sendFile(path.join(__dirname, '/html/about.html'))
})





//RSS FUNCTION 1


// RSS FUNCTION 2
/*
(async function main(){
    const Parser = new Parser();

    const feed = await Parser.parseURL("https://www.theverge.com/rss/index.xml")

    let items = [];

    const filename = `${feed.title}`;
    if(fs.existsSync(filename)){
        items = require(filename)
    }

    await Promise.all(feed.items.map(async (currentItems) => {
        if(items.filter((items) =>items === currentItems).length <= 1){
            items.push(currentItems);
        }
    }))

fs.writeFileSync(filename, JSON.stringify(items));
console.log(filename, JSON.stringify(items));

})();
*/


app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})

