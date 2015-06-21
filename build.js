var htmlAutoprefixer = require('html-autoprefixer'),
    fs = require('fs'),
    path = require('path'),
    sourceHtmlFile,
    prefixedHtmlFile;

sourceHtmlFile = fs.readFileSync(path.join(process.cwd(), 'source', 'gkProductGallery.html'));

prefixedHtmlFile = htmlAutoprefixer.process(sourceHtmlFile);

fs.writeFileSync(path.join(process.cwd(), 'dist', 'gkProductGallery-prefixed.html'));
