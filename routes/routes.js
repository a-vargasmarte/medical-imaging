const router = require('express').Router();
const imageController = require('../controllers/imageControllers');
const annotationController = require('../controllers/annotationController');

router.route('/medicalImaging/local/images')
    .get(imageController.getImageUrls) //fetches image urls

router.route('/medicalImaging/images')
    .get(imageController.getImages) //get all images
    .post(imageController.createImage) //create an image

router.route('/medicalImaging/images/annotations/:id')
    .post(annotationController.createAnnotation) //creates an annotation

module.exports = router;