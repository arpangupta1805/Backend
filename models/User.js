const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNo: { type: Number, required: true, unique: true }, // this is unique so this will act as user id
    mailId: { 
        type: String, 
        required: true, 
        unique: true, 
        match: [/^[a-zA-Z0-9._%+-]+@iitgn\.ac\.in$/, "Invalid email format"]
    },
    password: { type: String, required: true }, // Hashed password
    notices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notice" }], // Array of Notice IDs
    batch: { type: String, required: true },
    year: { type: Number, required: true },
    role: { type: String, enum: ["Student", "Club Name", "Admin"] }, // Example roles
    clubs: [
        {
            clubName: { type: String, required: true },
            position: { type: String, default: "Jr. Member" },
            joinDate: { type: Date, default: Date.now },
            endDate: { type: Date, default: null }
        }
    ]
});

module.exports = mongoose.model("User", UserSchema);
