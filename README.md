# GitHub Followers
GitHub: https://github.com/artukam/GitHubFollowers  
Deployed link: https://ak-githubfollowers.herokuapp.com/  

## Installation  

* This application has been created using the ReactJS/Redux/HTML/CSS stack.
* To run this app locally:
	* Clone this repository using `git clone https://github.com/artukam/GitHubFollowers.git` or by downloading this from the GitHub page.
	* Download and install all the dependencies using `npm install`.
	* Start the application by using `npm start`.

## Overview 

GitHub Followers is an application designed to allow users to search through GitHub for a user and return a list of followers for that given user.  This is done by making a request to the GitHub v3 API to retrieve a user and then a second request to retrieve the followers of that given user.

It must be noted that this application/design has a few drawbacks:

* GitHub's API only allows around 60 API calls per hour.
* Certain users have many followers (such as defunkt who has over 10,000 followers) and as such the API call only returns 100 users max for each call.

Given the drawbacks, this application was designed to make the fewest API calls required for each search result.

## Features implemented
Features implemented on the current build of the application are:

* The 'search' feature that allows a user to return information for a given user and a list of their followers.
* The 'see more users' feature that allows a user to retrieve additional followers if all the followers of a given user were not displayed.
* Search results are stored in a Redux cache for quick rendering, this will also persist on user refresh (if you refresh the page, the results will stay).

## Technology stack
Since this application relies on the GitHub API for the back-end, we only needed to design the front-end of the application.

The application was made using ReactJS as the front-end framework using Redux to control state.

ReactJS was chosen because the application could be separated into components meaning not everything on a given page had to be re-rendered when the user transitioned from one page to another.  For example, where are user wanted to retrieve more followers for a given search result, only the new followers needed to be rendered on the page.

Redux was chosen because it pairs naturally with ReactJS for controlling state (and keeping code clean).

## Design and architecture
This application can be broken down to two screens.  The first is the initial search page which has been designed to mimic a search engine (such as Google/Bing) - this makes the UI intuitive to use for a user as it will feel familiar.  The second is the results page after a search has been returned.  The results page has been designed simply to display the results in the main page area while a navigation bar at the top provides an option for a user to make an additional searches without having to return to the main page.

The UX flow for the user was planned as follows:  
* A user will make a search request on the main page.
* A user will be taken to the results page where they can see information about a given user (or an error page if the user is not found).
* A user will be able to click to see more followers if that search result does not display all followers.
* If the user wants to make a new search, they can do so by using the search bar at the top of the results page without having to return to the main page.

The application was programmed with this flow in mind.  At the top level, the 'App' component handles the routing for the application.  From there, the 'MainPage' component controls the front page view while the 'UserPage' component controls the results page view.  All additional pages/functionalities flow down from this component hierarchy.

## Testing
Given the time constraint for completing this assignment, I decided to forgo component testing (usually done using enzyme.js) as building out the features of the application (and ensuring that there were no errors) took priority.

If you would like examples of test code written using enzyme.js that I have done in the past, please let me know.

## Next steps
If this application was to be developed further, the following steps (ordered by priority) would need to be carried out:

* Implement component testing for all components using enzyme.js.
* Reconfigure redux to cache all search results for a given user to minimise the number of API calls required to be made (this helps cut down on the number of API calls for repeated results).
* Implement a filter and order feature that allows a user to sort through results efficiently.
* Implement more sophisticated follower cards to display more information.
