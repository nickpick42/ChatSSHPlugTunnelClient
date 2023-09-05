const { io} = require("socket.io-client")
const {exec} = require("child_process")
const os = require("os")
const yargs = require("yargs")

const chatSSHPlugTunnelClient = async()=>{


    let tunnelKey = yargs.argv.tunnelKey
    let tunnelUrl = yargs.argv.tunnelUrl

    if ( !tunnelKey ){
        console.log("Please provide tunnel key")
    }
    if ( !tunnelUrl ){
        console.log("Please provide tunnel url")
    }
    let currentUser = os.userInfo().username
    let platform = os.platform()


    let socket = io(`${tunnelUrl}/tunnel`,{
        extraHeaders:{
            tunnelKey,
            user:currentUser,
            platform,
        },
        forceNew:true
    })

    socket.on("connect",()=>{
        console.log("Connected to server")
    })
    socket.on("execute_command",(data)=>{
        let command  = data.command;
        let commandId = data.commandId
        let process = exec(command)
        process.stdout.on("data",(data)=>{
            console.log(data)
            socket.emit("output",{
                commandId,
                output:data
            })
        })
        process.stderr.on("data",(data)=>{
            console.log(data)
            socket.emit("output",{
                commandId,
                output:data
            })
        })
        process.on("error",(data)=>{
            console.log(data)
            socket.emit("output",{
                commandId,
                output:data
            })
        })
    })


}

chatSSHPlugTunnelClient()