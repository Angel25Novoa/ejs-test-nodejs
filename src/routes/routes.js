import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
  // En este objeto podemos pasar la cantidad de de variables que necesitemos
  res.render('index', {title: 'Home'});
})

router.get('/about', (req, res) => {
  res.render('about', {title: 'About'});
})

router.get('/blog', (req, res) => {
  res.render('blog', {title: 'Blog'});
})

export default router;