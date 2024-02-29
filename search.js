const google = require('googlethis');

searchImages = async (searchTerms) => {
  const images = (await google.image(searchTerms, 
    { 
      safe: false,
    })).filter(i => ((i.height > i.width) && i.width > 1000))
    .map(i => i.url)
    .filter(i => !i.includes('gstatic') && !i.includes('stock') && !i.includes('logo') && !i.includes('icon') && !i.includes('favicon'));
    images.forEach(i => console.log(i));
    return images;
}

module.exports = {
  searchImages
}
