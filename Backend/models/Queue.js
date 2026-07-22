const mongoose = require("mongoose");

const queueSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        branch: {
            type: String,
            required: true,
        },
        averageServiceTime: {
            type: Number,
            default: 5, // minutes
        },
        currentToken: {
            type: Number,
            default: 0,
        },
        lastTokenIssued: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            enum: ["OPEN", "CLOSED", "PAUSED"],
            default: "OPEN",
        },
    },
    {
        timestamps: true,
    }
);

const Queue = mongoose.model("Queue", queueSchema);

module.exports = Queue ;
