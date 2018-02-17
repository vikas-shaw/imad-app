var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var artices = {
  articleOne = {
  title : 'Article One | Vikas Shaw',
  heading : 'A Day Without Colour',
  date : '15 Feb 2018',
  content : `
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
        something indistinct and Robin leaves with a note,”okay sir.”</p>`
        },

    articleTwo = {
    title : 'Article Two | Vikas Shaw',
    heading : 'A Day Without Colour',
    date : '16 Feb 2018',
    content : `
        <p>“Hello aunty , such a long time. Where have you been since I shifted to this place. No letters or phone calls.” 
          You start the the conversation very well , camouflaging the crisis you are going through.</p>

        <p>“I was busy settling some legal dispute over land, didn’t even get a chance to wish you a happy birthday, my child.
          But no worries, I have got this pullover for you, the finest fabric just the way you like it”, your aunt says.
          “Oh thank you so much aunty”, taking the pullover in your hands.</p>

        <p>“Hope you like the colour, tell me how is it? I had literally quarrelled over with your uncle over the colour. 
          He just doesn’t have a taste,” this was like a bombshell flying in sky and you never know where it would drop.
          “Ah! The colour is absolutely fine. Must say you have a nice sense of trend” you reply managing to somehow swing 
          the bombshell away from the top of your head.</p>`
        },
      
     articleThree = {
    title : 'Article Three | Vikas Shaw',
    heading : 'A Day Without Colour',
    date : '17 Feb 2018',
    content : `
        <p>“Thank you, son.” Aunt Lysa said. She gets up to leave on account of some other meetings. You walk behind her as
          she narrates you some business presentation, your eyes run all over your  lawn turned pale, the polished garden 
          tea table has lost its lustre, the sky has turned sad and the trees seem so quiet and blunt. You accompany her 
          to the car that once used to be your uncle’s masterpiece. She leaves and you turn back to your house, find yourself
          blind to the most vibrant part of human life – colours.</p>

        <p>On your way back you plan to set aside this world and sit back on your tea table, alone and undisturbed. You 
          approach the garden, sit and decide to shut your eyes to this strange humdrum period and wait for it to pass. 
          But the day seems long and your eyes sleepless. A leaf falls upon you and you hold it up to have a look. A 
          beautiful Autumn Maple, perhaps the prettiest one will ever find. You look above to find more of them but the 
          monochrome disgusts you. You throw it down and then suddenly your eyes go dizzy and you wake up the next day in 
          you bedroom.</p>

        <p>A smile rolls over your face when you see Robin next to you along with a doctor that is busy studying your reports
          and most importantly all in colours as bright as sunshine itself!!! you could notice every shade on Robin’s
          wrinkled face and the slightest hue in the entire room. Every corner, every bit was glistening like anything and 
          your red white polka dotted coffee mug just at your side, everything just as ever before.</p>`
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
