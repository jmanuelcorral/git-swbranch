#!/usr/bin/env node

const [,, ... args] = process.argv

//console.log(`arguments ${args}`)

'use strict';
var inquirer = require('inquirer');
var git = require('simple-git');


git().branchLocal((errors, branchSummary) => {
    console.log(`Current Branch ${branchSummary.current}`);
    inquirer.prompt([
        {
            type: 'list',
            name: 'branch',
            message: 'Select the branch you want to work',
            choices: branchSummary.all,
            filter: function(val) {
              return val;
            }
        }
    ]).then(answers => {
        git().checkout(answers.branch, () => {});
        console.log(`Selected Branch: ${answers.branch} with starting point ${branchSummary.branches[answers.branch].commit}`);
    });

});


