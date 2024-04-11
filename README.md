# Fullstack TodoList

This is a simple TodoList application built using HTML, Tailwind CSS, JavaScript, EJS, Node.js, Express, and MongoDB. It allows users to manage their tasks by adding, editing, marking as complete, and deleting todos.

## Features

- Add new todos
- Edit existing todos
- Mark todos as complete
- Delete todos

## Technologies Used

- HTML: Used for structuring the frontend of the application.
- Tailwind CSS: Utilized for styling the user interface with pre-built utility classes.
- JavaScript: Used for client-side interactivity and logic.
- EJS (Embedded JavaScript): Used for generating dynamic HTML content on the server-side.
- Node.js: Used as the JavaScript runtime environment.
- Express.js: Used as the web application framework for Node.js to handle routing and middleware.
- MongoDB: Used as the NoSQL database for storing todo data.

## Setup Instructions

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up MongoDB database (local or cloud-based) and update the connection string in the `config.js` file.
4. Start the server: `npm start`
5. Visit `http://localhost:8080` in your web browser to access the application.

## Folder Structure

- `public/`: Contains static assets like CSS and client-side JavaScript.
- `views/`: Contains EJS templates for rendering HTML pages.
- `routes/`: Contains Express route handlers.
- `models/`: Contains MongoDB schema definitions.
- `app.js`: Main entry point of the application.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests if you have any suggestions, bug fixes, or feature enhancements.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code for your own purposes.
