const db = require('../models/AnnotationModel');
const dbImage = require('../models/imageModel')

module.exports = {
    createAnnotation: (req, res) => {
        db
            .create(req.body)
            .then(dbAnnotation => {
                res.json(dbAnnotation);
                // console.log(dbAnnotation);
                console.log(req.params.id)

                return dbImage.findByIdAndUpdate({ _id: req.params.id }, { $push: { annotations: dbAnnotation } }, { upsert: true, new: true })
            })
            .then(dbImage => {
                // console.log(dbImage)
            })
            .catch(err => console.log(err))
    }
}