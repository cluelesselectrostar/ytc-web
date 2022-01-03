const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema(
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
        markdown: {
            type: String,
            required: true,
        },
        link: {
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

module.exports = mongoose.model("BlogPost", BlogPostSchema);
