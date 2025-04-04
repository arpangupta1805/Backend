const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    from: { type: String, required: true }, // Organizer or Club ID
    category: { type: String, required: true }, // e.g., "Workshop", "Competition"
    venue: { type: String, required: true },
    faqs: [
        {
            question: { type: String, required: true },
            answer: { type: String, required: true }
        }
    ],
    time: { type: String, required: true },
    registrationLink: { type: String, required: true },
    registrationDeadline: { type: Date, required: true },
    registrationStatus: { type: String, enum: ["Open", "Closed", "Completed"], required: true },
    clubName: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Event", EventSchema);
