API Documentation

Endpoint

* GET api/info

Request Format

No parameters are required for this GET request.

Response Format (200 OK)

The API responds with a JSON object containing the following fields:

{

    "email": "your-email@example.com",

    "current_datetime": "2025-01-30T09:30:00Z",

    "github_url": "https://github.com/yourusername/your-repo"

}

* email: Your email address used for registration.
* current_datetime: The current UTC datetime in ISO 8601 format.
* github_url: The URL of the project's codebase on GitHub.

Example Usage

To get the information locally, send a GET request to the endpoint:


curl localhost:3000/api/info

Backlink:

https://hng.tech/hire/nodejs-developers