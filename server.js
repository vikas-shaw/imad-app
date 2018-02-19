var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
  title : 'Article One | Vikas Shaw',
  heading : 'A Day Without Colour',
  date : '15 Feb 2018',
  content : `
        <p>Imagine yourself, getting up one morning  in a world with </p>`
        },
    'article-two' : {
    title : 'Article Two | Vikas Shaw',
    heading : 'A Day Without Colour',
    date : '16 Feb 2018',
    content : `

        <p>You pull open your bathoom and Robin,your butler, comes running to you with a toothbrush and a towel. When you 
           realize that Robin, a man of tall stature and fair complexion looks at you with the palest expression you have ever seen. 
           You walk past Robin </p>`
        },
    'article-three' : {
    title : 'Article Three | Vikas Shaw',
    heading : 'A Day Without Colour',
    date : '17 Feb 2018',
    content : `
        
        <p>It is this time when you hear a doorbell. Robin calls out to you in the gallery</p>`
        }
  };

function createTemplate (data) {
  
  var title = data.title;
  var heading = data.heading;
  var date = data.date;
  var content = data.content;
  
  var htmlTemplate = `

    <html>  
      <head>
         <title>
          ${title}
         </title>
         <meta name= "viewport" content="width-device-width, initial-scale-1" />
          <link href="/ui/style.css" rel="stylesheet" />
      </head>
      <body>
          <div class="container">
            
              <div>
                  <a href="/">Home</a>
              </div>
              <hr/>
                <h3>
                    ${heading}
                </h3>
              <div>
                  ${date}
              </div>
              <div>
                  ${content}
              </div>
          </div>
      </body>
    </html>

  `;
  return htmlTemplate;
  
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  //articleName == article-one
  //articles[articleName] == {} content object for article one
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/counter', function (req, res) {
   res.send('hii there '); 
});

app.get('/hello', function (req, res) {
    res.send(path.join('hii there');
});

app.get('/ui/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
   res.sendFile(path.join(__dirname,'ui', main.js)); 
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
