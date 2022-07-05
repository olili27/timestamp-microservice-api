var validDate = require('./validateDate');

const dateStringController = (req, res) => {
    let { params: { date } } = req;

    let d = new Date(date);
    validDate(d);
    
    let unixDate = d.getTime();
    let utcDate = d.toUTCString();

    res.status(200).json({unix: unixDate, utc: utcDate});
    console.log(d);
};

module.exports = dateStringController;