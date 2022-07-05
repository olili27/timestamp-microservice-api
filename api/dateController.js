
var express =  require('express');
var router = express.Router();

var dateNumberController = require('./dateNumber');
var dateStringController = require('./dateString');

router.get('/:date?',(req, res) => {
    let dateInput = req.params.date;
    try {
        if(!dateInput) {
            res.status(200).json({unix: new Date().getTime(), utc: new Date().toUTCString()})
        } else {
            if(Number(dateInput)) {
                dateNumberController(req, res);
            } else {
                dateStringController(req, res);
            }
        }
    } catch (error) {
        res.status(400).json({error: "Invalid Date"});
    }
});

module.exports = router;