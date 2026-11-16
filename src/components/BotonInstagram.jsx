import { SITE } from '../data/site'

export default function BotonInstagram() {
  return (
    <a
      href={SITE.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por Instagram"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-dorado text-grafito shadow-lg shadow-black/40 transition-colors hover:bg-dorado-hover md:hidden"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    </a>
  )
}