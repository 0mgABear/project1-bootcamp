# Rocket Academy Coding Bootcamp: Project 1: Frontend App (By Yeo Yi)

https://bc.rocketacademy.co/1-frontend/1.p-frontend-app

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

# User Stories:

Who will want to use this?

1. People looking for a quick game to play. ( <5 mins, browser / phone.)
2. Anyone learning how to code can use this as a form of guide / inspiration!
3. Future botocamp students (of Rocket maybe?) looking for ideas for their Frontend Project 1!

# Step 1 : Creating the board / grid (the base for tic tac toe)

a. Create a row with 3 boxes
b. Replicate 3 of such rows/columns to form the grid.
c. Iteration 1: Boxes are created using divs
d. Removing the borders (using CSS) to create a borderless grid.

# Step 2: capturing the clicks / events for each cell.

a. Creat a click event that is able to track which cell we are clicking

# Step 3: Basic Game Logic and Game State

a. Check if current player turn is "X" or "O". (alternate between the two)
b. vary input based on player turn (stored in state)

# Step 4: Checking for winner and declaration of winner

a. Simplest way to declare a winner: using a status
b. Consider using some form of animation (like a strikethroug across the winning tiles)

# Step 5: Other Features

a. Game Reset - Implemented Using Conditional Rendering
