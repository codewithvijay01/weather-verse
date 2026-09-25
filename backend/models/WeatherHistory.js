const mongoose = require("mongoose");

const weatherHistorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    country: {
      type: String,
      required: true,
      trim: true,
    },

    temperature: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    icon: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const WeatherHistory = mongoose.model("WeatherHistory", weatherHistorySchema);

module.exports = WeatherHistory;
