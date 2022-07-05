var validDate = require('./validateDate');

const dateNumberController = (req, res) => {
    let { params: { date} } = req;

    let d = new Date(Number(date));
    validDate(d);
    
    let utcDate = new Date(d).toUTCString();

    res.status(200).json({unix: Number(date), utc: utcDate});
    console.log(d);
};

module.exports = dateNumberController;
