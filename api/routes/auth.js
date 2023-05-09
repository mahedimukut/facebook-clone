const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

// Register
router.post("/register", async (req, res) => {
    try {
        // gen new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        // save user and return response
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).send(err);
    }

});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        // check and validate
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).send("User not found");
        // check and validate
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Wrong password");
        // send data
        res.status(200).json(user);
    } catch (err) {
        res.status(500).send(err);
    }

})

module.exports = router;