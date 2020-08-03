const inquirer = require('inquirer');

const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Title',
        message: 'What is the title of the ReadMe? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter a title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description. (Required)',
        validate: GitInput => {
            if (GitInput) {
              return true;
            } else {
              console.log('Please enter a Description!');
              return false;
            }
          }
      },
      {
        type: 'confirm',
        name: 'confirmToC',
        message: 'Would you like to enter some headers for a table of contents?',
        default: true
      },
      {
        type: 'input',
        name: 'ToCHeaders',
        message: 'Please enter headers for table of contents:',
        when: ({ confirmToC }) => confirmToC
      }
    ]);
  };

questions()

  // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
