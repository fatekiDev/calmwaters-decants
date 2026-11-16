import scandal from '../assets/perfumes/scandal-pour-homme.webp'

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
    id: 'salvo-elixir',
    nombre: 'Perfume de prueba 2',
    marca: 'Marca X',
    familia: 'Frescos',
    imagen: scandal,
    descripcion: 'Texto de ejemplo.',
    notas: { salida: ['A'], corazon: ['B'], fondo: ['C'] },
    // Salvo Elixir
    acordes: [
      { nombre: 'Ámbar', nivel: 100 },
      { nombre: 'Amaderado', nivel: 94 },
      { nombre: 'Fresco especiado', nivel: 88 },
      { nombre: 'Cálido especiado', nivel: 82 },
      { nombre: 'Tabaco', nivel: 76 },
      { nombre: 'Dulce', nivel: 70 },
      { nombre: 'Avainillado', nivel: 62 },
      { nombre: 'Atalcado', nivel: 54 },
      { nombre: 'Pachulí', nivel: 46 },
      { nombre: 'Iris', nivel: 38 },
    ],
    precios: { '2 ml': 3990, '5 ml': 8490, '10 ml': 15990 },
    destacado: false,
  },
  {
    id: 'jean-lowe',
    nombre: 'Perfume de prueba 3',
    marca: 'Marca Y',
    familia: 'Dulces',
    imagen: scandal,
    descripcion: 'Texto de ejemplo.',
    notas: { salida: ['A'], corazon: ['B'], fondo: ['C'] },
    // Jean Lowe Vibe
    acordes: [
      { nombre: 'Cítrico', nivel: 100 },
      { nombre: 'Afrutado', nivel: 78 },
      { nombre: 'Aromático', nivel: 72 },
      { nombre: 'Verde', nivel: 64 },
      { nombre: 'Fresco especiado', nivel: 56 },
      { nombre: 'Dulce', nivel: 46 },
      { nombre: 'Atalcado', nivel: 38 },
    ],
    precios: { '2 ml': 5490, '5 ml': 10990, '10 ml': 19990 },
    destacado: true,
  },
]