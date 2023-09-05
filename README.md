# ChatSSHPlug Tunneling Client Documentation

## Overview

The `ChatSSHPlug Tunneling Client` is a Node.js script designed specifically for the **ChatGPT Plugin ChatSSHPlug**. It establishes a connection to a server using `socket.io` and listens for commands to execute on the client machine. The results of the executed commands are then sent back to the server.

For more details, visit the [ChatSSHPlug website](https://chatsshplug.com).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Support](#support)

## Prerequisites

- Node.js and npm installed.
- Required npm packages: `socket.io-client`, `yargs`, and any other necessary packages.

## Installation

1. Clone the repository or download the script to your local machine.
2. Navigate to the directory containing the script.
3. Install the required npm packages:
   ```bash
   npm install socket.io-client yargs
    ```
   ## Usage

To run the script:

node <script_name>.js --tunnelKey=<YOUR_TUNNEL_KEY> --tunnelUrl=<YOUR_TUNNEL_URL>

### Options

- `--tunnelKey`: The key for the tunnel. (Required)
- `--tunnelUrl`: The URL for the tunnel server. (Required)

## Features

- Connects to the specified tunnel server using `socket.io`.
- Retrieves the current user's username and platform.
- Listens for "execute_command" events from the server and executes the provided command.
- Sends command outputs (stdout, stderr, and errors) back to the server.

## Troubleshooting

- **Issue**: Connection issues.
    - **Solution**: Ensure that the tunnel server is up and running, and that you have provided the correct `tunnelUrl` and `tunnelKey`.

- **Issue**: Command execution errors.
    - **Solution**: Ensure that the commands sent by the server are compatible with the client's operating system.

## FAQ

- **Q**: Is the connection encrypted?
    - **A**: The script uses `socket.io` for communication. If the server uses HTTPS/WSS, the connection will be encrypted.

- **Q**: Can I use this script on any server?
    - **A**: The script is designed to connect to servers that emit "execute_command" events and can handle the "output" events emitted by the client.

## Support

For any issues, questions, or feedback, please reach out to [support@chatsshplug.com](mailto:support@chatsshplug.com).
