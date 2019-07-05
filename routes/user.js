const router = require('express').Router();
const models = require('../models');
const User = models.User;

router.get('/users', (req, res) => { User.findAll()
    .then(user => res.send(user))

});

router.get("/:id", (req, res) => {User.findOne({where: {id:req.params.id}})
        .then( user => {
            res.send(user);
        })
});

router.get("/:id", (req, res) => Users.create(req.body)
        .then( user => {
            res.send(user);
        })
})

module.exports = router;