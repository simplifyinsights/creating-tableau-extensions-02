# Creating Tableau Extensions

This repository is for our Skeleton project with all the associated files.

- HTML - Skeleton HTML File
- CSS - Cascading Style Sheet
- JavaScript - For application logic
- gulpfile.js - For Build Automation
- package.json - For Dependancy Management and Build
- manifest.trex - Tableau Extension Manifest File for usage details

# Build

Using Command Prompt, navigate to your desired directory and run the following command to clone this repository:

`git clone https://github.com/tableaumagic/creating-tableau-extensions-02.git`

Navigate to the newly created directly and execute the following command to install the required dependencies:

`npm install`

In the same project directory, execute the following yarn command to retrieve your project libraries:

`yarn install`

In the same project directory, execute the following gulp command to build your project:

`gulp build:all`

Lastly, navigate to the dist directory and execute the following command to launch your http server:

`http-server`

At this point, you should now be able to load our Tableau Extension into Tableau Desktop
