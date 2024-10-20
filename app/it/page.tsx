import { ColorGrid } from '@/components/ColorGrid';
import { getPantoneColors } from '@/lib/colors';

export default async function Home() {
  const colors = await getPantoneColors();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Tabella colori Pantone</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Esplora la nostra completa collezione di colori Pantone. Trova la tonalità perfetta per i tuoi progetti di design con la nostra tabella colori di facile utilizzo con valori HEX, RGB e CMYK.
      </p>
      <ColorGrid colors={colors} />
      
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Che cosa è Pantone?</h2>
        <p className="mb-4">
          Pantone è un sistema di abbinamento dei colori che aiuta designer e produttori a garantire la coerenza dei colori su materiali e supporti diversi. Il Pantone Matching System (PMS) è stato creato nel 1963 per standardizzare la selezione dei colori. A ogni colore Pantone viene assegnato un codice univoco, che aiuta a eliminare la confusione quando si abbinano le tonalità. I colori Pantone sono ampiamente utilizzati in settori come moda, stampa, design di prodotti e decorazione d'interni.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Come usare i colori Pantone</h2>
        <p className="mb-4">
          I colori Pantone sono utilizzati in vari modi nel design, nella stampa e nel branding. Nel design, i colori Pantone sono fondamentali per la moda, l'interior design e persino le interfacce digitali. Per la stampa, Pantone aiuta a creare colori vivaci e precisi. Nel branding, i grandi marchi spesso scelgono colori Pantone specifici per i loro loghi e materiali di branding per garantire coerenza a livello mondiale.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Colore Pantone dell'anno</h2>
        <p className="mb-4">
          Ogni anno, Pantone seleziona un Colore dell'anno che riflette le tendenze globali e i cambiamenti culturali. Questo colore influenza settori come la moda, l'interior design e il marketing. Ad esempio, il Colore dell'anno 2024 è 'Peach Fuzz', una tonalità calda e invitante che simboleggia ottimismo e creatività.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Pantone contro CMYK contro RGB contro Hex</h2>
        <p className="mb-4">
          Pantone è un sistema di corrispondenza dei colori standardizzato utilizzato principalmente nella stampa e nel branding. CMYK (Ciano, Magenta, Giallo, Nero) è utilizzato nella maggior parte dei processi di stampa. RGB (Rosso, Verde, Blu) è utilizzato per gli schermi digitali. I colori esadecimali (Hex) sono una versione del modello RGB, utilizzato principalmente nel web design.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Domande frequenti</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Qual è lo scopo principale dei colori Pantone?</strong><br />I colori Pantone garantiscono che lo stesso colore appaia identico su materiali, schermi e prodotti diversi, indipendentemente da dove o come viene prodotto.</li>
          <li><strong>Perché i colori Pantone vengono utilizzati nel branding?</strong><br />I colori Pantone sono popolari nel branding perché assicurano coerenza. Un marchio può avere lo stesso identico colore sul suo logo, sia stampato su un biglietto da visita, un sito web o un cartellone pubblicitario.</li>
          <li><strong>Che cos'è il Pantone Matching System?</strong><br />Il Pantone Matching System (PMS) è un sistema standardizzato di corrispondenza dei colori utilizzato in tutto il mondo, principalmente nei settori del design, della moda, della stampa e della produzione.</li>
          <li><strong>Con quale frequenza Pantone sceglie il colore dell'anno?</strong><br />Ogni anno Pantone seleziona un nuovo Colore dell'anno, riflettendo le tendenze globali del momento e le influenze culturali.</li>
          <li><strong>Posso usare i colori Pantone nel web design?</strong><br />I colori Pantone in genere non vengono utilizzati per il web design perché i colori web sono solitamente in RGB o Hex. Tuttavia, i designer a volte fanno riferimento ai colori Pantone per abbinare gli elementi web al branding fisico.</li>
        </ul>
      </div>

      <div className="mt-12 text-sm text-gray-600 border-t pt-4">
        <h2 className="font-semibold mb-2">Disclaimer</h2>
        <p>
          La tabella dei colori Pantone fornita su questo sito Web è solo a scopo di riferimento. Sebbene ci impegniamo per la precisione, la rappresentazione digitale dei colori può variare a seconda delle impostazioni del display. Per una corrispondenza precisa dei colori, fare riferimento alle guide e agli standard ufficiali dei colori Pantone.
        </p>
      </div>
    </div>
  );
}