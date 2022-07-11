# Description
This SPA is a handy GitHub repository search and visualizing tool.

Through the input form on the Homepage it is possible to search a User's or an Organization's repository. 

When inserting the Owner's name followed by the repository's name, the page redirects to a Detailed view.
This view visualizes the number of Subscribers, Stars and Forks of the searched repository.

There is a basic header with the title of the application and a button to navigate to the homepage.

The footer of the application is a component that lists 5 random users and 5 random organizations. Clicking on one of them navigates to a list of the owner repositories.<br>
This list contains the name of the repository and the number of forks and stars. <br>
The listed name also works as a link to the detailed repository's view.

# Instruction

In order to launch the application you need to install the dependencies

> npm install

After it's done you can launch the app with

> npm start

It is also possible to launch the test suite with (note that there are issues with jest if using a node version below the 16 major)

> npm run test

# Notes
While developing, the use of external libraries has been kept to a minimum, expecially rendering libraries. <br>
The only exceptions are Axios and React-router to help with fetching and routing, and react-paginate to avoid implementing a pagination component from scratch.