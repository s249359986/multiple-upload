var express = require('express');
var router = express.Router();
var multer = require('multer')
var upload = multer({ dest: '/path', preservePath: true })
const dataToFile = require('./serve');

/**
 * 
 * 
*/
router.post('/api', upload.any(), async function (req, res, next) {
   
    let list = []
    try {
      for (let i = 0; i < req['body']['files'].length; i++) {      
        let {code,data} = await dataToFile(req['body']['baseData'][i])      
      }      
      res.json(result)
    } catch (err) {      
      res.json({ code: 1, data: err })
    }  
  });
module.exports = router;
