const db = require('../models/AnnotationModel');
const dbImage = require('../models/imageModel')

module.exports = {
    createAnnotation: (req, res) => {
        db
            .create(req.body)
            .then(dbAnnotation => {
                res.json(dbAnnotation);
                console.log(dbAnnotation);
                return dbImage.findByIdAndUpdate({ _id: dbAnnotation.imageId }, { $push: { annotations: dbAnnotation } }, { upsert: true, new: true })
            })
            .then(dbImage => {
                console.log(dbImage)
            })
            .catch(err => console.log(err))
    }
}