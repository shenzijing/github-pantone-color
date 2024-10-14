# Pantone Color Chart

This project is a React-based web application that displays a comprehensive Pantone color chart. It includes features like color search, pagination, and multi-language support.

## Project Structure

- `src/`: Contains the source code for the React application
  - `components/`: React components used in the application
    - `Blog.tsx`: Renders the blog page with a list of blog posts
    - `BlogPost.tsx`: Displays individual blog posts
    - `LanguageSwitcher.tsx`: Component for switching between different languages
    - `PantoneColorGrid.tsx`: Main component for displaying the Pantone color grid
    - `PrivacyPolicy.tsx`: Renders the privacy policy page
    - `TermsOfService.tsx`: Renders the terms of service page
  - `data/`: Contains data files used in the application
    - `blogPosts.ts`: Contains blog post data
    - `pantoneColors.ts`: Contains the Pantone color data (not shown in the file list)
  - `App.tsx`: Main application component
  - `main.tsx`: Entry point of the application
  - `i18n.ts`: Configuration for internationalization using i18next
  - `index.css`: Global styles for the application
- `public/`: Contains public assets and localization files
  - `locales/`: Contains translation files for different languages
    - `en/translation.json`: English translations
- `scripts/`: Contains utility scripts
  - `translate.js`: Script for automatic translation using Google Cloud Translate API

## Key Files

- `package.json`: Defines project dependencies and scripts
- `vite.config.ts`: Configuration file for Vite (build tool)
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript configuration files
- `tailwind.config.js`: Configuration file for Tailwind CSS
- `postcss.config.js`: Configuration file for PostCSS
- `eslint.config.js`: ESLint configuration for code linting
- `index.html`: Main HTML file

## Setup and Running the Project

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`
3. Build for production: `npm run build`
4. Preview the production build: `npm run preview`

## Internationalization

The project uses i18next for internationalization. Translations are stored in JSON files in the `public/locales` directory.

## Google Cloud Translation Setup

To use the Google Cloud Translation API for automatic translation:

1. Set up a Google Cloud project and enable the Cloud Translation API
2. Create a service account and download the JSON key file
3. Update the `projectId` and `keyFilename` in `scripts/translate.js`
4. Run the translation script: `node scripts/translate.js`

Note: Make sure to keep your Google Cloud credentials secure and never commit them to version control.