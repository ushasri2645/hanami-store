# Hanami Store

This is Web App of Hanami Store.

## Features

* Search functionality for products.
* Cart management.
* Can add products to Wishlist. 
* Toast notifications.

## Technologies Used

* React
* TypeScript
* `react-toastify` for notifications
* CSS Modules for styling.

## Installation

### Prerequisites

* Node.js (version 18 or later)
* npm (version 8 or later)

### Set up

1. Clone the repository:
    ```
    git clone https://github.com/ushasri2645/ReactApp/tree/hanami-store-1
    ```

### Run Backend
1. Navigate to the Backend directory:
    ```sh
    cd <repo_name>/Backend
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Run backend with command:
    ```sh
    npm start
    ```
 
### API Endpoints
1. POST Request to create data.
    ```sh
    POST /api/items
    ```

2. GET Request to fetch data.
    ```sh
    GET /api/items
    ```
3. Server runs at:
    ```
    http://localhost:5050/
    ```
4. Example Request.
    ```
    curl http://localhost:5050/api/items
    ```
5. Example response
    ```
    [
    {
        "id": 1,
        "name": "Ethnic Yellow Kurthi",
        "image": "https://img.freepik.com/free-photo/young-attractive-indian-woman-traditional-dress-woman-dancing-against-white-background_1157-48166.jpg",
        "price": 50.29,
        "rating": 4.4,
        "isAvailable": true,
        "isNew": true,
        "offer": 30,
        "sizes": { "S": 0, "M": 0, "L": 1, "XL": 2, "XXL": 3 },
        "description": "A beautiful ethnic yellow kurthi perfect for traditional occasions."
    },
    // ...more items
    ]
    ```

### Run Frontend
1. Navigate to the project directory:
    ```sh
    cd <repo_name>
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Run

1. Start the app:
    ```sh
    npm start
    ```

2. Open browser and go to:
    ```
    http://localhost:3000
    ```

# DEMO

![UI Image](<public/assests/image.png>)