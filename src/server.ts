import express, {Express, Request, Response} from 'express';
import { appDataSource } from './app-data-source';
import {JwtMiddleware} from "./middleware/jwtAuth";
import router from "./routes/routes";
// establish database connection
appDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


const app: Express = express();
const port = 3001;
app.use(express.json()); // Add this line to handle JSON requests


app.get('/', (req: Request, res: Response)=>{
    res.send('Hello, this is Express + TypeScript');
});

app.use(router)



app.listen(port, ()=> {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});

//add listerer for each request
app.use((req: Request, res: Response, next: Function) => {
    //JwtMiddleware(req, res);
    next();
});