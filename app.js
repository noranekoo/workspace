const app = require('express')()

app.listen(3000, () => {
    console.log('Server is running...');
})

app.get('/', (req, res)=>{
        res.write('<a>Anh Thi</a>')
})


module.exports = app;