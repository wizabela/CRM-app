const express = require('express');

const clientRouter = express.Router();

clientRouter

    .get('/', (req, res) => {
        res.send('It works!');
    })
    .get('/:id', (req, res) => {
        res.send('It works!');
    })
    .post('/', (req, res) => {
        res.send('It works!');
    })
    .put('/:id', (req, res) => {
        res.send('It works!');
    })
    .delete('/:id', (req, res) => {
        res.send('It works!');
    })
;

module.exports = {
    clientRouter,
};