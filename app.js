const express = require('express');
const bodyParser = require('body-parser');
var adminRoutes = require('./routes/admin')
var shopRoutes = require('./routes/shop')
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin',adminRoutes)

app.use('/', shopRoutes)

app.use((req, res, next)=>{
        res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

})

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);