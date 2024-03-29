const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema for users
const MessageSchema = new Schema({
  conversation: {
    type: Schema.Types.ObjectId,
    ref: "conversations",
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = Message = mongoose.model("messages", MessageSchema);
