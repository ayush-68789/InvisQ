const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
    {
        queue: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Queue",
            required: true,
        },
        tokenNumber: {
            type: Number,
            required: true,
        },
        customerName: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
        status: {
            type: String,
            enum: ["WAITING", "CALLED", "COMPLETED", "DEFERRED", "CANCELLED"],
            default: "WAITING",
        },
        reliabilityScore: {
            type: Number,
            default: 80,
        },
        readinessScore: {
            type: Number,
            default: 0,
        },
        latitude: Number,
        longitude: Number,
        lastLocationUpdate: Date,
        estimatedArrival: Number,
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("Token", tokenSchema);
