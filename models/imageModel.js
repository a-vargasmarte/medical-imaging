const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    image: {
        type: Object,
        require: true
    },
    annotations: Array
});

const Image = mongoose.model("Images", imageSchema);

module.exports = Image;