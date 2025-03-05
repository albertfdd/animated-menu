> [!NOTE]
> Tecnologías Utilizadas

Next.js: Framework React para aplicaciones web con renderizado híbrido.

React: Biblioteca para construir interfaces de usuario.

Tailwind CSS: Framework de utilidades CSS para estilizar la aplicación.

Radix UI: Conjunto de componentes UI accesibles.

Framer Motion: Biblioteca para animaciones fluidas y transiciones.

next-themes: Gestión de temas (oscuro/claro).

Sonner: Manejo de notificaciones toast.

Otros: Librerías adicionales como class-variance-authority, clsx, embla-carousel-react, entre otras.

Estructura de Componentes y Hooks

Componentes UI: Se encuentran en la carpeta components/ui. Cada componente (por ejemplo, accordion.tsx, alert-dialog.tsx, card.tsx, etc.) ofrece funcionalidad y estilos personalizados.
Hooks: Los hooks personalizados (use-mobile.tsx y use-toast.ts) facilitan la detección del estado mobile y la gestión de notificaciones, respectivamente.

Utilidades: La función cn en lib/utils.ts combina y limpia clases CSS utilizando clsx y tailwind-merge.
Personalización

Tema y Estilos: El archivo globals.css y tailwind.config.ts permiten ajustar colores, transiciones y estilos globales.
Componentes Animados: Los componentes como menu-bar.tsx y sparkles.tsx usan Framer Motion para crear efectos visuales dinámicos que pueden personalizarse modificando variantes y transiciones.
