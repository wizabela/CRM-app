function handleError(err, req, res, next) {
    console.log(err.message);
res.render('error');
}

module.exports = {
    handleError,
};