# Colleague Profile Generator

A Node.js command-line application that generates a webpage displaying profiles for members of a software engineering team.

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Features](#features)
- [Technologies](#technologies)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)

## Description

The Colleague Profile Generator is a Node.js application designed to simplify the process of creating a webpage showcasing the basic information of each member of a software engineering team. 
It prompts the user to input information about the team manager, engineers, and interns via the command line interface. 
The application then generates an HTML file (`team.html`) based on the provided information, complete with predefined templates and styling.

## User Story

As a manager, I want to quickly generate a webpage that displays my team's basic information so that I have quick access to their emails and GitHub profiles.

## Features

- Allows the user to input information for a team manager, engineers, and interns.
- Generates an HTML webpage (`team.html`) containing profiles for each team member.
- Profiles include the member's name, ID, email address, and additional details based on their role (e.g., office number for managers, GitHub username for engineers and school name for interns).

## Technologies Used

- **Node.js:**
- **Inquirer.js:**
- **Jest:**
- **Bootstrap:**
- **Font Awesome:** 
- **HTML/CSS:**

## Demo
![Screenshot of the generated team webpage](./assets/Screenshot%20.JPG)


## Installation

To run the Colleague Profile Generator on your local machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Nickncb96/Colleague-Profile-Generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd colleague-profile-generator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

Once the application is installed, you can generate a team profile by running:

```bash
node index.js
```

Follow the prompts to enter information for each team member. Once you've finished adding team members, the application will generate the HTML file (`team.html`) in the `output` folder.


## Tests

To run the tests for the application, use the following command:

```bash
npm test
```

## Contributing

Contributions to the Colleague Profile Generator are welcome. Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.



In summary this README file provides an overview of the Colleague Profile Generator, including its features, installation instructions, usage guidelines, and more. You can customize it further with additional details or sections specific to your project.

If you have any questions or need further assistance get in contact through github.
