import express from 'express';
const app = express();
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, nome: 'anuncio 1' },
        { id: 2, nome: 'anuncio 2' },
        { id: 3, nome: 'anuncio 3' },
    ]);
});
app.listen(3333);
