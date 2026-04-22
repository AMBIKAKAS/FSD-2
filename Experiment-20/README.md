# Experiment-20: CI/CD Pipeline for Application Deployment

## Objective

To implement a Continuous Integration and Continuous Deployment (CI/CD) pipeline for deploying a backend application using Docker and GitHub Actions.

---

## Tools and Technologies Used

* Node.js
* Express.js
* Docker
* Git and GitHub
* GitHub Actions

---


## Methodology

### 1. Backend Application Setup

* Initialized a Node.js project using:

  ```
  npm init -y
  ```
* Installed required dependencies:

  ```
  npm install express
  ```
* Developed a simple backend server (`server.js`) running on port 3000.

---

### 2. Docker Configuration

* Created a Dockerfile to containerize the application.
* Built the Docker image using:

  ```
  docker build -t experiment20-app .
  ```
* Executed the container using:

  ```
  docker run -d -p 3000:3000 experiment20-app
  ```

---

### 3. CI/CD Pipeline Implementation

* Created a workflow file at:

  ```
  .github/workflows/ci-cd.yml
  ```
* Configured the pipeline to perform the following tasks:

  * Checkout source code
  * Set up Node.js environment
  * Install dependencies
  * Build Docker image
  * Verify Docker image

---

### 4. GitHub Integration

* Pushed the project to a GitHub repository.
* The CI/CD pipeline was automatically triggered on each push to the main branch.

---

## CI/CD Workflow Description

The pipeline is triggered on every push to the main branch and performs the following steps:

1. Checks out the repository code
2. Sets up the Node.js environment
3. Installs project dependencies
4. Builds the Docker image
5. Lists Docker images for verification

---

## Output

* Docker image successfully created
* Application container executed successfully
* CI/CD pipeline executed successfully on GitHub Actions

---

## Screenshots

1. Docker image build output
2. Running container using `docker ps`
3. Successful execution of GitHub Actions workflow

---

## Result

The backend application was successfully containerized using Docker, and a CI/CD pipeline was implemented using GitHub Actions to automate the build and deployment process.

---

## Conclusion

This experiment demonstrates the implementation of a CI/CD pipeline for automated application deployment. It highlights the integration of Docker with GitHub Actions to streamline development workflows and reduce manual intervention.

---



Ambika Kashyap

![alt text](<Screenshots/Screenshot 2026-04-22 at 3.44.14 PM.png>)
![alt text](<Screenshots/Screenshot 2026-04-22 at 3.41.08 PM.png>)
![alt text](<Screenshots/Screenshot 2026-04-22 at 3.42.36 PM.png>)
![alt text](<Screenshots/Screenshot 2026-04-22 at 3.43.17 PM.png>)
![alt text](<Screenshots/Screenshot 2026-04-22 at 7.12.57 PM.png>)
![alt text](<Screenshots/Screenshot 2026-04-22 at 7.13.19 PM.png>)
![alt text](<Screenshots/Screenshot 2026-04-22 at 7.13.45 PM.png>)