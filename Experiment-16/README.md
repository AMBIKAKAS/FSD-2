# Experiment-16: Unit Testing for Frontend and Backend

## Objective

To perform unit testing for backend APIs and frontend components using appropriate testing frameworks and to automate the testing process using GitHub Actions.

---

## Technologies Used

### Backend

* Python
* Flask
* Pytest

### Frontend

* JavaScript
* Vitest

### CI/CD

* GitHub Actions

---

## Project Structure

```
Experiment-16/
│
├── backend-testing/
│   ├── app.py
│   ├── test_app.py
│
├── frontend-testing/
│   ├── test.js
│   ├── package.json
│
├── README.md
```

---

## Backend Testing

### Command to Run Tests

```
cd backend-testing
python3 -m pytest
```

### Description

Backend APIs are tested using Pytest. The tests validate API responses and ensure that the server-side logic functions correctly.

---

## Frontend Testing

### Command to Run Tests

```
cd frontend-testing
npx vitest run
```

### Description

Frontend components and logic are tested using Vitest. The tests verify form validation and expected UI behavior.

---

## CI/CD Integration

A continuous integration pipeline has been implemented using GitHub Actions. The workflow automatically runs backend and frontend tests on every push.

### Workflow Process

* Set up Python environment
* Install backend dependencies
* Execute backend tests using Pytest
* Set up Node.js environment
* Install frontend dependencies
* Execute frontend tests using Vitest

---

## Results

* Backend tests executed successfully
* Frontend tests executed successfully
* GitHub Actions workflow completed without errors

---



## Conclusion

This experiment demonstrates the implementation of unit testing for both frontend and backend modules along with automation using CI/CD. It improves code reliability, reduces manual testing effort, and ensures consistent application behavior.
![alt text](<SCREENSHOTS/Screenshot 2026-04-17 at 7.36.13 PM.png>)
![alt text](<SCREENSHOTS/Screenshot 2026-04-17 at 7.36.35 PM.png>)
![alt text](<SCREENSHOTS/Screenshot 2026-04-17 at 8.42.18 PM.png>)
![alt text](<SCREENSHOTS/Screenshot 2026-04-17 at 8.43.22 PM.png>)
![alt text](<SCREENSHOTS/Screenshot 2026-04-17 at 8.43.55 PM.png>)