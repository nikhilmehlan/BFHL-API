const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Replace with your details
const FULL_NAME = "nikhil_mehlan";  // must be lowercase
const DOB = "29082004";        // ddmmyyyy format
const EMAIL = "nikhilmehlan1234@gmail.com";
const ROLL_NUMBER = "22BIT0244";

// Function to check number
function isNumeric(str) {
  return /^\d+$/.test(str);
}

// Function to alternate caps in reverse
function reverseAlternateCaps(str) {
  let res = "";
  let toggle = true; // start with uppercase
  for (let i = str.length - 1; i >= 0; i--) {
    if (/[a-zA-Z]/.test(str[i])) {
      res += toggle ? str[i].toUpperCase() : str[i].toLowerCase();
      toggle = !toggle;
    }
  }
  return res;
}

app.get("/", (req, res) => {
  res.send("BFHL API is running 🚀. Use POST /bfhl");
});


// Route
app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    let even_numbers = [];
    let odd_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;

    data.forEach(item => {
      if (isNumeric(item)) {
        let num = parseInt(item);
        if (num % 2 === 0) even_numbers.push(item);
        else odd_numbers.push(item);
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        special_characters.push(item);
      }
    });

    const concat_string = reverseAlternateCaps(alphabets.join(""));

    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string
    });
  } catch (error) {
    res.status(500).json({ is_success: false, message: "Server error", error: error.message });
  }
});

// Start local server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
