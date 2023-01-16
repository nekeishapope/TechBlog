var express = require('express');
const webapp = express();
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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyAd44lANXOh0JwVtkZBJuN6z8Ib99xdx8Y",
  authDomain: "techblog-b0687.firebaseapp.com",
  projectId: "techblog-b0687",
  storageBucket: "techblog-b0687.appspot.com",
  messagingSenderId: "583576979805",
  appId: "1:583576979805:web:aae8b2c5e9f4975eee00b4",
  measurementId: "G-TCGZYGMKC7"
=======
  apiKey: "AIzaSyB4_FV4xI6-gD1D0IJQjy3ukgbs3mSWAn4",
  authDomain: "nikkiinit-3275e.firebaseapp.com",
  projectId: "nikkiinit-3275e",
  storageBucket: "nikkiinit-3275e.appspot.com",
  messagingSenderId: "166641773646",
  appId: "1:166641773646:web:bec7c9f70a6d35bd69671f",
  measurementId: "G-R8DKDB7K9R"
>>>>>>> 263958c3a854fe0c8c5e69b28d356475bd5b2b4b
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

webapp.use(express.static('public'));

webapp.engine('handlebars', expbs.engine({defaultLayout: 'main'}));

webapp.set('view engine', 'handlebars')
webapp.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

webapp.get('/tech', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/tech.html'))
})
webapp.get('/learn', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/learn.html'))
})
webapp.get('/bestBook', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/bestBook.html'))
})
webapp.get('/bestBookInterview', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/bestBookInterview.html'))
})
webapp.get('/bestWebSite', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/bestWebSite.html'))
})
webapp.get('/topYTchannel', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/topYTchannel.html'))
})
webapp.get('/bestKeyboard', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/bestKeyboard.html'))
})
webapp.get('/macVSpc', (req, res) =>{
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
webapp.get('/tutorial', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/htmlFiles/tutorial.html'))
})
webapp.get('/whatsnew', (req, res) =>{

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
webapp.get('/about', (req, res) =>{
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


webapp.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})

