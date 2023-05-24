# Week 9 Status Report

## Team Report

1. Last Week's Agenda

    - (Pasted from last week) Front end will complete implementation of milestone tracking and associated UI updates for completion. Back end will implement question templating randomization to serve front end. Content will implement question templating to increase the bank of questions dramatically. The entire team will respond to peer review feedback as well.

2. Progress

    - 


3. Next Week's Agenda

    - 

## Team Member Contributions

1. Last Week's Agenda

    - JP Gabriel: Finish styling login and signup to more accurately reflect Figma design. Clean up issues on homepage and update homepage to enable more intended features.

    - Jason Gao: Implement user information deletion on server or explore using MongoDB transactions to have a non-lasting effect on the DB when testing. Take care of other outstanding issues related to the backend. Continue to examine testing the Express app.

    - Jason Xu: Add more functionality with Jason Hua.

    - Jason Hua: Add more functionality to front end components, such as next button only being able to be clicked when answering a question at least once. Attempt to implement solutions for questions after answering.

    - Evan Kim: add frontend logic to handle when questions are completed and track lesson progression. reach goal: add a baby shark animated to the home page.

    - Winston Bullen: Implement content templating so details of questions are randomized. This means questions pull from a bank of variable names to make content more unique. Assist team in finishing app logic and responding to peer review feedback.


2. Progress

    - JP Gabriel: Finished up styling login and signup to more accurately reflect Figma design. Adding password requirements to signup. Changed UI on homepage, specifically the side bar. 

    - Jason Gao: Worked with Winston to remove a memory leak (by using MongoDB as a session store) and improve login/signup flow (by switching to EJS templating instead of sending bare http responses). Added JS/TSDoc style documentation comments to most of the backend code.

    - Jason Xu: Tried some iterations with the drag and drop refresh button and ran into a couple of bugs that I will continue to work on. Made some progress on next button logic but nothing extremely notable.

    - Jason Hua: Solutions button works properly and milestone question format has also been implemented. Also focused on fixing various minor bugs throughout the question component.

    - Evan Kim: Implemented progression tracking on the frontend by connecting to the completions endpoint. Added some logic to prevent duplicates in the completed lessons data. Added comments throughout frontend code.

    - Winston Bullen: Addressed some back end TODOs including adding all environment variables to .env and upgrading the express session. This means back end no longer leaks memory nor exposes secret cookie generation. Decided to postpone content templating to respond to peer review feedback and enhance other features. 

3. Next Week's Agenda

    - JP Gabriel: Working on finishing homepage. Add logout end point to the logout button, revamping UI for homepage, and adding drop-down feature for language choices.

    - Jason Gao: Contribute to overall polish and deliverables, communicate with frontend team members to support their integration of the backend API into the frontend functionality.

    - Jason Xu: Will make sure drag and drop refresh logic is functional and polished. Will collaborate with Jason Hua to get the next logic working in conjunction with solutions button. Adding more tests for front end components and then picking up any other tasks that may need to be done by final release.

    - Jason Hua: Polish remaining bugs that exist in question component. Work on styling for laptops with smaller resolutions. 

    - Evan Kim: Work on styling for different screen sizes and also finish styling the homepage for tracking completion of lessons.

    - Winston Bullen: Assist team in finalizing improvements to user experience and peer review. Polish the final release with the team and complete the final deliverables. 
