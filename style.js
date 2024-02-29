// This file handles style operations, to inject the background image and the text color into the html file


const styleRegexp = /<style>[\s\S]+<\/style>/;
const headRegexp = /<head>[\s\S]+<\/head>/;
const fs = require('fs').promises;

const injectStyle = async (file) => {
  const cssFile = file.replace('.html', '.css').replace('./public/', '');
  const styleRef = `<link rel="stylesheet" type="text/css" href="${cssFile}">`;
  let data = await fs.readFile(file, 'utf8');
  if (data.match(styleRegexp)) {
    data = data.replace(styleRegexp, ``);
  }
  if (data.match(headRegexp)) {
    data = data.replace(headRegexp, ``);
  }
  data = data.replace(`<body>`, `<head>${styleRef}</head><body>`);
  fs.writeFile(file, data);
}

const styleToCss = (file, style) => {
  const css = style.toString();
  const cssFile = file.replace('.html', '.css');
  fs.writeFile(cssFile, css);
}


// class and constructor for the style object
class Style {
  constructor(bg) {
    this.bg = bg;
  }

  toString() {
    return `body
{
  height: 100vh;
  background-image: url('${this.bg}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

p
{
  background-color: black;
  text-align: center;
  max-width: 90%;
  padding: 10px;
}

ol
{
  background-color: black;
  max-width: 90%
  margin: 10px;
}

li
{
  padding: 10px;
}

a
{
  color: white;
}
    `;
  }
}

module.exports = {
  injectStyle,
  styleToCss,
  Style
};

