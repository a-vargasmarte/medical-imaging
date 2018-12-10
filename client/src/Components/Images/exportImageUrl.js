// import fs from 'fs';
const fs = require('fs');
const imageFolder = '../../assets/images/5/5';

var images;
fs.readdir(imageFolder, (err, files) => {
    // console.log(files);
    images = files.map(file => {
        return './assets/images/5/5/' + file
    });
    // images = files
    console.log(images)
    module.exports = images
})




