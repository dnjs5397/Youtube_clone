import express from 'express';

const PORT = 4000;
const app = express();
const homeResponse = (req, res) => {
    res.send("기본 응답입니다.");
}

app.listen(4000, () => console.log(`Server is started at "http://localhost:${PORT}"`));

app.get('/', homeResponse);