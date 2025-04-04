const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    from: { type: String, required: true }, // Announcer's name or ID
    importance: { type: String, enum: ["Low", "Medium", "High"], required: true },
    venue: { type: String, default: "IIT Gandhinagar" },
    category: { type: String, required: true } 
}, { timestamps: true });

module.exports = mongoose.model("Announcement", AnnouncementSchema);
