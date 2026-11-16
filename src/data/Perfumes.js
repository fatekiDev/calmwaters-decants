import scandal from './src/assets/Scandal.png'

export const PERFUMES = [
  {
    id: 'scandal-pour-homme',
    nombre: 'Scandal Pour Homme',
    marca: 'Jean Paul Gaultier',
    familia: 'Amaderados', // define el filtro del catálogo
    imagen: scandal,
    descripcion: 'Descripción de ejemplo. Aquí va el texto real del perfume.',
    notas: {
      salida: ['Nota 1', 'Nota 2'],
      corazon: ['Nota 3', 'Nota 4'],
      fondo: ['Nota 5', 'Nota 6'],
    },
    precios: { '3 ml': 4990, '5 ml': 9990, '10 ml': 17990 },
    destacado: true, // aparecerá en la sección "Destacados"
  },
  // Los dos siguientes son de relleno solo para probar los filtros.
  // Bórralos cuando cargues los perfumes reales.
  {
    id: 'perfume-prueba-2',
    nombre: 'Perfume de prueba 2',
    marca: 'Marca X',
    familia: 'Frescos',
    imagen: scandal,
    descripcion: 'Texto de ejemplo.',
    notas: { salida: ['A'], corazon: ['B'], fondo: ['C'] },
    precios: { '2 ml': 3990, '5 ml': 8490, '10 ml': 15990 },
    destacado: false,
  },
  {
    id: 'perfume-prueba-3',
    nombre: 'Perfume de prueba 3',
    marca: 'Marca Y',
    familia: 'Dulces',
    imagen: scandal,
    descripcion: 'Texto de ejemplo.',
    notas: { salida: ['A'], corazon: ['B'], fondo: ['C'] },
    precios: { '2 ml': 5490, '5 ml': 10990, '10 ml': 19990 },
    destacado: true,
  },
]