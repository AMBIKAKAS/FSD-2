# Experiment-20: Implementation of CI/CD Pipeline for Full Stack Application Deployment

## 1. Objective

The objective of this experiment is to design and implement a Continuous Integration and Continuous Deployment (CI/CD) pipeline for a full-stack application. The application consists of a backend developed using Flask and a frontend developed using React. The deployment process is automated using Docker and GitHub Actions.

---

## 2. Technologies Used

* Python (Flask)
* JavaScript (React)
* Docker
* Git and GitHub
* GitHub Actions (CI/CD)

---


## 4. Backend Implementation (Flask)

### 4.1 Application Development

* A simple Flask application was developed.
* The server runs on port 5000 and responds with a basic message.

**app.py**

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello from Backend"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

---

### 4.2 Dependency Management

A `requirements.txt` file was generated to manage dependencies.

```bash
pip install flask
pip freeze > requirements.txt
```

---

### 4.3 Dockerization of Backend

A Dockerfile was created to containerize the Flask application.

**Dockerfile (Backend)**

```dockerfile
FROM python:3.11

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["python", "app.py"]
```

---

### 4.4 Backend Execution

```bash
docker build -t flask-backend .
docker run -d -p 5005:5000 --name backend-container flask-backend
```

---

## 5. Frontend Implementation (React)

### 5.1 Application Development

* A React application was created using Create React App.
* A simple UI was implemented to display a success message.

**App.js**

```javascript
function App() {
  return (
    <div>
      <h1>Frontend Running Successfully</h1>
      <p>This is a React application running inside Docker.</p>
    </div>
  );
}

export default App;
```

---

### 5.2 Dockerization of Frontend

A Dockerfile was created for the React application.

**Dockerfile (Frontend)**

```dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

---

### 5.3 Frontend Execution

```bash
docker build -t react-frontend .
docker run -d -p 3000:3000 --name frontend-container react-frontend
```

---

## 6. CI/CD Pipeline using GitHub Actions

### 6.1 Workflow File

A workflow file (`ci-cd.yml`) was created to automate the build process for both backend and frontend.

### 6.2 Workflow Configuration

```yaml
name: Experiment-20 CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  backend-build:
    runs-on: ubuntu-latest

    defaults:
      run:
        working-directory: ./Experiment-20/backend

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'

      - name: Install Backend Dependencies
        run: pip install -r requirements.txt

      - name: Build Backend Docker Image
        run: docker build -t experiment20-backend .

      - name: Verify Backend Image
        run: docker images

  frontend-build:
    runs-on: ubuntu-latest

    defaults:
      run:
        working-directory: ./Experiment-20/frontend

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install Frontend Dependencies
        run: npm install

      - name: Build Frontend Docker Image
        run: docker build -t experiment20-frontend .

      - name: Verify Frontend Image
        run: docker images
```

---

## 7. Working of CI/CD Pipeline

* The pipeline is triggered on every push to the main branch.
* It consists of two parallel jobs:

  * Backend Build Job
  * Frontend Build Job
* Each job installs dependencies and builds Docker images.
* Docker images are verified to ensure successful builds.

---

## 8. Results

* Backend application successfully containerized and executed.
* Frontend application successfully containerized and executed.
* CI/CD pipeline successfully automated the build process.
* GitHub Actions executed both jobs without errors.

---

## 9. Screenshots

The following screenshots should be included:

1. Docker image creation (`docker images`)
2. Running containers (`docker ps`)
3. Successful GitHub Actions workflow (green status)

---

## 10. Conclusion

This experiment demonstrates the implementation of a complete CI/CD pipeline for a full-stack application. By integrating Docker with GitHub Actions, the deployment process becomes automated, efficient, and reliable. The separation of backend and frontend components improves scalability and maintainability.

---



Ambika Kashyap
![alt text](<screenshots/Screenshot 2026-04-22 at 8.01.45 PM.png>)
![alt text](<screenshots/Screenshot 2026-04-22 at 8.12.53 PM.png>)
![alt text](<screenshots/Screenshot 2026-04-22 at 8.18.08 PM.png>)
![alt text](<screenshots/Screenshot 2026-04-22 at 8.43.03 PM.png>)
![alt text](<screenshots/Screenshot 2026-04-22 at 8.43.22 PM.png>)
![alt text](<screenshots/Screenshot 2026-04-22 at 8.33.08 PM.png>)
![alt text](<screenshots/Screenshot 2026-04-22 at 8.33.24 PM.png>)
![alt text](<screenshots/Screenshot 2026-04-22 at 8.33.36 PM.png>)
![alt text](<screenshots/Screenshot 2026-04-22 at 8.33.46 PM.png>)