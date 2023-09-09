#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const { execSync } = require('child_process');
const yargs = require("yargs");


const runCommand = ( command)=>{
    try{
        execSync(command,{
            stdio: 'inherit',
        })
        return true
    }catch (e) {
        console.log(e)
        return false
    }
}
const executer = ()=>{
    console.log("Installing dependencies")
    let result = runCommand("npm install")
    if ( !result ){
        console.log("Dependencies installation failed")
        return
    }
    let yargs = require("yargs")

    console.log("Dependencies installed")
    console.log("Building project")

    let tunnelKey = yargs.argv.tunnelKey
    let tunnelUrl = yargs.argv.tunnelUrl

    runCommand(`npm run start -- --tunnelKey=${tunnelKey} --tunnelUrl=${tunnelUrl}`)

}
executer()