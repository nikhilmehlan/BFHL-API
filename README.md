# 🚀 REST API with Node.js, Express & Vercel

## 📌 Description
This project is a simple **REST API** built using **Node.js and Express**, and deployed on **Vercel**.  
It accepts an array via a `POST` request and returns:
- ✅ User ID  
- ✅ Email ID  
- ✅ College Roll Number  
- ✅ Array of Even Numbers  
- ✅ Array of Odd Numbers  
- ✅ Array of Alphabets (converted to Uppercase)  

---

## ⚙️ Tech Stack
- **Node.js**
- **Express.js**
- **Vercel (Deployment)**

---

## 📂 Project Structure
.
├── api
│ └── index.js # Main API route
├── package.json
└── README.md


## ▶️ API Endpoint
https://bajaj-api-phi.vercel.app/bfhl



### 🔹 POST `/`
**Request Body Example:**
{
  "data": ["a", "1", "334", "4", "R"]
}
Response Example:


{
  "status": "success",
  "user_id": "12345",
  "email": "example@email.com",
  "college_roll_number": "21BCS1234",
  "even_numbers": ["4"],
  "odd_numbers": ["1", "334"],
  "alphabets_uppercase": ["A", "R"]
}

▶️ Run Locally
Clone the repository:


git clone https://github.com/your-username/your-repo.git
cd your-repo
Install dependencies:


npm install
Start the server:


npm run dev
Test API locally using Postman or cURL:


curl -X POST http://localhost:3000/api \
-H "Content-Type: application/json" \
-d '{"data":["a","1","334","4","R"]}'

📌 Author
👨‍💻 Developed by Nikhil Mehlan
🚀 Passionate Full-Stack Developer | MERN Enthusiast
