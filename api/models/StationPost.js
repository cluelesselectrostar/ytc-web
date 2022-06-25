const mongoose = require("mongoose");

const StationPostSchema = new mongoose.Schema(
    {
        station_ID: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("StationPost", StationPostSchema);
