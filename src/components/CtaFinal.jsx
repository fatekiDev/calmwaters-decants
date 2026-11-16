import { SITE } from '../data/site'

export default function CtaFinal() {
  return (
    <section className="border-t border-linea py-24">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <h2 className="font-display text-4xl md:text-5xl">
          ¿Listo para probar una <span className="text-dorado">nueva fragancia</span>?
        </h2>
        <a
          href={SITE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-md bg-dorado px-8 py-4 font-medium text-grafito transition-colors hover:bg-dorado-hover"
        >
          Escríbenos por Instagram
        </a>
      </div>
    </section>
  )
}