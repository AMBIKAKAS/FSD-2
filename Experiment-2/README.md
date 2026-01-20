--Experiment-2--
Aim:

To design and implement reusable UI design components using React.
UI components are the basic building blocks of any modern web application. This experiment demonstrates the creation of commonly used UI components such as Button, TextField, Select, Rating, and Checkbox using React functional components.

-----------------------------------------------------------------------------
<img src="screenshots/Screenshot 2026-01-20 at 2.27.27 PM.png" alt="Experiment Output" style="width:100%; height:auto;" />


UI Components Architecture

In React, UI components mainly work using the following structure:

1] Component Layer

Each UI element is created as a separate functional component.

Examples:

Button Component

TextField Component

Select Component

Rating Component

Checkbox Component

These components can be reused multiple times by passing different values using props.

2] State Management Layer

State is used to store and manage user interaction data.

Examples:

Text entered in TextField

Selected option in Select

Selected star value in Rating

Checked or unchecked state in Checkbox

React automatically re-renders the UI when the state changes.

3] Event Handling Layer

User actions such as click, change, and select are handled using event listeners.

Examples:

onClick → Button and Rating

onChange → TextField, Select, Checkbox

These events trigger state updates, making the UI interactive.

WORKING FLOW OF UI COMPONENTS

=> Application loads in the browser

=> Main component renders all UI components

=> Button component waits for user click

=> On clicking the button, an event is triggered

=> TextField allows user to enter text

=> Text value is stored in state and updated dynamically

=> Select component displays multiple options

=> User selects an option and state updates instantly

=> Rating component displays stars

=> User clicks on a star and rating value changes visually

=> Checkbox component toggles between checked and unchecked state

=> UI updates dynamically without page reload

=> React efficiently updates only the required components
-----------------------------------------------------------------------------


Learning Outcomes:
Understand the concept of reusable UI components in React.

Learn how props are used to pass data between components.

Gain practical knowledge of state management for handling user input.

Understand how event handling makes UI components interactive.

Develop hands-on experience in building interactive and responsive user interfaces using React.