const fs = require('fs');
const path = require('path');


//creates html page
module.exports = function Saver(req, res, next) {
  console.log(req.body)
  const html =
  `<!DOCTYPE html>
  <html>
    <head>

            <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
            <script src='http://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js'></script>
        <link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Monoton' rel='stylesheet' type='text/css'>


        <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css'>

        <link rel="stylesheet" href="css/style.css">
        <script src="js/buttons.js"></script>
      <meta charset="utf-8">
      <title>${req.body.name}</title>
    </head>
    <body>
        <div id="particles-js">
      ${req.body.inner}
      </div>
    </body>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js'></script>

    <script src="js/index.js"></script>

    <script src=
    'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
    <script src=
    'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js'>
    </script>
    <script src="js/index.js">
    </script>
  </html>`;

  fs.writeFile(path.join(__dirname, `../../userpages/${req.cookies.ssid}/client/${req.body.name.replace(/(.html)/gm,"")}.html`), html, (err) => {
    if (err) throw err;
  });
}
