const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json({ limit: "10mb" })); // Handle large base64 images
app.use(require("cors")()); // Enable CORS

const UPLOAD_FOLDER = path.join(__dirname, "uploads");

// Ensure upload folder exists
if (!fs.existsSync(UPLOAD_FOLDER)) {
  fs.mkdirSync(UPLOAD_FOLDER);
}

// Route to handle attendance
app.post("/api/attendance", (req, res) => {
  const { employeeId, image } = req.body;

  // Validate input
  if (!employeeId || !image) {
    return res.status(400).json({ message: "Invalid payload" });
  }

  try {
    // Decode base64 image
    const base64Data = image.split(",")[1]; // Remove the data URL prefix
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `${employeeId}_${timestamp}.png`;
    const filepath = path.join(UPLOAD_FOLDER, filename);

    // Save the image to the file system
    fs.writeFileSync(filepath, Buffer.from(base64Data, "base64"));

    res.status(200).json({
      message: "Attendance marked successfully",
      filename: filename,
    });
  } catch (error) {
    console.error("Error saving image:", error);
    res.status(500).json({ message: "Failed to process the image" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
