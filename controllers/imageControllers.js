// import db
const db = require('../models/imageModel');

const fs = require('fs');

module.exports = {
    getImageUrls: function (req, res) {
        const imageFolder = `client\\src\\assets\\images\\5\\5\\`;
        let images = {};
        fs.readdir(__dirname.replace("controllers", "") + imageFolder, (err, files) => {
            // console.log(__dirname.replace("controllers", "") + imageFolder);
            // console.log(files)

            images = files.map(file => {
                let image = {
                    value: '',
                    label: ''
                }

                file = file.replace('.jpg', "")
                image.value = `./assets/images/5/5/` + file;
                image.label = file
                return image;
            });
            res.json(images);
        })
    },
    getImages: function (req, res) {
        db
            .find(req.query)
            .then(dbImage => res.json(dbImage))
            .catch(err => console.log(err))
    },
    createImage: function (req, res) {
        db
            .create(req.body)
            .then(dbImage => res.json(dbImage))
            .catch(err => console.log(err))
    },
    findOneImage: (req, res) => {
        db.
            find({
                "imageLabel": req.params.imageLabel
            })
            .sort({ "updated": -1 })
            .then(dbImage => {
                res.json(dbImage)
            })
            .catch(err => console.log(err))
    }
}