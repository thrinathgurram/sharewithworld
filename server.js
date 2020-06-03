// Section 1
const express = require('express');
const axios = require('axios');
const path = require('path');

// Section 2
const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));



// Section 4
app.listen(8080, () => {
    console.log('server started on port 8080');
});