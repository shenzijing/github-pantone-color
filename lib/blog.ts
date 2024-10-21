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
        "title": "La psychologie de la couleur dans le design",
        "excerpt": "Les couleurs jouent un rôle crucial dans la façon dont nous percevons et interagissons avec les créations. Dans cet article, nous explorons les impacts psychologiques des différentes couleurs et comment les utiliser efficacement dans vos projets.",
        "content": "\n      <p>Les couleurs ont un impact profond sur nos émotions et nos comportements. Dans le monde du design, il est essentiel de comprendre la psychologie des couleurs pour créer des expériences efficaces et engageantes. Explorons quelques aspects clés de la psychologie des couleurs dans le design :</p><h2> Associations émotionnelles</h2><p> Différentes couleurs évoquent différentes émotions et associations. Par exemple :</p><ul><li> <strong>Rouge</strong> : excitation, passion, urgence</li><li> <strong>Bleu</strong> : Confiance, calme, stabilité</li><li> <strong>Vert</strong> : Nature, croissance, harmonie</li><li> <strong>Jaune</strong> : Bonheur, optimisme, énergie</li><li> <strong>Violet</strong> : Luxe, créativité, mystère</li></ul><h2> Considérations culturelles</h2><p> Il est important de noter que les associations de couleurs peuvent varier selon les cultures. Ce qui peut être positif dans une culture peut être négatif dans une autre. Étudiez toujours le contexte culturel de votre public cible lorsque vous choisissez des couleurs pour des designs internationaux.</p><h2> Applications pratiques</h2><p> Comprendre la psychologie des couleurs peut aider dans divers scénarios de conception :</p><ul><li> <strong>Branding</strong> : Choisissez des couleurs qui correspondent à la personnalité et aux valeurs de votre marque.</li><li> <strong>Conception de l&#39;interface utilisateur</strong> : utilisez des couleurs pour guider l&#39;attention et les actions des utilisateurs.</li><li> <strong>Marketing</strong> : sélectionnez des couleurs qui correspondent à votre public cible et aux objectifs de votre campagne.</li></ul><p> En exploitant la puissance de la psychologie des couleurs, les designers peuvent créer des designs plus percutants et efficaces qui trouvent un écho plus profond auprès de leur public.</p>\n    "
      },
      "de": {
        "title": "Die Psychologie der Farbe im Design",
        "excerpt": "Farben spielen eine entscheidende Rolle dabei, wie wir Designs wahrnehmen und mit ihnen interagieren. In diesem Beitrag untersuchen wir die psychologischen Auswirkungen verschiedener Farben und wie Sie sie effektiv in Ihren Projekten einsetzen können.",
        "content": "\n      <p>Farben haben einen tiefgreifenden Einfluss auf unsere Emotionen und unser Verhalten. In der Welt des Designs ist das Verständnis der Farbpsychologie entscheidend für die Schaffung effektiver und ansprechender Erlebnisse. Lassen Sie uns einige wichtige Aspekte der Farbpsychologie im Design untersuchen:</p><h2> Emotionale Assoziationen</h2><p> Verschiedene Farben rufen unterschiedliche Emotionen und Assoziationen hervor. Zum Beispiel:</p><ul><li> <strong>Rot</strong> : Aufregung, Leidenschaft, Dringlichkeit</li><li> <strong>Blau</strong> : Vertrauen, Ruhe, Stabilität</li><li> <strong>Grün</strong> : Natur, Wachstum, Harmonie</li><li> <strong>Gelb</strong> : Glück, Optimismus, Energie</li><li> <strong>Lila</strong> : Luxus, Kreativität, Geheimnis</li></ul><h2> Kulturelle Überlegungen</h2><p> Es ist wichtig zu beachten, dass Farbassoziationen je nach Kultur unterschiedlich sein können. Was in einer Kultur positiv ist, kann in einer anderen negativ sein. Informieren Sie sich bei der Farbauswahl für globale Designs immer über den kulturellen Kontext Ihrer Zielgruppe.</p><h2> Praktische Anwendungen</h2><p> Das Verständnis der Farbpsychologie kann in verschiedenen Design-Szenarien hilfreich sein:</p><ul><li> <strong>Branding</strong> : Wählen Sie Farben, die zur Persönlichkeit und den Werten Ihrer Marke passen.</li><li> <strong>Design der Benutzeroberfläche</strong> : Verwenden Sie Farben, um die Aufmerksamkeit und Aktionen der Benutzer zu lenken.</li><li> <strong>Marketing</strong> : Wählen Sie Farben, die zu Ihrer Zielgruppe und Ihren Kampagnenzielen passen.</li></ul><p> Indem sie die Macht der Farbpsychologie nutzen, können Designer wirkungsvollere und effektivere Designs erstellen, die bei ihrem Publikum eine tiefere Resonanz hervorrufen.</p>\n    "
      },
      "it": {
        "title": "La psicologia del colore nel design",
        "excerpt": "I colori svolgono un ruolo cruciale nel modo in cui percepiamo e interagiamo con i design. In questo post, esploriamo gli impatti psicologici dei diversi colori e come usarli efficacemente nei tuoi progetti.",
        "content": "\n      <p>I colori hanno un profondo impatto sulle nostre emozioni e sui nostri comportamenti. Nel mondo del design, comprendere la psicologia del colore è fondamentale per creare esperienze efficaci e coinvolgenti. Esploriamo alcuni aspetti chiave della psicologia del colore nel design:</p><h2> Associazioni emozionali</h2><p> Colori diversi evocano emozioni e associazioni diverse. Ad esempio:</p><ul><li> <strong>Rosso</strong> : eccitazione, passione, urgenza</li><li> <strong>Blu</strong> : Fiducia, calma, stabilità</li><li> <strong>Verde</strong> : Natura, crescita, armonia</li><li> <strong>Giallo</strong> : Felicità, ottimismo, energia</li><li> <strong>Viola</strong> : Lusso, creatività, mistero</li></ul><h2> Considerazioni culturali</h2><p> È importante notare che le associazioni di colori possono variare da una cultura all&#39;altra. Ciò che potrebbe essere positivo in una cultura potrebbe essere negativo in un&#39;altra. Fai sempre delle ricerche sul contesto culturale del tuo pubblico di riferimento quando scegli i colori per i design globali.</p><h2> Applicazioni pratiche</h2><p> Comprendere la psicologia del colore può essere utile in vari scenari di progettazione:</p><ul><li> <strong>Branding</strong> : scegli colori in linea con la personalità e i valori del tuo marchio.</li><li> <strong>Progettazione dell&#39;interfaccia utente</strong> : utilizzare i colori per guidare l&#39;attenzione e le azioni degli utenti.</li><li> <strong>Marketing</strong> : seleziona colori che risuonino con il tuo pubblico di riferimento e con gli obiettivi della campagna.</li></ul><p> Sfruttando il potere della psicologia del colore, i designer possono creare progetti più incisivi ed efficaci, che riescono a entrare in sintonia con il loro pubblico a un livello più profondo.</p>\n    "
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