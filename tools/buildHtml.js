/*eslint-disable no-console */
import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err.red);
  }//end if(err)

  const $ = cheerio.load(markup);

  //since a seperate spreadsheet is only utilized for the production build, need to dynamically
  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', function(err) {
    if (err) {
      return console.log(err.red);
    }//end if(err)
    console.log('index.html written to dist'.green);
  });//end fs.writeFile
});//end fs.readFile
