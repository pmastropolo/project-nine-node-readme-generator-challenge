// TODO: Include packages needed for this application (First Part: Starter Code)
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input (Second Part: Starter Code)
const questions = [

{       // Title 

        type: 'input',          // type input .. an input field where user can enter text    
        
        name: 'title',          // Title Name .. assigns a name to input field  
        
        message: 'Project Title: ',      // Message that will be displayed to user

},      


{       // Description 

        type: 'input',          

        name: 'description',    // Description Name   

        message: 'Project Description:\n Provide a short description explaining the what, why, and how of your project.',      

},


{        // Installation 

        type: 'input',         

        name: 'installation',            

        message: 'Project Installation:\n What are the steps required to install your project?\n Provide a step-by-step description of how to get the development environment running.',             

},


{        // Usage 

        type: 'input',          

        name: 'usage',          

        message: 'Usage:\n Provide instructions and examples for use.\n Include screenshots as needed.',              

},


{        // Credits 

        type: 'input',          

        name: 'credits',          

        message: 'Credits: \n List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution,\n list the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.',             

},

{        // License 

        type: 'list',         // type list , so choices to choose from 

        name: 'license',        

        message: 'Select a License:  ',            

        choices: ['MIT', 'Apache-2.0',  'EPL-2.0', 'MPL-2.0', 'LGPL-2.1', 'BSD-3-Clause', 'BSD-2-Clause', 'GPL-2.0', 'CDDL-1.0', 'LGPL-3.0-only', 'LGPL-2.1'],

        badge: true,

},


{        // Contribution Guidelines 

        type: 'input',         

        name: 'contribution',        

        message: 'Contribution Guidelines: ',            

},

{        // Test Instructions 

        type: 'input',          

        name: 'tests',            

        message: 'Project Test(s) Instructions:\n Go the extra mile and write tests for your application.\n Then provide examples on how to run them here.',          

},

{        // Features

        type: 'input',          

        name: 'features',        

        message: 'Features:\n If your project has a lot of features,\n list them here.',            


},

{        // Questions 

        type: 'input',          

        name: 'questions',          

        message: 'Please Enter Any Other Questions: ',            

},


{        // Github Username 

        type: 'input',                                

        name: 'gitusername',                            

        message: 'Please Enter Your Github Username: ',                  

},


{        // Github Email 

        type: 'input',                                 

        name: 'gitemail',                              

        message: 'Please Enter Your Github Email: ',                     

},

];

inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
      });



// TODO: Create a function to write README file (3. Starter Code )
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app (4. Starter Code)   
function init() {}

// Function call to initialize app (5. Starter Code)   
init();