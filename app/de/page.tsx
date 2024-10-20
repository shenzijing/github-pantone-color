import { ColorGrid } from '@/components/ColorGrid';
import { getPantoneColors } from '@/lib/colors';

export default async function Home() {
  const colors = await getPantoneColors();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Pantone-Farbkarte</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Entdecken Sie unsere umfassende Sammlung von Pantone-Farben. Finden Sie den perfekten Farbton für Ihre Designprojekte mit unserer benutzerfreundlichen Farbkarte mit HEX-, RGB- und CMYK-Werten.
      </p>
      <ColorGrid colors={colors} />
      
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Was ist Pantone?</h2>
        <p className="mb-4">
          Pantone ist ein Farbabstimmungssystem, das Designern und Herstellern hilft, Farbkonsistenz über verschiedene Materialien und Medien hinweg sicherzustellen. Das Pantone Matching System (PMS) wurde 1963 entwickelt, um die Farbauswahl zu standardisieren. Jeder Pantone-Farbe wird ein eindeutiger Code zugewiesen, der hilft, Verwirrungen beim Abstimmen von Farbtönen zu vermeiden. Pantone-Farben werden in Branchen wie Mode, Druck, Produktdesign und Innendekoration häufig verwendet.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">So verwenden Sie Pantone-Farben</h2>
        <p className="mb-4">
          Pantone-Farben werden in den Bereichen Design, Druck und Branding auf vielfältige Weise verwendet. Im Design sind Pantone-Farben für Mode, Innenarchitektur und sogar digitale Schnittstellen von entscheidender Bedeutung. Beim Drucken hilft Pantone dabei, lebendige, präzise Farben zu erzeugen. Im Branding wählen große Marken häufig bestimmte Pantone-Farben für ihre Logos und Markenmaterialien, um weltweite Einheitlichkeit zu gewährleisten.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Pantone-Farbe des Jahres</h2>
        <p className="mb-4">
          Jedes Jahr wählt Pantone eine Farbe des Jahres, die globale Trends und kulturelle Veränderungen widerspiegelt. Diese Farbe beeinflusst Branchen wie Mode, Innenarchitektur und Marketing. Die Farbe des Jahres 2024 ist beispielsweise „Peach Fuzz“, ein warmer, einladender Farbton, der Optimismus und Kreativität symbolisiert.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Pantone vs. CMYK vs. RGB vs. Hex</h2>
        <p className="mb-4">
          Pantone ist ein standardisiertes Farbabstimmungssystem, das hauptsächlich im Druck- und Markenbereich verwendet wird. CMYK (Cyan, Magenta, Gelb, Schwarz) wird in den meisten Druckverfahren verwendet. RGB (Rot, Grün, Blau) wird für digitale Bildschirme verwendet. Hexadezimalfarben (Hex) sind eine Version des RGB-Modells, die hauptsächlich im Webdesign verwendet wird.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">FAQs</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Was ist der Hauptzweck der Pantone-Farben?</strong><br />Pantone-Farben stellen sicher, dass dieselbe Farbe auf verschiedenen Materialien, Bildschirmen und Produkten identisch aussieht, unabhängig davon, wo und wie sie produziert wird.</li>
          <li><strong>Warum werden Pantone-Farben beim Branding verwendet?</strong><br />Pantone-Farben sind im Branding beliebt, weil sie für Einheitlichkeit sorgen. Eine Marke kann genau dieselbe Farbe für ihr Logo verwenden, egal ob es auf einer Visitenkarte, einer Website oder einer Plakatwand gedruckt ist.</li>
          <li><strong>Was ist das Pantone Matching System?</strong><br />Das Pantone Matching System (PMS) ist ein standardisiertes Farbabstimmungssystem, das weltweit vor allem in den Bereichen Design, Mode, Druck und Fertigung verwendet wird.</li>
          <li><strong>Wie oft wählt Pantone eine Farbe des Jahres?</strong><br />Pantone wählt jedes Jahr eine neue Farbe des Jahres, die aktuelle globale Trends und kulturelle Einflüsse widerspiegelt.</li>
          <li><strong>Kann ich Pantone-Farben im Webdesign verwenden?</strong><br />Pantone-Farben werden normalerweise nicht für das Webdesign verwendet, da Webfarben normalerweise im RGB- oder Hex-Format vorliegen. Designer verwenden jedoch manchmal Pantone-Farben, um Webelemente an physische Marken anzupassen.</li>
        </ul>
      </div>

      <div className="mt-12 text-sm text-gray-600 border-t pt-4">
        <h2 className="font-semibold mb-2">Haftungsausschluss</h2>
        <p>
          Die auf dieser Website bereitgestellte Pantone-Farbkarte dient nur zu Referenzzwecken. Obwohl wir uns um Genauigkeit bemühen, kann die digitale Darstellung der Farben je nach Ihren Anzeigeeinstellungen variieren. Für eine genaue Farbabstimmung beachten Sie bitte die offiziellen Pantone-Farbführer und -Standards.
        </p>
      </div>
    </div>
  );
}