const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is my Smart Node')
});

const users = [
    { id: 1, name: 'sabana', email: "sabana@gmail.com", Phone: "0178856421" },
    { id: 2, name: 'sabnoor', email: "sabnoor@gmail.com", Phone: "0178856421" },
    { id: 3, name: 'popy', email: "popy@gmail.com", Phone: "0178856421" },
    { id: 4, name: 'lucky', email: "lucky@gmail.com", Phone: "0178856421" },
    { id: 5, name: 'emma watson', email: "emmawatson@gmail.com", Phone: "0178856421" },
    { id: 6, name: 'laboni', email: "laboni@gmail.com", Phone: "0178856421" },
    { id: 7, name: 'sajoni', email: "sajoni@gmail.com", Phone: "0178856421" }

]



app.get('/users', (req, res) => {
    //filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(u => u.name.toLowerCase().includes(search));
        res.send(matched);
    } else {
        res.send(users)
    }

});

app.post('/users', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.get('/users/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user);
});


app.listen(port, () => {
    console.log("This is Listening", port);
})