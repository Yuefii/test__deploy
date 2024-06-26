import cors from 'cors';
import morgan from 'morgan';
import express, { Request, Response } from 'express';

const app = express()

// listening PORT
const port = 8080
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).json({
        data: "hello this is works",
    })
})

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        "author": "yuefii",
        "github_author": "https://github.com/yuefii",
        "github_project": "https://github.com/Yuefii/starter-express-typescript",
        "version": "1.0.0"
    })
})

