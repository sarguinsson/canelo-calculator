const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Default to index.html for root path
    let filePath = req.url === '/' ? '/index.html' : req.url;
    
    // Remove query string
    filePath = filePath.split('?')[0];
    
    // Build and validate the full file path to prevent path traversal
    const requestedPath = filePath;
    const resolvedPath = path.resolve(__dirname, '.' + requestedPath);

    // Ensure the resolved path is within the application directory
    if (!resolvedPath.startsWith(__dirname + path.sep)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    filePath = resolvedPath;
    // Get the file extension
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File doesn't exist, serve index.html for client-side routing
            if (ext === '' || ext === '.html') {
                filePath = path.join(__dirname, 'index.html');
                readAndServeFile(filePath, contentType);
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            }
        } else {
            // File exists, serve it
            readAndServeFile(filePath, contentType);
        }
    });

    // Helper function to read and serve file
    function readAndServeFile(filePath, contentType) {
        fs.readFile(filePath, (error, content) => {
            if (error) {
                console.error(`Error reading file ${filePath}:`, error);
                if (error.code === 'ENOENT') {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('404 Not Found');
                } else if (error.code === 'EACCES') {
                    console.error(`Permission denied: ${filePath}`);
                    res.writeHead(403, { 'Content-Type': 'text/plain' });
                    res.end('403 Forbidden');
                } else {
                    console.error(`Server error for ${filePath}:`, error.message);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('500 Internal Server Error');
                }
            } else {
                // Add security headers
                res.writeHead(200, {
                    'Content-Type': contentType,
                    'X-Content-Type-Options': 'nosniff',
                    'X-Frame-Options': 'DENY',
                    'X-XSS-Protection': '1; mode=block',
                    'Content-Security-Policy': "default-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:;"
                });
                res.end(content, 'utf-8');
            }
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Serving static files from: ${__dirname}`);
});
