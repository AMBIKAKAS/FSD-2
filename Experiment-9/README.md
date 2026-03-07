# Experiment – 9

## Implement Authentication using JWT in Flask

### Aim

To implement authentication in a Flask web application using **JSON Web Tokens (JWT)** and **Basic Authentication**.

---

## Theory

Authentication is the process of verifying the identity of a user before allowing access to protected resources in a system.

In this experiment, two authentication techniques are implemented:

### 1. Basic Authentication

Basic Authentication sends the **username and password encoded in Base64 format** in the HTTP header.
The server verifies the credentials before allowing access to the resource.

### 2. JWT Authentication

JWT (JSON Web Token) is a secure method used to transmit information between the client and server as a JSON object.

A JWT token consists of three parts:

* **Header** – Specifies the signing algorithm.
* **Payload** – Contains user information.
* **Signature** – Used to verify that the token is authentic.

When the user logs in successfully, the server generates a JWT token. The client then sends this token in the request header to access protected routes.

---

## Requirements

* Python 3.x
* Flask
* Flask-JWT-Extended
* Postman or Curl

---

## Installation Steps

### Step 1: Create Project Folder

```bash
mkdir experiment9-jwt-auth
cd experiment9-jwt-auth
```

### Step 2: Create Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Dependencies

```bash
pip install flask flask-jwt-extended
```

### Step 4: Run the Application

```bash
python app.py
```

Server will start at:

```
http://127.0.0.1:5000
```

---

## API Endpoints

### 1. Home Route

```
GET /
```

Response:

```
JWT Authentication Experiment Running
```

---

### 2. Basic Authentication Route

```
GET /basic-protected
```

Credentials:

```
Username: admin
Password: admin123
```

Example Curl Command:

```bash
curl -u admin:admin123 http://127.0.0.1:5000/basic-protected
```

---

### 3. JWT Login Route

```
POST /jwt-login
```

Request Body (JSON):

```json
{
"username":"admin",
"password":"admin123"
}
```

Example Curl Command:

```bash
curl -X POST http://127.0.0.1:5000/jwt-login \
-H "Content-Type: application/json" \
-d '{"username":"admin","password":"admin123"}'
```

Response:

```
access_token
```

---

### 4. JWT Protected Route

```
GET /jwt-protected
```

Header:

```
Authorization: Bearer <JWT_TOKEN>
```

Example Curl Command:

```bash
curl http://127.0.0.1:5000/jwt-protected \
-H "Authorization: Bearer <jwt_token>"
```

---

## Output

* Successful authentication using **Basic Authentication**.
* JWT token generated after login.
* Protected routes accessed using **Bearer Token**.

---

## Learning Outcomes

1. Understand the concept of **user authentication** in web applications.
2. Learn how **JWT tokens are generated and verified**.
3. Implement **secure API endpoints using Flask**.
4. Understand how to test APIs using **Postman and Curl**.
5. Learn the difference between **Basic Authentication and Token-based Authentication**.

---

## Conclusion

This experiment demonstrates how authentication can be implemented in Flask applications using both **Basic Authentication and JWT-based authentication**. JWT provides a secure and scalable way to protect APIs and manage user sessions in modern web applications.

<h3>Output</h3>
<img src="screenshots/Screenshot 2026-03-06 at 2.56.50 PM.png" width="600">
<img src="screenshots/Screenshot 2026-03-06 at 2.56.55 PM.png" width="600">
