const validDate = (input) => {
    if(input instanceof Date && !isNaN(input)) {
        return input;
    }
    else throw error;
}

module.exports = validDate;