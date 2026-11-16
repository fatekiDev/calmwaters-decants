import scandal from '../assets/perfumes/scandal-pour-homme.webp'
import stronger from '../assets/perfumes/stronger-with-you.webp'
import acqua from '../assets/perfumes/acqua-di-gio.webp'
import liquidBrun from '../assets/perfumes/Liquid-brun.webp'
import mandarinSky from '../assets/perfumes/ODYSSEY-MANDARIN.webp'

export const PERFUMES = [
  {
    id: 'scandal-pour-homme',
    nombre: 'Scandal Pour Homme',
    marca: 'Jean Paul Gaultier',
    familia: 'Dulces',
    imagen: scandal,
    descripcion:
      'Una fragancia moderna que combina el dulzor del caramelo con la frescura de la esclarea y un fondo amaderado. Versátil para el día a día o una salida especial.',
    notas: {
      salida: ['Mandarina', 'Esclarea'],
      corazon: ['Caramelo', 'Haba tonka'],
      fondo: ['Vetiver'],
    },
    acordes: [
      { nombre: 'Caramelo', nivel: 100, color: '#E4A64E' },
      { nombre: 'Aromático', nivel: 82, color: '#52AC98' },
      { nombre: 'Dulce', nivel: 76, color: '#EF555C' },
      { nombre: 'Cítrico', nivel: 70, color: '#F6F789' },
      { nombre: 'Avainillado', nivel: 66, color: '#FFF8D6' },
      { nombre: 'Ámbar', nivel: 60, color: '#D99573' },
      { nombre: 'Especiado suave', nivel: 54, color: '#ECA995' },
      { nombre: 'Amaderado', nivel: 48, color: '#B69A7D' },
    ],
    precios: { '3 ml': 5500, '5 ml': 8000, '10 ml': 14000 },
    destacado: true,
  },
  
  {
    id: 'stronger-with-you',
    nombre: 'Stronger With You Intensely',
    marca: 'Emporio Armani',
    familia: 'Dulces',
    imagen: stronger,
    descripcion:
      'Una fragancia intensa, cálida y dulce, con especias y notas ambaradas. Ideal para los días fríos y las ocasiones especiales.',
    notas: {
      salida: ['Pimienta rosa', 'Enebro de Virginia', 'Violeta'],
      corazon: ['Toffee', 'Canela', 'Lavanda', 'Salvia'],
      fondo: ['Vainilla', 'Ámbar', 'Haba tonka', 'Gamuza'],
    },
    acordes: [
      { nombre: 'Avainillado', nivel: 100, color: '#FFF4A3' },
      { nombre: 'Dulce', nivel: 90, color: '#EF4146' },
      { nombre: 'Ámbar', nivel: 75, color: '#C97845' },
      { nombre: 'Canela', nivel: 70, color: '#E59155' },
      { nombre: 'Cálido especiado', nivel: 65, color: '#E66C4A' },
      { nombre: 'Atalcado', nivel: 58, color: '#F4E2D6' },
      { nombre: 'Aromático', nivel: 52, color: '#80C9B6' },
      { nombre: 'Especiado suave', nivel: 48, color: '#ECA995' },
      { nombre: 'Caramelo', nivel: 42, color: '#EBC58F' },
    ],
    precios: { '3 ml': 6000, '5 ml': 9000, '10 ml': 16000 },
    destacado: false,
  },
  {
    id: 'acqua-di-gio-profondo',
    nombre: 'Acqua di Giò Profondo',
    marca: 'Giorgio Armani',
    familia: 'Frescos',
    imagen: acqua,
    descripcion:
      'Una fragancia masculina de frescura intensa y duradera, ideal para el día a día, el trabajo o la universidad.',
    notas: {
      salida: ['Notas marinas', 'Aquozone', 'Bergamota', 'Mandarina verde'],
      corazon: ['Romero', 'Lavanda', 'Ciprés', 'Resina almáciga del lentisco'],
      fondo: ['Notas minerales', 'Almizcle', 'Pachulí', 'Ámbar'],
    },
    acordes: [
      { nombre: 'Marino', nivel: 100, color: '#1C5FA0' },
      { nombre: 'Aromático', nivel: 100, color: '#37A18F' },
      { nombre: 'Cítrico', nivel: 80, color: '#F5F583' },
      { nombre: 'Fresco especiado', nivel: 74, color: '#A6D65C' },
      { nombre: 'Fresco', nivel: 70, color: '#B5E5EC' },
      { nombre: 'Amaderado', nivel: 64, color: '#A98566' },
      { nombre: 'Mineral', nivel: 58, color: '#A5D5DA' },
      { nombre: 'Salado', nivel: 52, color: '#F6FBFB' },
      { nombre: 'Lavanda', nivel: 48, color: '#E7CAF0' },
    ],
    precios: { '3 ml': 4500, '5 ml': 7000, '10 ml': 12000 },
    destacado: false,
  },
  {
    id: 'liquid-brun',
    nombre: 'Liquid Brun',
    marca: 'French Avenue',
    familia: 'Dulces',
    imagen: liquidBrun,
    descripcion:
      'Una fragancia cálida e intensa, con cardamomo, canela y cedro. Su carácter especiado y duradero la hace ideal para noches especiales y ocasiones en las que quieras dejar huella.',
    notas: {
      salida: ['Canela', 'Flor de azahar del naranjo', 'Cardamomo', 'Bergamota'],
      corazon: ['Vainilla', 'Bourbon', 'Elemí'],
      fondo: ['Praliné', 'Ambroxan', 'Madera de gaiac', 'Almizcle'],
    },
    acordes: [
      { nombre: 'Dulce', nivel: 100, color: '#EF4146' },
      { nombre: 'Cálido especiado', nivel: 92, color: '#D43C0D' },
      { nombre: 'Avainillado', nivel: 90, color: '#FFF4A3' },
      { nombre: 'Canela', nivel: 78, color: '#DB8C53' },
      { nombre: 'Floral blanco', nivel: 67, color: '#F4F5FA' },
      { nombre: 'Cítrico', nivel: 62, color: '#F5F583' },
      { nombre: 'Atalcado', nivel: 57, color: '#F4E2D6' },
      { nombre: 'Aromático', nivel: 54, color: '#80C9B6' },
      { nombre: 'Almizclado', nivel: 52, color: '#E9DDF0' },
      { nombre: 'Ámbar', nivel: 47, color: '#D99573' },
    ],
    precios: { '3 ml': 3500, '5 ml': 4500, '10 ml': 8000 },
    destacado: true,
  },
  {
    id: 'mandarin-sky',
    nombre: 'Mandarin Sky',
    marca: 'Odyssey',
    familia: 'Frescos',
    imagen: mandarinSky,
    descripcion:
      'Una fragancia vibrante que combina la frescura cítrica de la mandarina con matices dulces, florales y amaderados. Su aroma refrescante y duradero es ideal para el día a día.',
    notas: {
      salida: ['Mandarina', 'Naranja', 'Azafrán', 'Salvia'],
      corazon: ['Caramelo', 'Haba tonka', 'Tagete (clavelón)'],
      fondo: ['Ambroxan', 'Cedro', 'Vetiver'],
    },
    acordes: [
      { nombre: 'Cítrico', nivel: 100, color: '#F5F583' },
      { nombre: 'Caramelo', nivel: 88, color: '#EBC58F' },
      { nombre: 'Dulce', nivel: 84, color: '#EF555C' },
      { nombre: 'Ámbar', nivel: 76, color: '#D99573' },
      { nombre: 'Aromático', nivel: 66, color: '#80C9B6' },
      { nombre: 'Avainillado', nivel: 60, color: '#FFF4A3' },
      { nombre: 'Amaderado', nivel: 55, color: '#B69A7D' },
      { nombre: 'Cálido especiado', nivel: 48, color: '#E66C4A' },
    ],
    precios: { '3 ml': 3000, '5 ml': 4000, '10 ml': 7000 },
    destacado: true,
  },
]