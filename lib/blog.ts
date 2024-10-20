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
    "date": "June 1, 2023",
    "excerpt": "Colors play a crucial role in how we perceive and interact with designs. In this post, we explore the psychological impacts of different colors and how to use them effectively in your projects.",
    "content": "\n      <p>Colors have a profound impact on our emotions and behaviors. In the world of design, understanding color psychology is crucial for creating effective and engaging experiences. Let's explore some key aspects of color psychology in design:</p>\n      \n      <h2>Emotional Associations</h2>\n      <p>Different colors evoke different emotions and associations. For example:</p>\n      <ul>\n        <li><strong>Red</strong>: Excitement, passion, urgency</li>\n        <li><strong>Blue</strong>: Trust, calmness, stability</li>\n        <li><strong>Green</strong>: Nature, growth, harmony</li>\n        <li><strong>Yellow</strong>: Happiness, optimism, energy</li>\n        <li><strong>Purple</strong>: Luxury, creativity, mystery</li>\n      </ul>\n\n      <h2>Cultural Considerations</h2>\n      <p>It's important to note that color associations can vary across cultures. What might be positive in one culture could be negative in another. Always research your target audience's cultural context when choosing colors for global designs.</p>\n\n      <h2>Practical Applications</h2>\n      <p>Understanding color psychology can help in various design scenarios:</p>\n      <ul>\n        <li><strong>Branding</strong>: Choose colors that align with your brand personality and values.</li>\n        <li><strong>User Interface Design</strong>: Use colors to guide users' attention and actions.</li>\n        <li><strong>Marketing</strong>: Select colors that resonate with your target audience and campaign goals.</li>\n      </ul>\n\n      <p>By leveraging the power of color psychology, designers can create more impactful and effective designs that resonate with their audience on a deeper level.</p>\n    ",
    "translations": {
      "es": {
        "title": "La Psicología del Color en el Diseño",
        "excerpt": "Los colores juegan un papel crucial en cómo percibimos e interactuamos con los diseños. En este post, exploramos los impactos psicológicos de diferentes colores y cómo usarlos efectivamente en tus proyectos.",
        "content": "\n          <p>Los colores tienen un profundo impacto en nuestras emociones y comportamientos. En el mundo del diseño, entender la psicología del color es crucial para crear experiencias efectivas y atractivas. Exploremos algunos aspectos clave de la psicología del color en el diseño:</p>\n          \n          <h2>Asociaciones Emocionales</h2>\n          <p>Diferentes colores evocan diferentes emociones y asociaciones. Por ejemplo:</p>\n          <ul>\n            <li><strong>Rojo</strong>: Emoción, pasión, urgencia</li>\n            <li><strong>Azul</strong>: Confianza, calma, estabilidad</li>\n            <li><strong>Verde</strong>: Naturaleza, crecimiento, armonía</li>\n            <li><strong>Amarillo</strong>: Felicidad, optimismo, energía</li>\n            <li><strong>Púrpura</strong>: Lujo, creatividad, misterio</li>\n          </ul>\n\n          <h2>Consideraciones Culturales</h2>\n          <p>Es importante notar que las asociaciones de color pueden variar entre culturas. Lo que puede ser positivo en una cultura podría ser negativo en otra. Siempre investiga el contexto cultural de tu audiencia objetivo al elegir colores para diseños globales.</p>\n\n          <h2>Aplicaciones Prácticas</h2>\n          <p>Entender la psicología del color puede ayudar en varios escenarios de diseño:</p>\n          <ul>\n            <li><strong>Branding</strong>: Elige colores que se alineen con la personalidad y valores de tu marca.</li>\n            <li><strong>Diseño de Interfaz de Usuario</strong>: Usa colores para guiar la atención y acciones de los usuarios.</li>\n            <li><strong>Marketing</strong>: Selecciona colores que resuenen con tu audiencia objetivo y los objetivos de la campaña.</li>\n          </ul>\n\n          <p>Al aprovechar el poder de la psicología del color, los diseñadores pueden crear diseños más impactantes y efectivos que resuenen con su audiencia a un nivel más profundo.</p>\n        "
      },
      "fr": {
        "title": "The Psychology of Color in Design",
        "excerpt": "Colors play a crucial role in how we perceive and interact with designs. In this post, we explore the psychological impacts of different colors and how to use them effectively in your projects.",
        "content": "\n      <p>Colors have a profound impact on our emotions and behaviors. In the world of design, understanding color psychology is crucial for creating effective and engaging experiences. Let's explore some key aspects of color psychology in design:</p>\n      \n      <h2>Emotional Associations</h2>\n      <p>Different colors evoke different emotions and associations. For example:</p>\n      <ul>\n        <li><strong>Red</strong>: Excitement, passion, urgency</li>\n        <li><strong>Blue</strong>: Trust, calmness, stability</li>\n        <li><strong>Green</strong>: Nature, growth, harmony</li>\n        <li><strong>Yellow</strong>: Happiness, optimism, energy</li>\n        <li><strong>Purple</strong>: Luxury, creativity, mystery</li>\n      </ul>\n\n      <h2>Cultural Considerations</h2>\n      <p>It's important to note that color associations can vary across cultures. What might be positive in one culture could be negative in another. Always research your target audience's cultural context when choosing colors for global designs.</p>\n\n      <h2>Practical Applications</h2>\n      <p>Understanding color psychology can help in various design scenarios:</p>\n      <ul>\n        <li><strong>Branding</strong>: Choose colors that align with your brand personality and values.</li>\n        <li><strong>User Interface Design</strong>: Use colors to guide users' attention and actions.</li>\n        <li><strong>Marketing</strong>: Select colors that resonate with your target audience and campaign goals.</li>\n      </ul>\n\n      <p>By leveraging the power of color psychology, designers can create more impactful and effective designs that resonate with their audience on a deeper level.</p>\n    "
      },
      "de": {
        "title": "The Psychology of Color in Design",
        "excerpt": "Colors play a crucial role in how we perceive and interact with designs. In this post, we explore the psychological impacts of different colors and how to use them effectively in your projects.",
        "content": "\n      <p>Colors have a profound impact on our emotions and behaviors. In the world of design, understanding color psychology is crucial for creating effective and engaging experiences. Let's explore some key aspects of color psychology in design:</p>\n      \n      <h2>Emotional Associations</h2>\n      <p>Different colors evoke different emotions and associations. For example:</p>\n      <ul>\n        <li><strong>Red</strong>: Excitement, passion, urgency</li>\n        <li><strong>Blue</strong>: Trust, calmness, stability</li>\n        <li><strong>Green</strong>: Nature, growth, harmony</li>\n        <li><strong>Yellow</strong>: Happiness, optimism, energy</li>\n        <li><strong>Purple</strong>: Luxury, creativity, mystery</li>\n      </ul>\n\n      <h2>Cultural Considerations</h2>\n      <p>It's important to note that color associations can vary across cultures. What might be positive in one culture could be negative in another. Always research your target audience's cultural context when choosing colors for global designs.</p>\n\n      <h2>Practical Applications</h2>\n      <p>Understanding color psychology can help in various design scenarios:</p>\n      <ul>\n        <li><strong>Branding</strong>: Choose colors that align with your brand personality and values.</li>\n        <li><strong>User Interface Design</strong>: Use colors to guide users' attention and actions.</li>\n        <li><strong>Marketing</strong>: Select colors that resonate with your target audience and campaign goals.</li>\n      </ul>\n\n      <p>By leveraging the power of color psychology, designers can create more impactful and effective designs that resonate with their audience on a deeper level.</p>\n    "
      },
      "it": {
        "title": "The Psychology of Color in Design",
        "excerpt": "Colors play a crucial role in how we perceive and interact with designs. In this post, we explore the psychological impacts of different colors and how to use them effectively in your projects.",
        "content": "\n      <p>Colors have a profound impact on our emotions and behaviors. In the world of design, understanding color psychology is crucial for creating effective and engaging experiences. Let's explore some key aspects of color psychology in design:</p>\n      \n      <h2>Emotional Associations</h2>\n      <p>Different colors evoke different emotions and associations. For example:</p>\n      <ul>\n        <li><strong>Red</strong>: Excitement, passion, urgency</li>\n        <li><strong>Blue</strong>: Trust, calmness, stability</li>\n        <li><strong>Green</strong>: Nature, growth, harmony</li>\n        <li><strong>Yellow</strong>: Happiness, optimism, energy</li>\n        <li><strong>Purple</strong>: Luxury, creativity, mystery</li>\n      </ul>\n\n      <h2>Cultural Considerations</h2>\n      <p>It's important to note that color associations can vary across cultures. What might be positive in one culture could be negative in another. Always research your target audience's cultural context when choosing colors for global designs.</p>\n\n      <h2>Practical Applications</h2>\n      <p>Understanding color psychology can help in various design scenarios:</p>\n      <ul>\n        <li><strong>Branding</strong>: Choose colors that align with your brand personality and values.</li>\n        <li><strong>User Interface Design</strong>: Use colors to guide users' attention and actions.</li>\n        <li><strong>Marketing</strong>: Select colors that resonate with your target audience and campaign goals.</li>\n      </ul>\n\n      <p>By leveraging the power of color psychology, designers can create more impactful and effective designs that resonate with their audience on a deeper level.</p>\n    "
      }
    }
  }
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
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