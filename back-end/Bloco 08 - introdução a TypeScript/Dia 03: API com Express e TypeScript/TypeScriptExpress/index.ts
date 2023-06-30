import express, { Request, Response } from 'express';
import statusCodes from './statusCodes';
import UsersRoutes from './routes/users.routes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
    res.status(statusCodes.OK).send('Express + TypeScript')
});

app.use(UsersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

/*
1 - Ponto
A única coisa que difere do que antes estava sendo desenvolvido é a forma de importar. Antes era com require, agora é com o import.
*/