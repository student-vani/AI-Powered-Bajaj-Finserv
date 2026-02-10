# Check for /health

 <a href="https://ai-powered-bajaj-finserv.vercel.app/health"><strong>➥ Live Demo</strong></a>

 
# 🚀 BFHL API – Chitkara University Qualifier

A production-ready REST API developed for **Qualifier 1 (BFHL)** at **Chitkara University**.
This project demonstrates clean backend architecture, strict API contracts, robust validation, and safe external AI integration.

---

## 📌 Overview

This API provides endpoints to perform mathematical computations and handle AI-based queries.
The implementation strictly follows the response format, validation rules, and error-handling guidelines defined in the qualifier problem statement.

---

## 🛠 Tech Stack

* Node.js
* Express.js
* Axios
* Google Gemini API
* dotenv

---



---

## 🔐 Environment Setup

Create a `.env` file in the root directory and add:

PORT=3000
GEMINI_API_KEY=YOUR_GEMINI_API_KEY

The `.env` file is excluded from version control for security reasons.

---

## ▶️ Run Locally

Install dependencies and start the server:

npm install
npm start

Server runs at:
[http://localhost:3000](http://localhost:3000)

---

## 🔍 API Endpoints

### GET /health

Health check endpoint to verify API availability.

Response:

* is_success: true
* official_email: [Sujal1299.be23@chitkara.edu.in](mailto:Sujal1299.be23@chitkara.edu.in)

---

### POST /bfhl

Each request must contain **exactly one key**.

Supported keys:

* fibonacci → Integer input, returns Fibonacci series
* prime → Integer array, returns prime numbers
* lcm → Integer array, returns LCM
* hcf → Integer array, returns HCF
* AI → String input, returns AI-generated response

---

## 📘 Example Use Cases

Fibonacci request returns a Fibonacci series up to the given number.

Prime request filters and returns only prime numbers from the input array.

LCM and HCF requests return the respective computed values.

AI request processes a natural language query and returns a concise response.
If the external AI service is unavailable, the API safely returns `"Unavailable"` without failing.

---

## 🧠 Key Features

* Strict request validation (only one key allowed per request)
* Proper HTTP status codes
* Graceful error handling
* External AI integration with fallback support
* Clean, modular, and production-ready architecture

---

## 🚀 Deployment

The API is designed to be deployed on platforms such as Render, Railway, or Vercel.
Once deployed, endpoints can be tested using Postman or cURL exactly as in local testing.

---

## 👨‍💻 Author

Sujal
B.E. Computer Science Engineering
Chitkara University
Email: [Sujal1299.be23@chitkara.edu.in](mailto:Sujal1299.be23@chitkara.edu.in)

---

## ⭐ Final Note

This project focuses on correctness, reliability, and clean backend practices, fully aligned with the evaluation criteria of the BFHL qualifier.

---


