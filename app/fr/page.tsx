import { ColorGrid } from '@/components/ColorGrid';
import { getPantoneColors } from '@/lib/colors';

export default async function Home() {
  const colors = await getPantoneColors();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Nuancier Pantone</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Découvrez notre vaste collection de couleurs Pantone. Trouvez la teinte idéale pour vos projets de conception grâce à notre nuancier facile à utiliser comprenant les valeurs HEX, RVB et CMJN.
      </p>
      <ColorGrid colors={colors} />
      
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Qu'est-ce que Pantone ?</h2>
        <p className="mb-4">
          Pantone est un système de correspondance des couleurs qui aide les concepteurs et les fabricants à garantir la cohérence des couleurs sur différents matériaux et supports. Le Pantone Matching System (PMS) a été créé en 1963 pour normaliser la sélection des couleurs. À chaque couleur Pantone est attribué un code unique, ce qui permet d'éliminer toute confusion lors de la correspondance des nuances. Les couleurs Pantone sont largement utilisées dans des secteurs tels que la mode, l'impression, la conception de produits et la décoration intérieure.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Comment utiliser les couleurs Pantone</h2>
        <p className="mb-4">
          Les couleurs Pantone sont utilisées de différentes manières dans le domaine de la conception, de l'impression et de la stratégie de marque. En matière de conception, les couleurs Pantone sont essentielles pour la mode, la décoration intérieure et même les interfaces numériques. Pour l'impression, Pantone permet de créer des couleurs vives et précises. En matière de stratégie de marque, les grandes marques choisissent souvent des couleurs Pantone spécifiques pour leurs logos et leurs supports de marque afin de garantir une cohérence à l'échelle mondiale.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Couleur Pantone de l'année</h2>
        <p className="mb-4">
          Chaque année, Pantone sélectionne une couleur de l'année qui reflète les tendances mondiales et les changements culturels. Cette couleur influence des secteurs comme la mode, la décoration intérieure et le marketing. Par exemple, la couleur de l'année 2024 est « Peach Fuzz », une teinte chaleureuse et accueillante qui symbolise l'optimisme et la créativité.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Pantone vs. CMJN vs. RVB vs. Hex</h2>
        <p className="mb-4">
          Pantone est un système de correspondance des couleurs standardisé utilisé principalement dans l'impression et la création de marques. Le CMJN (cyan, magenta, jaune, noir) est utilisé dans la plupart des processus d'impression. Le RVB (rouge, vert, bleu) est utilisé pour les écrans numériques. Les couleurs hexadécimales (Hex) sont une version du modèle RVB, utilisée principalement dans la conception Web.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">FAQ</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Quel est le but principal des couleurs Pantone ?</strong><br />Les couleurs Pantone garantissent que la même couleur semble identique sur différents matériaux, écrans et produits, peu importe où et comment elle est produite.</li>
          <li><strong>Pourquoi les couleurs Pantone sont-elles utilisées dans le branding ?</strong><br />Les couleurs Pantone sont très appréciées dans le domaine de la stratégie de marque car elles garantissent la cohérence. Une marque peut avoir exactement la même couleur sur son logo, qu'il soit imprimé sur une carte de visite, un site Web ou un panneau d'affichage.</li>
          <li><strong>Qu'est-ce que le système de correspondance Pantone ?</strong><br />Le Pantone Matching System (PMS) est un système de correspondance des couleurs standardisé utilisé dans le monde entier, principalement dans la conception, la mode, l'impression et la fabrication.</li>
          <li><strong>À quelle fréquence Pantone choisit-il une couleur de l’année ?</strong><br />Pantone sélectionne chaque année une nouvelle couleur de l’année, reflétant les tendances mondiales actuelles et les influences culturelles.</li>
          <li><strong>Puis-je utiliser les couleurs Pantone dans la conception Web ?</strong><br />Les couleurs Pantone ne sont généralement pas utilisées pour la conception Web, car elles sont généralement au format RVB ou Hex. Cependant, les concepteurs font parfois référence aux couleurs Pantone pour faire correspondre les éléments Web à l'image de marque physique.</li>
        </ul>
      </div>

      <div className="mt-12 text-sm text-gray-600 border-t pt-4">
        <h2 className="font-semibold mb-2">Clause de non-responsabilité</h2>
        <p>
          Le nuancier Pantone fourni sur ce site Web est fourni à titre de référence uniquement. Bien que nous nous efforcions d'être précis, la représentation numérique des couleurs peut varier en fonction de vos paramètres d'affichage. Pour une correspondance précise des couleurs, veuillez vous référer aux guides et normes de couleurs Pantone officiels.
        </p>
      </div>
    </div>
  );
}