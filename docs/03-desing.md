# Sistema de diseño: calmwaters_decants

## Concepto
Boutique premium, lujo discreto. Mucho espacio vacío, pocos elementos,
contraste alto y un solo color de acento.

## Paleta

| Token | Hex | Uso |
|-------|-----|-----|
| grafito | #0F0F10 | Fondo principal |
| carbon | #1A1A1C | Cards, modal, superficies |
| linea | #2A2A2D | Bordes y separadores |
| marfil | #F6F2EA | Texto principal |
| beige | #E6DCCB | Secciones claras / texto secundario |
| bruma | #9A9489 | Texto atenuado, placeholders |
| dorado | #B8975A | Acento: botones, detalles, iconos |
| dorado-hover | #9C7E45 | Hover del acento |

Regla: el dorado es el único acento. Se usa en menos del 10% de la pantalla.

## Tipografía
- Títulos: Cormorant Garamond (500/600), elegante y editorial
- Cuerpo y botones: Inter (400/500), limpia y legible
- Etiquetas pequeñas: Inter en mayúsculas con espaciado amplio (tracking-widest)

Alternativas si no convence: Playfair Display + Manrope.

## Componentes
- Botón primario: fondo dorado, texto grafito, esquinas poco redondeadas
- Botón secundario: borde dorado, texto marfil, fondo transparente
- Cards: fondo carbon, borde linea, sombra suave, leve zoom de imagen al hover
- Modal: overlay oscuro con blur, entrada con fade + escala sutil
- Radio de bordes pequeño (4-8px): lo redondeado en exceso se ve menos premium

## Movimiento
- Duraciones de 300 a 600 ms, easing suave
- Animaciones al hacer scroll solo en títulos y cards, nada exagerado

## Fotografía
- Fondos oscuros o neutros, iluminación lateral, mucho espacio alrededor
- Mismo encuadre y proporción en todo el catálogo (ej. 4:5)