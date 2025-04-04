const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    secId: { type: String, required: true }, // Unique identifier for the club
    description: { type: String },
    faq: [
        {
            question: { type: String, required: true },
            answer: { type: String, required: true }
        }
    ],
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }], // References event IDs
    announcements: [{ type: mongoose.Schema.Types.ObjectId, ref: "Announcement" }] // References announcement IDs
}, { timestamps: true });

module.exports = mongoose.model("Club", ClubSchema);
