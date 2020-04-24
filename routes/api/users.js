const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check")

//GET api/users/register

router.post("/", [
    check("username","Username is required").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a password with 8 or more characters please").isLength({ min: 8 })
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.send("User router")
});



module.exports = router;