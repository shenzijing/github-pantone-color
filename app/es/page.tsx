import { ColorGrid } from '@/components/ColorGrid';
import { getPantoneColors } from '@/lib/colors';

export default async function Home() {
  const colors = await getPantoneColors();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Tabla de colores Pantone</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Explora nuestra colección completa de colores Pantone. Encuentra el tono perfecto para tus proyectos de diseño con nuestra tabla de colores fácil de usar que incluye valores HEX, RGB y CMYK.
      </p>
      <ColorGrid colors={colors} />
      
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">¿Qué es Pantone?</h2>
        <p className="mb-4">
          Pantone es un sistema de combinación de colores que ayuda a los diseñadores y fabricantes a garantizar la consistencia del color en diferentes materiales y medios. El Pantone Matching System (PMS) se creó en 1963 para estandarizar la selección de colores. A cada color Pantone se le asigna un código único, lo que ayuda a eliminar la confusión al combinar tonos. Los colores Pantone se utilizan ampliamente en industrias como la moda, la impresión, el diseño de productos y la decoración de interiores.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Cómo utilizar los colores Pantone</h2>
        <p className="mb-4">
          Los colores Pantone se utilizan de diversas formas en el diseño, la impresión y el branding. En el ámbito del diseño, los colores Pantone son fundamentales para la moda, el diseño de interiores e incluso las interfaces digitales. En el ámbito de la impresión, Pantone ayuda a crear colores vibrantes y precisos. En el ámbito del branding, las grandes marcas suelen elegir colores Pantone específicos para sus logotipos y materiales de marca para garantizar la coherencia a nivel mundial.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Color Pantone del año</h2>
        <p className="mb-4">
          Cada año, Pantone selecciona un color del año que refleja las tendencias globales y los cambios culturales. Este color influye en sectores como la moda, el diseño de interiores y el marketing. Por ejemplo, el color del año 2024 es "Peach Fuzz", un tono cálido y acogedor que simboliza el optimismo y la creatividad.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Pantone frente a CMYK frente a RGB frente a Hex</h2>
        <p className="mb-4">
          Pantone es un sistema de combinación de colores estandarizado que se utiliza principalmente en impresión y desarrollo de marcas. CMYK (cian, magenta, amarillo y negro) se utiliza en la mayoría de los procesos de impresión. RGB (rojo, verde y azul) se utiliza para pantallas digitales. Los colores hexadecimales (Hex) son una versión del modelo RGB que se utiliza principalmente en diseño web.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Preguntas frecuentes</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>¿Cuál es el propósito principal de los colores Pantone?</strong><br />Los colores Pantone garantizan que el mismo color se vea idéntico en distintos materiales, pantallas y productos, sin importar dónde o cómo se produzca.</li>
          <li><strong>¿Por qué se utilizan los colores Pantone en el branding?</strong><br />Los colores Pantone son populares en el ámbito del branding porque garantizan la coherencia. Una marca puede tener exactamente el mismo color en su logotipo, ya sea impreso en una tarjeta de presentación, un sitio web o una valla publicitaria.</li>
          <li><strong>¿Qué es el Pantone Matching System?</strong><br />El Pantone Matching System (PMS) es un sistema de combinación de colores estandarizado utilizado en todo el mundo, principalmente en diseño, moda, impresión y fabricación.</li>
          <li><strong>¿Con qué frecuencia Pantone elige un Color del Año?</strong><br />Pantone selecciona anualmente un nuevo Color del Año, que refleja las tendencias mundiales y las influencias culturales actuales.</li>
          <li><strong>¿Puedo utilizar colores Pantone en el diseño web?</strong><br />Los colores Pantone no suelen utilizarse en el diseño web porque los colores web suelen estar en formato RGB o hexadecimal. Sin embargo, los diseñadores a veces hacen referencia a los colores Pantone para combinar los elementos web con la imagen física de la marca.</li>
        </ul>
      </div>

      <div className="mt-12 text-sm text-gray-600 border-t pt-4">
        <h2 className="font-semibold mb-2">Descargo de responsabilidad</h2>
        <p>
          La tabla de colores Pantone que se proporciona en este sitio web es solo para fines de referencia. Si bien nos esforzamos por lograr la precisión, la representación digital de los colores puede variar según la configuración de la pantalla. Para obtener una combinación de colores precisa, consulte las guías y estándares de colores oficiales de Pantone.
        </p>
      </div>
    </div>
  );
}