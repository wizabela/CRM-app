class ValidationError extends Error {
}

class NotFoundError extends Error {
}

function handleError(err, req, res, next) {
    if (err instanceof NotFoundError) {
        res
            .status(404)
            .render('error', {
            message: `Nie można znaleźć elementu o danym ID.`,
        });
        return;
    }
    console.log(err); //to my widzimy w console na serwerze


    res.status(err instanceof ValidationError ? 400 : 500);

    res.render('error', {
        message: err instanceof ValidationError ? err.message : 'Przepraszamy, spróbuj ponownie.', //to widzi
                                                                                                   // użytkownik na
                                                                                                   // froncie
    });
}

module.exports = {
    handleError,
    ValidationError,
    NotFoundError,
};