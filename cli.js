#!/usr/bin/env node

const [,, ... args] = process.argv

console.log(`arguments ${args}`)

'use strict';
var inquirer = require('inquirer');
var git = require('simple-git');

localBhandler = function(listOfBranches){
    console.log(listOfBranches);
}

var localBranches; 
git().branchLocal(localBhandler);



var questions = [
    {
        type: 'list',
        name: 'branch',
        message: 'Select the branch you want to work',
        choices: ['Large', 'Medium', 'Small'],
        filter: function(val) {
          return val.toLowerCase();
        }
    }
];

inquirer.prompt(questions).then(answers => {
    console.log('\nBranch Selected:');
    console.log(JSON.stringify(answers, null, '  '));
});