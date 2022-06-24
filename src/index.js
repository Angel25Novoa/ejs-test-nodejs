import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import router from './routes/routes.js'

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log(__dirname);

app.set('view engine', 'ejs')
app.set('views', join(__dirname, 'views'))
app.use(router)
app.use(express.static(join(__dirname, 'public')))

const PORT = process.env.PORT || 3000;

app.listen(PORT)
// console.log(`Server is running on port ${PORT}`);