const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SettingsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  laborTypes: [
    {
      // laborTypeId: {
      //   type: Schema.Types.ObjectId
      // },
      laborTypeName: { type: String }
    }
  ]
});

SettingsSchema.pre("save", function(next) {
  if (this.laborTypes.length === 0) {
    this.laborTypes.push({
      // laborTypeId: new mongoose.Types.ObjectId(),
      laborTypeName: "Regular"
    });
  }
  next();
});

module.exports = Settings = mongoose.model("settings", SettingsSchema);

// laborTypes: {
//   type: Schema.Types.Mixed,
//   default: [
//     {
//       laborTypeId: new mongoose.Types.ObjectId(),
//       laborTypeName: "Regular"
//     }
//   ]
// }

// type: Array,
// required: true,
// default: ["Regular"]
