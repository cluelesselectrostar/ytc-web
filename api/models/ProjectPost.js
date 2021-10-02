const mongoose = require("mongoose");

const ProjectPostSchema = new mongoose.Schema(
    {
        title: {
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
        },
        repo: {
            type: String,
            required: false,
        },
        report: {
            type: String,
            required: false,
        },
        date: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("ProjectPost", ProjectPostSchema);
