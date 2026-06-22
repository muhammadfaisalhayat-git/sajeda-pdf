const express = require('express');
const path = require('path');
const app = express();

const publicDir = path.join(__dirname, 'out');

// Serve static assets (like _next/static, images, favicon)
app.use(express.static(publicDir, {
  extensions: ['html', 'htm'], // Try serving files with .html extension if not found
}));

// Route handler for clean paths (e.g. /en/pdf-to-word -> /en/pdf-to-word.html)
app.get('*', (req, res, next) => {
  // If the path doesn't have an extension, try to serve the .html file
  const ext = path.extname(req.path);
  if (!ext) {
    // Check if it's index (e.g. /en/ -> /en/index.html)
    let filePath = req.path.endsWith('/') ? req.path + 'index.html' : req.path + '.html';
    res.sendFile(path.join(publicDir, filePath), (err) => {
      if (err) {
        // If not found, serve the 404 page
        res.status(404).sendFile(path.join(publicDir, '404.html'), (err2) => {
          if (err2) {
            res.status(404).send('Not Found');
          }
        });
      }
    });
  } else {
    next();
  }
});

// Port configuration (Hostinger sets process.env.PORT)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
