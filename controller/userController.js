const { response } = require('express');
const User = require('../models/model');


//shows the list of employes 
const index = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message: 'Error occured'
            })
        })
}


//single employee display
const show = (req, res, next) => {
    let userId = req.body.userId
    User.findById(userId)
        .then(response => {
            res.json({
                response
            })

        }).catch(error => {
            res.json({
                message: 'Error occured'
            })
        })
}


//adding user
const store = async (req, res, next) => {
    ///  console.log("entered storing")
    // console.log(req.body.name + " " + req.body.email + " " + req.body.password);
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    })

    await user.save()
        .then(response => {
            res.json({
                message: 'user added successfully'
            })

        })
        .catch(error => {
            res.json({
                message: 'Error occured' + error
            })
        })

}

//updating user

const update = (req, res, next) => {
    let userId = req.body.userId;

    let UpdateData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    }

    User.findByIdAndUpdate(userId, { $set: UpdateData })
        .then(() => {
            res.json({
                message: 'user updated  successfully'
            })

        }).catch(error => {
            res.json({
                message: 'Error occured'
            })
        })

}


//deleting user

const destroy = (req, res, next) => {
    let userId = req.body.userId;
    User.findByIdAndRemove(userId)
        .then(() => {
            res.json({
                message: 'user deleted  successfully'
            })

        }).catch(error => {
            res.json({
                message: 'Error occured'
            })
        })


}


module.exports = {
    index, show, store, update, destroy
}
