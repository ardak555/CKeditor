const express = require('express');

const bodyParser = require('body-parser');

const multiparty = require('connect-multiparty');
const MultiparityMiddleware = multiparty({uploadDir: './images'})

const morgan = require('morgan');

const PORT = process.env.PORT || 8000;
const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Testing our Server"
    });
});

app.post('/uploads', MultiparityMiddleware, (req, res) => {
    console.log(req.files.uploads);
}
);

app.listen(PORT, console.log(`Server has successfully started on port ${PORT}`))
