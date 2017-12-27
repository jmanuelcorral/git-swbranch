#!/usr/bin/env node

const [,, ... args] = process.argv

//console.log(`arguments ${args}`)

'use strict';
var inquirer = require('inquirer');
var git = require('simple-git');

var localBranches = [];
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
        console.log('\nBranch Selected:');
        git().checkoutBranch(answers.branch, startPoint, () => {});
        console.log(JSON.stringify(answers, null, '  '));
    });

});


