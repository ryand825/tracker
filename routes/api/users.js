const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//Load User Model
const User = require("../../models/User");
const Settings = require("../../models/Settings"); // For initial user setup

// @route GET api/users/test
// @desc Tests users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "users test" }));

// @route   POST api/users/register
// @desc    Register new user
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "An account has already been created using this email";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });

      // bcrypt password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save() // save user to mongo
            .then(user => {
              // create initial settings for new user
              const initSettings = new Settings({ user });
              // initSettings.laborType.push({ test: "test" });
              // console.log(initSettings);
              initSettings.save().catch(err => console.log(err));
              res.json(user);
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   POST api/users/login
// @desc    Login an existing user
// @access  Public

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;

  // Find the use by email
  User.findOne({ email }).then(user => {
    // if the use is not found
    if (!user) {
      errors.email = "No user has been found with that email.";
      return res.status(404).json(errors);
    }

    // Check password if use found
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // password matched, create JWT payload
        const payload = {
          id: user.id,
          email: user.email
        };
        // sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 14400 },
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`
            });
          }
        );
      } else {
        errors.password = "Incorrect Password.";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route  GET api/users/check-auth
// @desc   Check that user is logged in
// @access Private

router.get(
  "/check-auth",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email
    });
  }
);

module.exports = router;
