

## 📌 Project Description

A simple **REST API** built with **Node.js and Express**, deployed on **Vercel**. The API accepts an array and returns user details along with separated arrays of **even numbers**, **odd numbers**, and **uppercase alphabets**.

---

## 📖 README.md

```
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
```

.
├── api
│   └── index.js   # Main API route
├── package.json
└── README.md

```

---

## ▶️ API Endpoint
Base URL (after deployment on Vercel):
```
https://bajaj-api-phi.vercel.app/bfhl


````

### 🔹 POST `/`
**Request Body Example:**
```
{
  "data": ["a", "1", "334", "4", "R"]
}
````

**Response Example:**

```
{
  "status": "success",
  "user_id": "12345",
  "email": "example@email.com",
  "college_roll_number": "21BCS1234",
  "even_numbers": ["4"],
  "odd_numbers": ["1", "334"],
  "alphabets_uppercase": ["A", "R"]
}
```

---

## ▶️ Run Locally

1. Clone the repository:

   ```
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the server:

   ```
   node index.js
   ```

4. Test API locally using **Postman** or **cURL**:

   ```
   curl -X POST http://localhost:3000/api \
   -H "Content-Type: application/json" \
   -d '{"data":["a","1","334","4","R"]}'
   ```

---

## 🚀 Deployment on Vercel

1. Install Vercel CLI:

   ```
   npm i -g vercel
   ```
2. Deploy project:

   ```
   vercel
   ```

---

## 📌 Author

👨‍💻 Developed by **Nikhil Mehlan**
🚀 Passionate Full-Stack Developer | MERN Enthusiast

