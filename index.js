
const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const path = require('path')
const fs = require('fs')

const pdfTemplate = require('./documents');

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/client/build")));

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toStream((err, stream) => {
        stream(fs.createWriteStream('./result.pdf'));

        if(err) {
            return res.send(Promise.reject());
        }

        res.send(Promise.resolve());
      });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.get('*', (req, res) => {
    const index = path.join(__dirname, "client" , "build", "index.html")
    res.sendFile(index)
})

app.listen(port, () => console.log(`Listening on port ${port}`));