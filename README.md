BFHL API

A simple REST API built for the Bajaj Finserv Health Limited (BFHL) assessment. The API accepts an array of inputs and returns categorized results such as even numbers, odd numbers, and uppercase alphabets, along with basic user details.

Features

Accepts an array of strings, numbers, and alphabets.

Separates even numbers and odd numbers.

Converts alphabets to uppercase.

Returns user details (status, user ID, email, college roll number).

Built with Node.js + Express.

Hosted on Vercel.

API Endpoint

POST /

Example Request
{
  "data": ["a", "1", "334", "4", "R"]
}

Example Response
{
  "status": true,
  "user_id": "your_name_ddmmyyyy",
  "email_id": "your_email@domain.com",
  "college_roll_number": "your_roll_number",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"]
}

Tech Stack

Node.js

Express.js

Vercel (Deployment)

Installation (Local Setup)

Clone the repository:

git clone https://github.com/nikhilmehlan/BFHL-API.git
cd BFHL-API


Install dependencies:

npm install


Run the server:

npm start


The API will run at http://localhost:3000.

Deployment

This project is deployed using Vercel. After linking the repository, Vercel automatically builds and hosts the project.

Author

Nikhil Mehlan
