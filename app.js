// Imports from config folder
const { app } = require('./config/config')

// PORT variable
const PORT = 3000;

// Initializing server
app.listen(PORT, () => {
    console.log(`Servidor aberto na link: http://localhost:${PORT}/`)
})

// Main route
app.get('/', (req, res) => {

    res.render('index')

})

app.get('/login', (req, res) => {

    res.render('login')
    
})

app.get('/register', (req, res) => {
    
        res.render('singup')

})

app.get('/read', (req, res) => {

    const items = [

        { id: 1, name: 'Item 1', price: 100, date: '12/05/2022', profit: true },
        { id: 2, name: 'Item 2', price: 200, date: '12/05/2022', profit: false },
        { id: 3, name: 'Item 3', price: 300, date: '12/05/2022', profit: true },
        { id: 4, name: 'Item 4', price: 400, date: '12/05/2022', profit: false },
        { id: 5, name: 'Item 5', price: 500, date: '12/05/2022', profit: true },
        { id: 6, name: 'Item 6', price: 600, date: '12/05/2022', profit: true },
        { id: 7, name: 'Item 7', price: 700, date: '12/05/2022', profit: true },
        { id: 8, name: 'Item 8', price: 800, date: '12/05/2022', profit: true },
        { id: 9, name: 'Item 9', price: 900, date: '12/05/2022', profit: true },
        { id: 10, name: 'Item 10', price: 1000, date: '12/05/2022', profit: false }

    ]

    res.render('read', { items })

})

app.get('/create', (req, res) => {
    
    res.render('create')

})

app.get('/details/:id', (req, res) => {

    const item = {

        id: req.params.id,
        name: 'Item Teste',
        price: 100,
        date: '12/05/2022',
        profit: true

    }

    res.render('details', { item })

})

app.delete('/delete/:id', (req, res) => {

    res.send('Item deletado com sucesso!')

})