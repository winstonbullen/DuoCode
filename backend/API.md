# API Specification

### For DuoCode Server

#### `/` - testing endpoint
- Method: `GET`
- returns placeholder text which is different depending on if the user is authenticated

#### `/app` - the app itself
- Method: `GET`
- returns the app's web content!
- Response:
  - 200 - success
  - 401 - user is unauthorized

#### `/signup` - signup endpoint
- Method: `POST`
- Can handle url-encoded form data or JSON body data
- Expects `name` and `password` fields in the request
- Creates an entry in user database w/ username and hashed password
- Response:
  - 201 - Successful account creation
  - 400 - If user already exists

#### `/login` - login endpoint
- Method: `POST`
- Can handle url-encoded form data or JSON body data
- Expects `name` and `password` fields in the request
- Response:
  - 300 - redirect to `/` endpoint, successful authentication
  - 400 - bad information, no account exists

#### `/logout` - logout endpoint
- Method: `GET`
- Tracks the user's session and logs out the session that sends this request
- Response:
  - 300 - redirect to `/` endpoint

#### `/content` - content endpoint
- Method: `GET`
- Serve question JSON content either through static URL path or through route parameters
- Response:
  - 200 - message sucess, body contains JSON
  - 500 - some error ocurred, like requested resource doesn't exist or couldn't be read
- Example requests:
  - `GET /content/java/arrays/drag_drop/1/1`
  - `GET /content/java/arrays/drag_drop/d1_1.json`
- Both examples return the same result, which varies depending on type of question:
```json
{
    "language": "java",
    "subject": "arrays",
    "type": "drag_drop",
    "difficulty": 1,
    "prompt": "Drag and drop the following blocks to create an empty int array of length 8 called myInts.",
    "correct_ordering": ["int[]", "myInts", "=", "new", "int[8]", ";"]
}
```
Note: the first way (route parameters) may be preferable since it is more
flexible to changes in the way that question content is hosted.

#### `/completion` - completion/progress endpoint
- Method: `GET`
  - Retrieve a list with information about which lessons the user has completed
  - Response:
    - 200 - successfuly retrieval of completion information
    - 401 - the user making the request is not authenticated
- Method `POST`
  - Update the progress of the user by specifying a lesson which has been completed,
  adding that lesson to the list of lessons the user has completed.
  - Expects a body with `language`, `subject` fields, and optionally a `level` field.
  If there is no `level` field, it will be treated as the milestone completion for
  that subject
  - Response:
    - 200 - successfully added to list of completed lessons for the user
    - 401 - if the user making the request is not authenticated

#### `/userinfo` - user information endpoint
- Method: `GET`
  - Retrieve information about the current user
  - Response:
    - 200 - Successfully retrieved user information
    - 401 - Requester is not authenticated/logged in
  - Response Content:
    - `JSON` object
    ```json
    { name: "..." }
    ```