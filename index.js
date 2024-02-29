const words = require('./words');
const { searchImages } = require('./search');
const { Style, styleToCss, injectStyle } = require('./style');

const { DOMParser } = require('xmldom');
const fs = require('fs');
const fsPromises = require('fs').promises;

const args = process.argv.slice(2);

const path = args[0] || './public';

// for every html file in the directory
fs.readdir(path, (err, files) => {
  console.log(path)
  if (err) {
    console.log('Error reading the directory');
    return;
  }

  // if no html files are found in the directory, tell the user
  if (!files.some(file => file.includes('.html')))
  {
    console.log('No html files found in the directory');
    return;
  }

  files.forEach(async file => {
    if (file.includes('.html')) {
      file = `${path}/${file}`;

      injectStyle(file);

      const data = await fsPromises.readFile(file, 'utf8');
      const document = new DOMParser().parseFromString(data, 'text/html');

      const searchTerms = (await words.wordsFromText(document.documentElement.textContent)).splice(0, 3).join(' ');
      const images = (await searchImages(searchTerms));
      const image = images[Math.floor(Math.random() * images.length)];
      
      styleToCss(file, new Style(image));
    }
  })
})
