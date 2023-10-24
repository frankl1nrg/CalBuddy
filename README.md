# CalBuddy App

## Description

A mobile calendar app that consolidates all the SMSU events in one place, among other features. Full project documentation can be found in [Notion](https://smsu-calendar-app.notion.site/)

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Ionic CLI](https://ionicframework.com/docs/cli)
- [Angular CLI](https://cli.angular.io/)
- A preferred package manager: [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)
- [AWS Amplify CLI](https://docs.amplify.aws/cli/start/install/#install-the-amplify-cli)
- AWS Amplify Access Keys (DO NOT SHARE)

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/frankl1nrg/CalBuddy.git
   
2. Navigate to the project directory:
   ```bash
   cd CalBuddy

3. Install the dependencies
   ```bash
   npm install

4. [Configure your AWS Amplify Environment](https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli) - (One-time step if haven't done before)
   ```bash
   amplify configure

5. Pull the latest backend config
   ```bash
   amplify pull

### Running the app
1. Serve the app
   ```bash
   ionic serve
   
  This will open a new browser window/tab with the app running.
