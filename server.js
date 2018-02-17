var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articeOne = {
  
  var title : 'Article One | Vikas Shaw'
  var heading : 'A Day Without Colour'
  var date : '15 Feb 2018'
  var content : `
        <p>Imagine yourself, getting up one morning  in a world with ‘no color’. You step down your king sized bed, which used to 
         be velvet black with a wooden frame made of the finest wood in all of Europe. You look around to find your room as dull as 
         one could think of. The blue silk-curtains, the brown classy timberwood floor tiles, the red and black diaries placed on the
         study, the glossy table lamp, your favorite polka dotted coffee mug….. all gone. Just a long nap last night and you wake up 
         in a strange galaxy that lacks colours!!</p>

        <p>You pull open your bathoom and Robin,your butler, comes running to you with a toothbrush and a towel. When you 
        realize that Robin, a man of tall stature and fair complexion looks at you with the palest expression you have ever seen. 
        You walk past Robin or Robin like figure or whosoever he was and reach the basin. You rinse your face, rub your eyes but 
        you just can’t wipe off the fact that it is all happening for real. Suddenly you watch yourself in the mirror. Is that you?
        Of course not. But then how is it that your lips, your nose,your eyes are indifferentiable. Seems like a nightmare and you
        wait for it to pass away.</p>

        <p>It is this time when you hear a doorbell. Robin calls out to you in the gallery,”Sir, your aunt Lysa is here to meet you.
        ” “Please have a seat mam”, you hear them talking. You pull your steps ahead, slowly down the steps. A pounding heart and 
        a mind bustling with the chaos. Robin comes running up and says,”She’s waiting downstairs sir. What shall I make for 
        breakfast?.” Indifferent to his words you are busy searching your home for the slightest tinge of colour left. You mutter
        something indistinct and Robin leaves with a note,”okay sir.”</p>
   `
  
}

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

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
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
