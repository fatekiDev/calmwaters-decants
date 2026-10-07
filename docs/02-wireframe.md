# Wireframe v3 - enfoque premium

## Estructura general
1. Navbar fijo
2. Hero premium
3. ¿Qué es un decant? (con flipcard)
4. ¿Cómo pedir?
5. Catálogo con filtros
6. Destacados
7. Reseñas
8. CTA final
9. Footer

## Cambios respecto a v2
- Vuelve la flipcard junto a la explicación de "¿Qué es un decant?"
- Textos en español de Chile (tuteo) y typos corregidos
- Dorado mate como único acento (se descarta "dorado/lima vintage")
- "Destacados" no duplica datos: son los perfumes con `destacado: true` en `perfumes.js`

## Idea visual
- Paleta: negro grafito, beige, dorado mate y blanco cálido
- Premium, minimalista, sobrio y elegante, con mucho espacio vacío
- Mobile first, con impacto visual en desktop
- La marca debe sentirse exclusiva sin saturar

## Diagrama

```
┌────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]       Decants    Catálogo    Reseñas              [@IG]   [Menú]    │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   Huele caro,                                                              │
│   gasta menos.                                                             │
│   Decants originales de fragancias premium                                 │
│                                                                            │
│   [ Ver catálogo ]   [ Pedir por Instagram ]                               │
│                                                                            │
│                    ┌─────────────────────────────────┐                     │
│                    │   IMAGEN DE FRASCO / PERFUME    │                     │
│                    │      CON ILUMINACIÓN SUAVE      │                     │
│                    └─────────────────────────────────┘                     │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   ¿Qué es un decant?                       ┌─────────────────┐             │
│                                            │    FLIPCARD     │             │
│   Una porción pequeña de un perfume        │                 │             │
│   original, ideal para probarlo antes      │  frente: frasco │             │
│   de invertir en el frasco completo.       │  atrás: 2·5·10  │             │
│                                            │  ml + precios   │             │
│   ✓ 100% original                          └─────────────────┘             │
│   ✓ Mejor precio que el frasco completo     (gira al pasar el              │
│   ✓ Prueba varios sin riesgo                 mouse o al tocar)             │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   ¿Cómo pedir?                                                             │
│                                                                            │
│   1. Elige tu perfume   2. Escríbenos por Instagram   3. Recibe tu pedido  │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   Catálogo                                                                 │
│   [Todos] [Dulces] [Frescos] [Amaderados] [Orientales] [Florales]          │
│                                                                            │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐                   │
│   │   FOTO   │  │   FOTO   │  │   FOTO   │  │   FOTO   │                   │
│   │  nombre  │  │  nombre  │  │  nombre  │  │  nombre  │                   │
│   │  marca   │  │  marca   │  │  marca   │  │  marca   │                   │
│   │ desde $X │  │ desde $X │  │ desde $X │  │ desde $X │                   │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘                   │
│        │ clic → abre el modal de detalle                                   │
│                                                                            │
│                       [ Ver más perfumes ]                                 │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   Destacados                                                               │
│   “Los más pedidos por nuestros clientes”                                  │
│   (perfumes con destacado: true en perfumes.js)                            │
│                                                                            │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐         │
│   │  ProductCard     │  │  ProductCard     │  │  ProductCard     │         │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘         │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   Lo que dicen nuestros clientes                                           │
│                                                                            │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐         │
│   │ ★★★★★            │  │ ★★★★★            │  │ ★★★★★            │         │
│   │ “Excelente       │  │ “Muy buena       │  │ “Llegó rápido    │         │
│   │  fragancia...”   │  │  atención...”    │  │  y bien...”      │         │
│   │ — @usuario       │  │ — @usuario       │  │ — @usuario       │         │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘         │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   ¿Listo para probar una nueva fragancia?                                  │
│   [ Escríbenos por Instagram ]                                             │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│ [LOGO]    Catálogo    Reseñas    Instagram    Contacto       © 2026        │
└────────────────────────────────────────────────────────────────────────────┘
```

## Modal de detalle (producto)
- Overlay oscuro con blur
- Imagen grande a la izquierda (arriba en móvil)
- Nombre del perfume, marca y colección
- Descripción corta y elegante, y de dónde viene el decant
- Notas: salida, corazón, fondo
- Formatos disponibles (2ml, 5ml, 10ml) con precio
- Botón principal: "Pedir por Instagram"
- Botón secundario: "Cerrar"

## Recomendaciones de UX
- Todos los CTA de compra llevan a Instagram
- Menú simple y limpio
- En móvil, botón flotante de Instagram siempre visible
- Microinteracciones sutiles y sombras suaves
- Priorizar aire visual y claridad por sobre cantidad de contenido
- Textos cortos, elegantes y directos

## Notas finales
- Debe sentirse "boutique premium", no "tienda de descuento"
- La clave está en la limpieza, el espacio, el contraste y una buena tipografía