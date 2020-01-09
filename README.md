# Coder Evolution

Coder Evolution is a platform for helping keep track of your technology learning progresses.

## Motivation and the Story

As coders, we probably have to read official documentations, from [Stack Overflow](https://stackoverflow.com/) or so everyday. This can be because we happen to have to solve a specific problem or this is just the way a coder evolves. How could coders save ideas that pop up during this solving and learning process? Coder Evolution provides a service which makes it easy for coders to edit, preview and save [Markdown Texts](https://www.markdownguide.org/) where their great ideas live.

## Technology Specifics

1. [Marked.js](https://marked.js.org) provides the functionality that parses strings with Markdown syntaxes. This builds the core displaying, editing and previewing articles functionalities of Coder Evolution. Not like [Github Wiki](https://help.github.com/en/github/building-a-strong-community/documenting-your-project-with-wikis), Coder Evolution allows you to edit and immediately preview your article on the same page, no need to switch between editing and previewing. A even richer and react-friendly text editor is planned to be implemented with the help of [Draft.js](https://draftjs.org/).

2. A group of strings with Markdown syntaxes forms an article. For now, articles are saved on [DynamoDB](https://aws.amazon.com/dynamodb/) of [AWS](https://aws.amazon.com). The current data structure is very simple that is planned to be optimized under certain *NoSQL* principles or best practices, e.g. [Structure Your Database](https://firebase.google.com/docs/database/ios/structure-data) from [Firebase](https://firebase.google.com), especially considering the user authentication and management will be added and the scope of Coder Evolution is becoming bigger and bigger.
![image](https://user-images.githubusercontent.com/23125256/71946087-bd461980-3203-11ea-90e8-b1326b6b8ff9.png)

3. Interacting with the database, like retrieving an article or saving an article is basically fulfilled by the combination of AWS [API Gateway](https://aws.amazon.com/api-gateway/) and [Lambda](https://aws.amazon.com/lambda/). An entire [NodeJS](https://nodejs.org) plus [Express](https://expressjs.com/) server is deployed to Lambda as one function which also borrows help from [AWS SDK for JavaScript](https://www.npmjs.com/package/aws-sdk) and [AWS Serverless Express](https://www.npmjs.com/package/aws-serverless-express). In summary, the API Gateway provides a point for Coder Evolution or users to interact with the backend services because it's a trigger of the Lambda function that for now can perform [CRUD operations](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) on the database.

4. For user authentication and management, AWS [Cognito](https://aws.amazon.com/cognito/) is planned to be implemented. Cognito helps a lot control the privileges that a user could or should have, like which Lambda function he is allowed to call or which part of the database he is permitted to touch.

5. For testing, various [Jest](https://jestjs.io/) technologies will be used but unfortunately the current testing coverage of Coder Evolution is 0%. [Docker](https://www.docker.com/) will help with local deployment capabilities. Tools like [Selenium](https://selenium.dev/) will help with the automation for web/browser application testing.

6. A lot of thanks to [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [Material-UI](https://material-ui.com/) for a good looking UI and the user-frindliness of Coder Evolution.

7. Besides the article section, a code section will be constructed with the help of [CodeMirror](https://codemirror.net/), which tries to help coders play with and share their proud code works.

## Todo Priorities (Issues)

1. Optimize markdown text display especially how code is highlighted.
2. Add adding an article, adding an article list and putting an article into a list functionalities with related database designs and changes.
3. Implement user authentication and management with Cognito to give users needed privileges. This also requires medium to big data structure changes.
4. Add Jest tests for the frontend.
5. Implement local development capabilities using Docker Compose for easier development and testing.

---

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Great thanks with _❤️_ to _@Michael Zhu_, a real expert in EVERYTHING who advises and helps a lot for Coder Evolution~
