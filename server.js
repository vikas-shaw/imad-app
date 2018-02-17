var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var artices = {
    'article-one' : {
  title : 'Article One | Vikas Shaw',
  heading : 'A Day Without Colour',
  date : '15 Feb 2018',
  content : `
        <p>hello there this is the first page</p>`
        },
    'article-two' : {
    title : 'Article Two | Vikas Shaw',
    heading : 'A Day Without Colour',
    date : '16 Feb 2018',
    content : `

        <p>this is the second page</p>`
        },
    'article-three' : {
    title : 'Article Three | Vikas Shaw',
    heading : 'A Day Without Colour',
    date : '17 Feb 2018',
    content : `
        
        <p>this is the third page</p>`
        }
  };

function createTemplate(data) {
  
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
            </div>
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

app.get('/ui/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName', function (req, res) {
  //articleName == article-one
  //articles[articleName] == {} content object for article one
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res) {
  res.send(path.join('hii this is second web page'));
});

app.get('/article-three', function (req, res) {
  res.send(path.join('hii this is third web page'));
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
