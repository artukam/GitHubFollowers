# Quick start repo
## Intro
This is a quick start repo created for my own private use.  The settings for this repo are mostly the default settings found in the create-react-app modules (current as of September 2017).  The purpose of this repo is to create a quick start setting that would allow me to proto-type apps and features without the need to set up, configure and customize the React environment.

This repo is not to be used to extensive and large apps (you should configure webpack specifically for a larger project).

## Installation
### Install dependencies
To install base dependencies, run `npm install` to install node_modules.

### Update required fields
Update the package.json file field "name" to the new name of the folder that you have used this quick start repo.

### Start server
To start server, simply run `npm start`.

## Features
### General Styling
Twitter Bootstrap has been applied to general styling (reset and normalize).  This has been installed as a module and imported on the index.js level.  For individual styling, create a css file for each component and import it into that specific component for use.

### Redux
Redux has been added to this app with default state set to blank and no actions included.
