var htmlAutoprefixer = require('html-autoprefixer'),
    fs = require('fs'),
    path = require('path'),
    sourceHtmlFile,
    prefixedHtmlFile;

sourceHtmlFile = fs.readFileSync(path.join(process.cwd(), 'source', 'gkProductGallery.html'), { encoding : 'utf8'});

prefixedHtmlFile = htmlAutoprefixer.process(sourceHtmlFile);

fs.writeFileSync(path.join(process.cwd(), 'dist', 'gkProductGallery-prefixed.html'), prefixedHtmlFile);
