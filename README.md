
# Hello World

## Description

The application provides a social networking system. It is a full stack application that primarily utilises Node.js, GraphQL, MongoDB/Mongoose and React.

The application has a front end that is built using React and javascript and a back end that is built using Node.js.

The back end database uses MongoDB/Mongoose.

The back end also utilises GraphQL that prioritizes giving clients exactly the data they request and no more. 

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Screenshot](#screenshots)
* [Deployed Version](#deployment)
* [Questions](#questions)
* [To Do](#todo)

## Installation

To install the necessary dependencies.

```
npm i
```

### Setting up the database

To run a seed database

```
npm run seed
```

### Start the application

To strat the application

```
npm run develop
```

## Usage

```md
GIVEN a social network application
WHEN I load the application
THEN I am presented with a homepage with a Login, Signup option on the header
WHEN I click on the Login
THEN I am presented with two inputs for an email address and a password and submit button
WHEN I enter my account’s email address and password and click on the submit button
THEN I the modal closes and I am logged in to the site
WHEN i click on Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a submit button
WHEN I enter a valid email address and create a password and click on the submit button
THEN my user account is created and I am logged in to the site
WHEN I am logged in to the site
THEN the page will shows options to add new post, comments of all post, shows all user's and user friends' post, the header will appear with a searchbar, a Hello World logo, a button option to see profile, and a Logout button
WHEN I am logged in and enter texts in the textarea inside add post componenet and click the submit button
THEN I am presented with an updated post on the home page with the author, date and text content
WHEN I enter texts in the textarea inside add comment componenet and click the submit button
THEN that comment is saved and render inside the post components
WHEN I click on the author in post
THEN I am presented with the author's profile
WHEN I click on the profile option on the header
THEN I am presented with the friend's profile
When I load the friend's profile
THEN I am presented with a "Connected" button, contact email, all friend's posts and friend's friendlist
WHEN I search for a username that are not Connected or not in the user friendlist
THEN I am presented with a profile with a "Connect" button, with no other details
WHEN I click on the "Connect" button
THEN I presented with a "Connected" button instead of "Connect", contact email, posts and friendlist
WHEN I click on the user profile on the header 
Then I will see an updated friendlist
WHEN I click on the Logout button
THEN I am logged out of the site and navigate back to the home page  
```


## Screenshots
![alt Homepage](/homepage-screenshot.JPG)
![alt login](/login-screenshot.JPG)
![alt signup](/signup-screenshot.JPG)
![alt userhomepage](/userhomepage-screenshot.JPG)
![alt profile](/profile-screenshot.JPG)
![alt searchbar](/searchbar-screenshot.JPG)
![alt connect user](/connectuser-screenshot.JPG)
![alt connected user](/connected-screenshot.JPG)

## Deployment

https://shielded-mesa-02928.herokuapp.com/

## Directions for Future Development

Fully implement Stream Chat into the UI

Expand the user model (i.e Profile picture, photos array, personal details)

Improve on CSS
