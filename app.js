const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.post('/', (req, res) => {

    const result = req.body;
    console.log('result', result);
    return res.status(200).json({
        msg: 'sent'
    })

})
app.listen(port, () => {
    console.log(`app running on port ${port}`)
})