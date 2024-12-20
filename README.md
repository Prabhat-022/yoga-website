# Full-Stack E-commerce Website

This is a full-stack e-commerce website built using MERN (MongoDB, Express, React, Node.js) stack. The website allows users to browse products, add products to cart, and checkout. It also includes user authentication and authorization.

## Backend

The backend is built using Node.js and Express framework. It uses MongoDB as the database. The backend provides RESTful APIs for the frontend to interact with.

### APIs

#### User

- POST /api/user/register: Register a new user
- POST /api/user/login: Login a user
- GET /api/user/profile: Get the profile of the logged in user
- PUT /api/user/update-profile: Update the profile of the logged in user
- DELETE /api/user/delete-profile: Delete the profile of the logged in user

#### Product

- GET /api/product: Get all products
- GET /api/product/:id: Get a product by id
- POST /api/product: Create a new product
- PUT /api/product/:id: Update a product
- DELETE /api/product/:id: Delete a product

#### Cart

- GET /api/cart: Get the cart of the logged in user
- POST /api/cart: Add a product to the cart of the logged in user
- PUT /api/cart/:id: Update the quantity of a product in the cart
- DELETE /api/cart/:id: Remove a product from the cart

#### Order

- GET /api/order: Get all orders of the logged in user
- POST /api/order: Create a new order
- GET /api/order/:id: Get an order by id

## Frontend

The frontend is built using React and Redux. It uses React Router for client-side routing. The frontend interacts with the backend using the RESTful APIs provided.

### Features

- User authentication and authorization
- Product listing and detail page
- Cart management
- Order management

## How to run

### Backend

- Install dependencies: `npm install`
- Start the server: `npm start`
- The server will start on port 3000

### Frontend

- Install dependencies: `npm install`
- Start the server: `npm start`
- The server will start on port 3001
- Open the website in the browser: `http://localhost:3001`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
