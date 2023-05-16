# Week 8 Status Report

## Team Report

1. Last Week's Agenda

    - (Pasted from last week) Front end will fully implement use of user data including milestone tracking. Front end will also implement more of the UI design in parallel. Front end will also make question loading more dynamic. Back end will create a cloud MongoDB store for persistent user and content data. Back end will also expand the test suite to cover endpoints as well as data storage. Content will also be expanded, perhaps by templating, but this could be pushed to week after next depending on completion of other tasks.

2. Progress

    - 


3. Next Week's Agenda

    - 

## Team Member Contributions

1. Last Week's Agenda

    - JP Gabriel: Produce more UI designs for other small components for the project. Will look into creating a dark mode version for UI in preparation for our stretch goal.

    - Jason Gao: Still need to implement persistent storage of user data. Will either use relational DB or collaborate with Winston to store user information in a MongoDB instance. Look into testing the API provided by the backend Express server.

    - Jason Xu: Work on homepage and make sure it follows the styling from the Figma. Also potentially will work on styling the sign up and login pages.

    - Jason Hua: Implement UI design to fit on laptops instead of only on monitors with high resolutions. Make fetch requests able to grab any of the json's from backend rather than a hard coded URL. 

    - Evan Kim: Work on creating a functioning menu as a landing page after user login to select a lesson to learn.

    - Winston Bullen: Port the content to MongoDB. Since content was finished early enough, the stretch goal of having content being served on a cloud database can be done. This involves working with the back end and adding such a service to the existing architecture.


2. Progress

    - JP Gabriel: 

    - Jason Gao: 

    - Jason Xu: 

    - Jason Hua: Fetch requests are now able to grab from any of the json's rather than being hard coded. Also added functionality to some frontend components(Close button). 

    - Evan Kim: Updated app page navigation to operate without reloading the page and also edited questions to recieve information about the lesson unit and difficulty through props. 

    - Winston Bullen: Refactored the front end testing architecture to be more consistent with back end. Cleaned up front end styling and contributed to fixing the front end tests. Wrote developer and user documentation. Created the persistent MongoDB Atlas instance and adjusted backend code and tests accordingly.

3. Next Week's Agenda

    - JP Gabriel: 

    - Jason Gao: 

    - Jason Xu: 

    - Jason Hua: Add more functionality to front end components, such as next button only being able to be clicked when answering a question at least once. Attempt to implement solutions for questions after answering.

    - Evan Kim: add frontend logic to handle when questions are completed and track lesson progression. reach goal: add a baby shark animated to the home page.

    - Winston Bullen: Implement content templating so details of questions are randomized. This means questions pull from a bank of variable names to make content more unique. Assist team in finishing app logic and responding to peer review feedback.
