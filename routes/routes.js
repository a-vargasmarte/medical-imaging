const router = require('express').Router();
const imageController = require('../controllers/imageControllers');

router.route('/medicalImaging/local/images')
    .get(imageController.getImageUrls) //fetches image urls

router.route('/medicalImaging/images')
    .get(imageController.getImages) //get all images
    .post(imageController.createImage) //create an image

module.exports = router;