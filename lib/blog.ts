import { i18n } from '@/lib/i18n';

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  translations: {
    [key: string]: {
      title: string;
      excerpt: string;
      content: string;
    }
  };
}

const blogPosts: BlogPost[] = [
  {
    "title": "The Psychology of Color in Design",
    "slug": "psychology-of-color-in-design",
    "date": "2023-06-01",
    "excerpt": "Colors play a crucial role in how we perceive and interact with designs. In this post, we explore the psychological impacts of different colors and how to use them effectively in your projects.",
    "content": "...",
    "translations": {
      "es": {
        "title": "La psicología del color en el diseño",
        "excerpt": "Los colores juegan un papel crucial en la forma en que percibimos e interactuamos con los diseños. En esta publicación, exploramos los impactos psicológicos de los diferentes colores y cómo usarlos de manera efectiva en sus proyectos.",
        "content": "..."
      },
      "fr": {
        "title": "La psychologie de la couleur dans le design",
        "excerpt": "Les couleurs jouent un rôle crucial dans la façon dont nous percevons et interagissons avec les créations. Dans cet article, nous explorons les impacts psychologiques des différentes couleurs et comment les utiliser efficacement dans vos projets.",
        "content": "..."
      },
      "de": {
        "title": "Die Psychologie der Farbe im Design",
        "excerpt": "Farben spielen eine entscheidende Rolle dabei, wie wir Designs wahrnehmen und mit ihnen interagieren. In diesem Beitrag untersuchen wir die psychologischen Auswirkungen verschiedener Farben und wie Sie sie effektiv in Ihren Projekten einsetzen können.",
        "content": "..."
      },
      "it": {
        "title": "La psicologia del colore nel design",
        "excerpt": "I colori svolgono un ruolo cruciale nel modo in cui percepiamo e interagiamo con i design. In questo post, esploriamo gli impatti psicologici dei diversi colori e come usarli efficacemente nei tuoi progetti.",
        "content": "..."
      }
    }
  },
  {
    "title": "How Many Pantone Colors Are There?",
    "slug": "how-many-pantone-colors-are-there",
    "date": "2024-10-15",
    "excerpt": "Discover the vast world of Pantone colors and learn about the different color systems used in design and printing.",
    "content": "...",
    "translations": {
      "es": {
        "title": "¿Cuántos colores Pantone hay?",
        "excerpt": "Descubre el vasto mundo de los colores Pantone y aprende sobre los diferentes sistemas de color utilizados en diseño e impresión.",
        "content": "..."
      },
      "fr": {
        "title": "Combien de couleurs Pantone existe-t-il ?",
        "excerpt": "Découvrez le vaste monde des couleurs Pantone et apprenez-en davantage sur les différents systèmes de couleurs utilisés en design et en impression.",
        "content": "..."
      },
      "de": {
        "title": "Wie viele Pantone-Farben gibt es?",
        "excerpt": "Entdecken Sie die riesige Welt der Pantone-Farben und erfahren Sie mehr über die verschiedenen Farbsysteme, die in Design und Druck verwendet werden.",
        "content": "..."
      },
      "it": {
        "title": "Quanti colori Pantone ci sono?",
        "excerpt": "Scopri il vasto mondo dei colori Pantone e impara i diversi sistemi di colore utilizzati nel design e nella stampa.",
        "content": "..."
      }
    }
  }
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getTranslatedBlogPost(slug: string, lang: string): BlogPost | undefined {
  const post = getBlogPost(slug);
  if (!post) return undefined;

  if (lang === 'en') return post;

  const translation = post.translations[lang];
  if (!translation) return post;

  return {
    ...post,
    title: translation.title,
    excerpt: translation.excerpt,
    content: translation.content,
  };
}