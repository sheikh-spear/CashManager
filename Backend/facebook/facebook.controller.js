const express = require('express');
const router = express.Router();
const facebookService = require('./facebook.service');

router.get('/getFacebookAuthUrl', getFacebookAuthUrl);
router.post('/facebookCallbackURL', facebookCallbackURL);

module.exports = router;

function getFacebookAuthUrl(req, res){
    facebookService.getFacebookAuthUrl((r) => {
        res.send(r)
    });
}

function facebookCallbackURL(req, res){
    facebookService.facebookCallbackURL(() => {
        res.send(req);
    });
}