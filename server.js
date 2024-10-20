import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import i18next from 'i18next';
import i18nextMiddleware from 'i18next-http-middleware';
import i18nextBackend from 'i18next-fs-backend';
import pantoneColors from './src/data/pantoneColors.js';
import blogPosts from './src/data/blogPosts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// i18next setup
i18next
  .use(i18nextBackend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: path.join(__dirname, 'public', 'locales', '{{lng}}', '{{ns}}.json'),
    },
    fallbackLng: 'en',
    preload: ['en', 'es', 'fr', 'de'],
  });

app.use(i18nextMiddleware.handle(i18next));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    pantoneColors: pantoneColors.slice(0, 100),
    totalPages: Math.ceil(pantoneColors.length / 100),
    currentPage: 1,
    t: req.t
  });
});

// ... (其他路由保持不变)

// For Vercel, we need to export the app
export default app;

// Only start the server if we're not in a Vercel environment
if (process.env.VERCEL !== '1') {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}