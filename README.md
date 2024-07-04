# Dijkstra's Algorithm Shortest Path Project

This project consists of a Node.js with TypeScript backend and a Flutter frontend for calculating the shortest path between two locations using Dijkstra's algorithm. The data is stored in a MongoDB database.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Requirements](#requirements)
4. [Setup](#setup)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
5. [Running the Project](#running-the-project)
   - [Running the Backend](#running-the-backend)
   - [Running the Frontend](#running-the-frontend)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

This project implements Dijkstra's algorithm to find the shortest path between locations stored in a MongoDB database. The backend is built with Node.js and TypeScript, and the frontend is developed using Flutter.

## Features

- Retrieve and display the shortest path between two locations.
- Manage location data within the MongoDB database.
- Provide a user-friendly interface for input and output.

## Requirements

- Node.js (version 14 or above)
- npm (version 6 or above)
- Flutter (version 2.0 or above)
- MongoDB (local or cloud instance)

## Setup

### Backend Setup

1. Clone the backend repository:

   ```bash
   git clone https://github.com/your-username/backend-repo.git
   cd backend-repo
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. Compile the TypeScript code:

   ```bash
   npm run build
   ```

### Frontend Setup

1. Clone the frontend repository:

   ```bash
   git clone https://github.com/your-username/frontend-repo.git
   cd frontend-repo
   ```

2. Install the dependencies:

   ```bash
   flutter pub get
   ```

## Running the Project

### Running the Backend

1. Start the server:

   ```bash
   npm start
   ```

   The backend server should now be running on `http://localhost:3000`.

### Running the Frontend

1. Connect a device or start an emulator.

2. Run the Flutter app:

   ```bash
   flutter run
   ```

   The frontend should now be running on your connected device or emulator.

## Usage

1. Open the Flutter application on your device or emulator.
2. Enter the start and end locations in the input fields.
3. Click the "Calculate" button to retrieve and display the shortest path between the specified locations.

## Contributing

Contributions are welcome! Please create a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
```

Feel free to customize the URLs and any specific instructions as needed.
