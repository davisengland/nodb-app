const express = require('express')
const app = express()
const port = 4242


app.use(express.json())

// app.get('/api/f1-teams', f1c.)
// app.post('/api/f1-teams', f1c.)
// app.delete('/api/f1-teams/:drivers', f1c.)
// app.put('/api/f1-teams/:drivers', f1c.)

app.listen(port, () => console.log(`Server is running on ${port}`))