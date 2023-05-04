# Week 6 Status Report

## Team Report

1. Last Week's Agenda

    - (Pasted from last week) Next week will include multiple individual contributions. For front end, the team is going to be working on implementing all of the question templates and components. Likewise, we will also have a preliminary design done for UI that the front end team will reference once the component functionality is completed. Content will also start being written that the front end team will utilize in the form of static fake data. The backend team will begin implementation of the infrastructure mentioned in living doc.

2. Progress

    - Front end finished the basic answer templates and components as intended. Some aspects of the basic UI were also completed in coordination with front end. Content formats were also finalized and are available to be tested by front end. Back end also made significant progress. This includes the skeleton functions for user data. Both front end and back end also set up the testing infrastructure including CI/CD. 


3. Next Week's Agenda

    - Front end will finalize the initial templates and components. The UI will also be edited and completed according to team feedback. Content will be finished as well, including all difficulty levels for every language and subject. Back end will finish all endpoints including both user and content interfaces. The whole team will then convene to launch and internally test the alpha release.

## Team Member Contributions

1. Last Week's Agenda

    - JP Gabriel: Develop UI design for content and login. Create a skeleton for user login and add a database for storing user accounts.

    - Jason Gao: Design the API for clients to receive content and authenticate and implement it in Node. Write interfaces and basic classes including the interface between the business layer and database layer.

    - Jason Xu: Programming other components (Drag and Drag + Short Answer) with Jason Hua and Evan.

    - Jason Hua: Finish question design components such as drag and drop and short answer questions. Develop a UI Design for all questions

    - Evan Kim: Working on finishing front end question components (drag and drop + short answer). Work on question submit/verify answer logic.

    - Winston Bullen: Draft several versions of these json files to start skeleton testing. This ensures the format is adequate for front end. Once the format is finalized, draft the rest of the content for release.


2. Progress

    - JP Gabriel: Developed UI design drag and drop, multiple choice, and short answer. Created a skeleton for user login that stored an encrypted password using bcrypt to mongoDB.

    - Jason Gao: Ported JP's login and signup implementation from JS to TS. Wrote interface for user info database adapter and implemented a simple in-memory store for user login info. Set up Jest with TS (with `ts-jest`) for backend testing, wrote simple tests for the in-memory store. Added handling for user sessions and basic authentication through `express-session`. Adjusted starter Node.js Actions template to work for our repository, and set it up to run backend tests.

    - Jason Xu: Short answer component completed, with general style changes. Helped implement CI for frontend with Jason Hua and Evan.

    - Jason Hua: Short answer component completed, styling for multiple choice was updated. Implemented CI for frontend using github action

    - Evan Kim: Basic question components completed, some styling was done as well. Finished pro-con matrix on living doc for CI/CL frameworks.

    - Winston Bullen: Drafted and finalized the json formats for content. Currently have at least one question per  subject per question type for Java. The only subject currently incomplete is algorithms due to the difficult nature of algorithms content (to be discussed).

3. Next Week's Agenda

    - JP Gabriel: Develop UI for other website pages such as login, homepage, and level page. Will edit current UI designs to changes suggested by the team.

    - Jason Gao: Create content endpoint(s) to deliver question content to the front end app. Implement persistent storage for user information. Deliver the front end app's actual page content to user.

    - Jason Xu: Finalize UI design and front end components with Jason Hua and Evan. Help the team with alpha release.

    - Jason Hua: Update UI design of components. Establish a connection between frontend and backend. 

    - Evan Kim: Incorporate UI design to components and pages. Flesh out question answer verification logic.

    - Winston Bullen: Finalize the algorithms content formats, possibly replace with a different subject depending on team feedback. Then, add more questions for all categories at variable difficulty levels. Then, copy these over to Python editing prompts and answers accordingly.
