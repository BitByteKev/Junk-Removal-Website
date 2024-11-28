import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define Schema and Model
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Form = mongoose.model("Form", formSchema);

// Connect to MongoDB
const PORT = 1000;

mongoose
  .connect("mongodb://localhost:27017/contact-form", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server only after successful database connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Routes
app.post("/submit-form", async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(201).send("Form submitted successfully!");
  } catch (error) {
    res.status(500).send("Error saving form data");
  }
});
