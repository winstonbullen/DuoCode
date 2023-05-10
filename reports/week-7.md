# Week 7 Status Report

## Team Report

1. Last Week's Agenda

    - (Pasted from last week) Front end will finalize the initial templates and components. The UI will also be edited and completed according to team feedback. Content will be finished as well, including all difficulty levels for every language and subject. Back end will finish all endpoints including both user and content interfaces. The whole team will then convene to launch and internally test the alpha release.

2. Progress

    - 


3. Next Week's Agenda

    - 

## Team Member Contributions

1. Last Week's Agenda

    - JP Gabriel: Develop UI for other website pages such as login, homepage, and level page. Will edit current UI designs to changes suggested by the team.

    - Jason Gao: Create content endpoint(s) to deliver question content to the front end app. Implement persistent storage for user information. Deliver the front end app's actual page content to user.

    - Jason Xu: Finalize UI design and front end components with Jason Hua and Evan. Help the team with alpha release.

    - Jason Hua: Update UI design of components. Establish a connection between frontend and backend.

    - Evan Kim: Incorporate UI design to components and pages. Flesh out question answer verification logic.

    - Winston Bullen: Finalize the algorithms content formats, possibly replace with a different subject depending on team feedback. Then, add more questions for all categories at variable difficulty levels. Then, copy these over to Python editing prompts and answers accordingly.


2. Progress

    - JP Gabriel: Developed UI and protopying for other website pages such as login, homepage, and level page. Edited current UI designs to changes suggested by the team. Created script for alpha release demo.

    - Jason Gao: Implemented content endpoint to serve static question content from the backend server. Implemented progress endpoint to to track users' completed lessons. Worked on making the frontend and
    be hosted on the same server, with the backend server serving the built output of the frontend. Integrating the build output of the React app with the backend Express server required special handling since React
    makes some default assumptions about how it will be hosted which aren't true for our project structure.

    - Jason Xu: 

    - Jason Hua: Implemented the use of GET endpoints to grab data from backend and UI designs created by JP for all question types. Helped improve the progress bar to scale depending on how far user is in the level. 

    - Evan Kim: Created a question component that wraps all the question types we have (multiple choice, short answer, and drag and drop). This included a progress bar and next/submit buttons. 

    - Winston Bullen: Finished all content data for the initial releases. This includes both Java and Python having one question per difficulty level for each question type under each subject. Removed algorithms content due to its difficult nature in content representation for this project. Removed file io content due to it being out of place in the curriculum. Contributed to team deliverables and cleaned up the repo/doc.

3. Next Week's Agenda

    - JP Gabriel: Produce more UI designs for other small components for the project. Will look into creating a dark mode version for UI in preparation for our stretch goal.

    - Jason Gao: Still need to implement persistent storage of user data. Will either use relational DB or collaborate with Winston to store user information in a MongoDB instance. Look into testing the API provided by the backend Express server.

    - Jason Xu: 

    - Jason Hua: Implement UI design to fit on laptops instead of only on monitors with high resolutions. Make fetch requests able to grab any of the json's from backend rather than a hard coded URL. 

    - Evan Kim: Work on creating a functioning menu as a landing page after user login to select a lesson to learn.

    - Winston Bullen: Port the content to MongoDB. Since content was finished early enough, the stretch goal of having content being served on a cloud database can be done. This involves working with the back end and adding such a service to the existing architecture.
