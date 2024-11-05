const PORT = 4999;
const express = require('express');
const os = require('os');

const app = express();

// Function to get the server's IP address
const getIPAddress = () => {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '127.0.0.1'; // fallback to localhost if no other IP found
};

const IP = getIPAddress();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Adjusted to use sendFile for static HTML file
});

app.listen(PORT, () => {
    console.log(`App running on IP: ${IP}, and port: ${PORT}`);
});
