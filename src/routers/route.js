const express = require('express')
const indexRoute = require('../routers/indexRoute.js')
function routers(app) {
    app.use('/', indexRoute)
    
}
module.exports = routers;