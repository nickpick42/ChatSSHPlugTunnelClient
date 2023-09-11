#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

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

    let workingDirectory = path.join(__dirname,`./${crypto.randomUUID()}`)
    console.log("Creating working directory")
    fs.mkdirSync(workingDirectory)
    console.log("Working directory created: " + workingDirectory)



    console.log("Installing dependencies")
    runCommand(`npm init -y && npm install yargs`)
    runCommand(`cd ${workingDirectory} && npm init -y && npm install create-chatsshplug_tunnel`)
    let yargs = require("yargs")


    let tunnelKey = yargs.argv.tunnelKey
    let tunnelUrl = yargs.argv.tunnelUrl

    console.log(tunnelKey)
    console.log(tunnelUrl)
    fs.writeFileSync(workingDirectory+"/index.js",`
        const chatSSHPlugTunnelClient = require("create-chatsshplug_tunnel")
        chatSSHPlugTunnelClient('${tunnelKey}','${tunnelUrl}') 
    `)
    runCommand(`cd ${workingDirectory} && node index.js`)


}
executer()