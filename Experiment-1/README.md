--Experiment-1--

Aim: To create a basic SPA using react


A Single Page Application (SPA) is a web application that loads only one HTML page and dynamically updates the content without reloading the entire page. This project demonstrates the implementation of a simple SPA using React and React Router DOM.

-------------------------------------------------------------------------------------

<img src="./screenshots /HOME PAGE.png" width="700"/>

<img src="./screenshots /ABOUT PAGE.png" width="700"/>

<img src="./screenshots /CONTACT  PAGE.png" width="700"/>
-->>Architecture of SPA:
SPA mainly works using three layers:

1]Frontend (Client Side)

2]Server (Static File Server)

3]Backend (API Server)

1. Frontend (Client Side)-
Browser loads index.html once

JavaScript takes control

Navigation happens using JavaScript routing

No page reload on route change

2. Static Server (Frontend Server):
Server does not generate pages

 It only serves static files

3. Backend Server (API Server):
Frontend calls backend using:

fetch()

axios

Data exchanged in JSON format

--------------------------------------------------------------------
<img src="./screenshots /architecture.png" width="700"/>

SPA WORKING FLOW:

=>User opens website URL

=>Browser requests index.html

=>Static server sends HTML + CSS + JS

=>SPA is loaded in browser

=>User clicks on link (Home → About)

=>React Router updates URL

=>Required component is rendered

=>No server request for new page

=>Frontend requests data from backend API

=>Backend processes request

=>Database returns data

=>Backend sends JSON response

=>UI updates dynamically

--Learning Outcomes:--

Understood the role of the frontend in rendering user interfaces dynamically in a Single Page Application.

Learned how client-side routing works using React Router to change views without page reloads.

Gained knowledge of how the frontend communicates with backend servers using API requests to fetch dynamic data.

Understood the difference between static frontend resources and dynamic backend data in SPA architecture.

Developed practical understanding of building a responsive and interactive Single Page Application using modern frontend technologies.

