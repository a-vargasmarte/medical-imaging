const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    imageUrl: {
        type: String,
        require: true
    },
    imageLabel: { type: String, require: true },
    annotations: Array,
    updated: { type: Date, default: Date.now }
});

const Image = mongoose.model("Images", imageSchema);

module.exports = Image;