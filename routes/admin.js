const express = require('express')
const router = express.Router();
const requiresAdmin = require('../middleware/requiresAdmin')
const validator = require('../validators/admin');
const controller = require('../controllers/admin');

router.post('/models-list', controller.modelsList)
router.post('/brands-list', controller.brandsList)
router.post('/aesthetics-list', controller.aestheticsList)
router.post('/clothing-list', controller.clothingList)
router.post('/image-generate', controller.imageGenerate)
router.post('/update-homeSetting', validator.homeSetting, requiresAdmin, controller.updateHomeSetting)

module.exports = router;