// TODO: Include packages needed for this application 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js'); // require = importing modules

// modules:
// fs ( file system ) .. already comes with node.js ( Built-in core module)
// inquirer ( interactive command line) verison 8.2.4 ( Thrid-party module )
// How to check what verison of inquirer I have on command line? npm list inquirer


// TODO: Create an array of questions for user input 
// Each question = an object ( so title an object, descriptionan object,etc etc)
const questions = [

{       // Title 
        type: 'input',          // type input .. an input field where user can enter text    
        name: 'title',          // Title Name .. assigns a name to input field  
        message: 'Project Title: What is the main goal/aim of the project?',      // Message that will be displayed to user
        default: 'Name-of-the-Project ... \nDescribe whole project in one sentence.',
},      

{       // Description 
        type: 'input',          
        name: 'description',    // Description Name   
        message: 'Project Description:\n Provide a short description explaining the what, why, and how of your project.',
        default: 'This is where project description will go.\nUse the following questions as a guide:\nWhat was your motivation?\nWhy did you build this project? (Note: the answer is not "Because it was a homework assignment.")\nWhat problem does it solve?\nWhat did you learn?\nWhat makes your project stand out?'      
},

{        // Installation 
        type: 'input',         
        name: 'installation',            
        message: 'Project Installation:\n What are the steps required to install your project?\n Provide a step-by-step description of how to get the development environment running.',  
        default: 'How to install or run project locally?\nProvide step-by-step description',           
},

{        // Usage 
        type: 'input',          
        name: 'usage',          
        message: 'Usage:\n Provide instructions and examples for use.\n Include screenshots as needed.',  
        default: 'Provide instructions/examples so if other users encounter a problem,\nthey can have a place to reference back to.',             
},

{        // Credits 
        type: 'input',          
        name: 'credits',          
        message: 'Credits: \n List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution,\n list the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.',   
        default: 'Did you work with a team or organization?\n List collaborators/team members.\n Include links to their Github profiles & Soical Media.',           
},

{        // License 
        type: 'list',         
        name: 'license',        
        message: 'Select a License From List: ',            
        choices: ['MIT', 'Apache-2.0', 'EPL-2.0', 'MPL-2.0'],
             
        },

{        // Contribution Guidelines 
        type: 'input',         
        name: 'contribution',        
        message: 'Contribution Guidelines: ',  
        default: 'Add guidelines to let other Developers know how to contribute to your project.',           
},

{        // Test Instructions 
        type: 'input',          
        name: 'tests',            
        message: 'Project Test(s) Instructions:\n Go the extra mile and write tests for your application.\n Then provide examples on how to run them here.',  
        default: 'Write tests for your project.\nProvide code examples & how to run them here.',         
},

{        // Features
        type: 'input',          
        name: 'features',        
        message: 'Features:\n If your project has a lot of features,\n list them here.',  
        default: 'N/A',           
},

{        // Questions 
        type: 'input',          
        name: 'questions',          
        message: 'Please Enter Any Other Questions or Concerns:', 
        default: 'N/A',            
},


{        // Github Username 
        type: 'input',                                
        name: 'gitusername',                            
        message: 'Please Enter Your Github Username: ',  
        default: 'pmastropolo',                
},

{        // Github Email 
        type: 'input',                                 // input = text
        name: 'gitemail',                              // name = key/name to store answer
        message: 'Please Enter Your Github Email: ',   // message = displayed
        default: 'amyhytwn@aol.com',                   // default value            
},

];

// TODO: Create a function to write README file 
// Function Write To File:
function writeToFile(fileName, data) {          // function (named writetofile), 2 parameters, filename & data
        fs.writeFile(fileName, data, (err) => { // write file method in fs
                if (err) {                      // checks to see if error
                  console.error(err);           // if there is an error, will show in console
                } else {                        // if no error
                  console.log('AWESOME! You now have a README File!');  // readme has been created, will show message in console
                }
              });
}

// TODO: Create a function to initialize app   
function init() {
        inquirer.prompt(questions).then((answers) => {        // .prompt method..when user answers questions..returns promise for answers
                const readmeContent = generateMarkdown(answers);        
                writeToFile('README.md', readmeContent);      // writes readmeContent to the actual README file
            });
        }

// Function call to initialize app  
init();
