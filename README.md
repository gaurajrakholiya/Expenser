# Khatabook-like Transaction Management System

## Description

This project is a web application inspired by Khatabook, designed to manage customer transactions. Users can view, add, update, and delete transactions for each customer. The application also provides features to download transaction data in CSV format.

## Features

- **Customer Management**: Add, view, update, and delete customer details.
- **Transaction Management**: Add, view, update, and delete transactions for each customer.
- **Transaction Download**: Download transaction data in CSV format.
- **Total Calculations**: Display total amounts for "You Gave" and "You Got" transactions, color-coded for easy identification.
- **Responsive Design**: Works seamlessly across different devices.

## Technologies Used

- **Frontend**: React, React-Bootstrap, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS, Bootstrap

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/khatabook-like-project.git
    cd khatabook-like-project
    ```

2. **Install backend dependencies**:
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies**:
    ```bash
    cd ../frontend
    npm install
    ```

4. **Setup environment variables**:
    - Create a `.env` file in the `backend` directory and add your MongoDB URI and any other required environment variables.
    - Example:
        ```env
        MONGO_URI=mongodb://localhost:27017/khatabook
        PORT=5000
        ```

### Running the Application

1. **Start the backend server**:
    ```bash
    cd backend
    npm start
    ```

2. **Start the frontend development server**:
    ```bash
    cd ../frontend
    npm start
    ```

3. **Access the application**:
    Open your browser and navigate to `http://localhost:3000`
