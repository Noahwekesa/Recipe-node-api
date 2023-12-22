# Delicious Recipes Project

A web application to discover and explore delicious recipes using Node.js, Express, and the Spoonacular API.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Delicious Recipes project is a web application that allows users to discover and explore various recipes. The application is built using Node.js and Express on the server side, and it fetches recipe data from the Spoonacular API.

## Features

- **Search Recipes:** Users can search for recipes based on keywords or ingredients.
- **View Recipe Details:** Detailed information about a specific recipe, including ingredients and instructions.
- **Random Recipes:** Display a set of random recipes for users looking for inspiration.
- **Responsive Design:** The application is designed to work seamlessly on various devices.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Spoonacular API Key](https://spoonacular.com/food-api) obtained.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/noahwekesa/Recipe-node-api.git
   ```

2. Navigate to the project directory:

```bash
cd Recipe-node-api
```

3. Install dependencies:

```bash
npm install
```

4.  Create a .env file in the root of your project and add your Spoonacular API key:

```bash
SPOON_API=YOUR_SPOONACULAR_API_KEY
```

### Usage

1. start server

```bash
node index.js
```

2. Open your browser and visit http://localhost:3000 to access the Delicious Recipes application.

### Project Structure

index.js: Main entry point for the Node.js server.
public: Static assets (e.g., stylesheets, client-side scripts).
views: EJS templates for rendering HTML pages.
.env: Configuration file for environment variables.

### Technologies Used

Node.js
Express
Axios
Spoonacular API
EJS (Embedded JavaScript templating)
