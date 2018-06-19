const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load settings model
const Settings = require("../../models/Settings");

// Load validation
const validateLaborTypeInput = require("../../validation/settings/labor-types");

// @route   GET api/settings/test
// @desc    Tests settings route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "settings test" }));

// @route   GET api/settings/labor-types
// @desc    Gets labor types
// @access  Private
router.get(
  "/labor-types",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Settings.findOne({ user: req.user.id })
      .then(settings => {
        res.json(settings.laborTypes);
      })
      .catch(err => console.log(err));
  }
);

// @route   PUT api/settings/add-labor-type
// @desc    Add new labor type
// @access  Private
router.put(
  "/add-labor-type",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateLaborTypeInput(req.body.laborTypeName);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Settings.findOne({ user: req.user.id }).then(settings => {
      for (let type of settings.laborTypes) {
        console.log(type);
        if (type.laborTypeName === req.body.laborTypeName) {
          errors.laborType = "That labor type already exists";
          return res.status(400).json(errors);
        }
      }
      const newLaborType = {
        laborTypeName: req.body.laborTypeName
      };

      settings.laborTypes.push(newLaborType);

      settings.save().then(settings => res.json(settings.laborTypes));
    });
  }
);

// @route   PUT api/settings/rename-labor-type
// @desc    Rename an existing labor type
// @access  Private
router.put(
  "/rename-labor-type",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateLaborTypeInput(
      req.body.newLaborTypeName
    );

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Settings.findOneAndUpdate(
      { "laborTypes._id": req.body.laborTypeId },
      { $set: { "laborTypes.$.laborTypeName": req.body.newLaborTypeName } },
      { new: true }
    ).then(data => {
      res.json(data.laborTypes);
    });
    // for (let type of data.laborTypes) {
    //   // if (
    //   //   type.laborTypeName.toLowerCase() ===
    //   //   req.body.newLaborTypeName.toLowerCase()
    //   // ) {
    //   //   return res.status(400).json("That name is already in use");
    //   // }

    //   if (type._id == req.body.laborTypeId) {
    //     // const newSettingsData = {
    //     //   laborTypes: [...data.laborTypes]
    //     // };
    //     const newSettingsData = data.laborTypes[req.body.laborTypeId];
    //     console.log(newSettingsData);
    //   }
    // }
  }
);

module.exports = router;
