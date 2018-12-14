const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnotationSchema = new Schema({
    annotation: Array,
    imageId: [{ type: Schema.Types.ObjectId, ref: 'Images' }],
    updated: { type: Date, default: Date.now }

})

const Annotation = mongoose.model("Annotation", AnnotationSchema)

module.exports = Annotation;