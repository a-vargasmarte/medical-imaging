const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnotationSchema = new Schema({
    annotation: Array,
    imageId: String

})

const Annotation = mongoose.model("Annotation", AnnotationSchema)

module.exports = Annotation;