
const app = require('express')()
const firebase = require('firebase/app')
require('firebase/database')
const port = process.env.PORT || 3001;

const e = firebase.default.initializeApp({})
app.listen(port, () => {
    console.log('Server is running...');
})

app.get('/', (req, res)=>{
        
})

module.exports = app;