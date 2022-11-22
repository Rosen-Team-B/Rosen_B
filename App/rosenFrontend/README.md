This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is the README for the frontend.

# Dependencies to Install Before Running the App
- NPM
- Docker: Running will require the installation of Docker desktop: https://www.docker.com/products/docker-desktop/

# Running the App
### Dependencies
### `cd App` 
### `cd rosenFronted`

Use the two command in terminal to navigate to frontend. 
### `npm install`
This command will install or reinstall dependencies listed in the package.json file.
Please use this command after fetching or pulling from the remote branches.  

WARNING: Do not edit the package-lock.json file.

### Docker
### `cd App`

Use this command in terminal to navigate to the App for both frontend and backend.

### `docker-compose build`

This will build the container and install all dependencies. Run this command when docker desktop is active.

### `docker-compose up`

Actives container go to http://localhost:3000/ for frontend app

### `ctrl + c`
This will stop the container from running.