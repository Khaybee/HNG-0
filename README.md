# Public API for Basic Information

This repository contains a simple public API that provides basic information such as:
- A registered email address (used to register on the HNG12 Slack workspace).
- The current datetime as an ISO 8601 formatted timestamp.
- The GitHub URL of the project's codebase.

## Technology Stack

- **Programming Language/Framework**: JavaScript/TypeScript (Node.js with Express)
- **Deployment**: Deployed to a publicly accessible endpoint (Render)
- **CORS Handling**: The API handles Cross-Origin Resource Sharing (CORS) appropriately.

## Setup Instructions

### Prerequisites

Before running the project locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:

   git clone https://github.com/Khaybee/HNG-0.git

   cd your-repo

2. Install the dependencies:

npm install

3. To run the project locally in development mode:

npm run dev

4. To build and run the project in production mode:

npm run start

Deployment

To deploy the API, follow the steps provided by the platform you're using (e.g., Heroku, Vercel, Render etc).