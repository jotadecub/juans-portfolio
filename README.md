# Portfolio personal

Portfolio de un desarrollador de software en formación, con experiencia práctica en aplicaciones web frontend y backend.

El proyecto presenta mi perfil profesional, experiencia, proyectos y formación académica mediante una interfaz adaptable a diferentes tamaños de pantalla.

## Estado del proyecto

En desarrollo. La estructura principal está implementada; el contenido, los recursos visuales y los ajustes finales se actualizan de forma progresiva.

## Tecnologías

- React: construcción de la interfaz mediante componentes.
- TypeScript: tipado de datos y propiedades de componentes.
- Vite: entorno de desarrollo y compilación.
- Tailwind CSS: estilos y diseño adaptable.
- Motion: animaciones de entrada y aparición al desplazarse.
- Git: control de versiones.

## Secciones

### Inicio

Presentación profesional con nombre, rol y descripción. Los enlaces de contacto, redes profesionales y descarga del currículum aparecen cuando están configurados.

### Experiencia

Línea de tiempo con proyectos o experiencias, responsabilidades, fechas y tecnologías utilizadas.

### Proyectos destacados

Tarjetas reutilizables organizadas en una sola columna, también en escritorio. Cada proyecto puede incluir:

- Nombre y categoría.
- Descripción.
- Tecnologías.
- Captura de pantalla.
- Enlace al repositorio.
- Enlace a una demostración.

Las imágenes y los enlaces son opcionales.

### Sobre mí

Presentación personal y profesional, objetivos, intereses, formación académica e idiomas.

### Footer

Información de contacto, enlaces profesionales y acceso al inicio.

## Características

- Diseño adaptable a dispositivos móviles y escritorio.
- Componentes reutilizables.
- Datos separados de la presentación.
- Tipos de TypeScript para experiencia, proyectos y formación.
- Navegación interna entre secciones.
- Enlace para saltar al contenido principal.
- Estados de foco visibles en los enlaces implementados.
- Animaciones configuradas para respetar la preferencia de movimiento reducido.
- Metadatos básicos e idioma español en el documento HTML.

Estas características no sustituyen una auditoría completa de accesibilidad.

## Requisitos

- Una versión de Node.js compatible con la versión de Vite instalada.
- npm.
- Git, para clonar el repositorio y gestionar cambios.

## Instalación

Clona el repositorio utilizando su dirección real:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Entra en la carpeta creada:

```bash
cd <CARPETA_DEL_PROYECTO>
```

Instala las dependencias:

```bash
npm install
```

Los valores entre `< >` son marcadores y deben reemplazarse antes de ejecutar los comandos.

## Desarrollo local

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre en el navegador la dirección que indique la terminal.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run lint` | Ejecuta las comprobaciones de ESLint. |
| `npm run build` | Comprueba TypeScript y genera la compilación de producción. |
| `npm run preview` | Permite revisar localmente la compilación generada. |

Para revisar la compilación:

```bash
npm run build
npm run preview
```

El comando `preview` se utiliza para comprobación local, no como servidor de producción.

## Estructura del proyecto

```text
public/
├── images/                       # Imágenes y capturas, si se añaden
└── cv.pdf                        # Currículum opcional

src/
├── components/
│   ├── experience/
│   │   └── ExperienceItem.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   └── projects/
│       └── ProjectCard.tsx
├── data/
│   ├── about.ts
│   ├── experience.ts
│   ├── profile.ts
│   └── projects.ts
├── sections/
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   └── Projects.tsx
├── types/
│   ├── about.ts
│   ├── experience.ts
│   └── project.ts
├── App.tsx
├── index.css
└── main.tsx

index.html
vite.config.ts
package.json
```

Los archivos de imágenes y el currículum solo estarán presentes si se han añadido al proyecto.

## Personalización

### Perfil y contacto

Edita:

```text
src/data/profile.ts
```

Este archivo centraliza:

- Iniciales.
- Nombre y apellido.
- Rol profesional.
- Presentación breve.
- Correo electrónico.
- GitHub y LinkedIn.
- Ruta del currículum.
- Imagen de portada.

Los enlaces opcionales solo se muestran cuando tienen un valor configurado.

### Experiencia

Edita:

```text
src/data/experience.ts
```

Cada experiencia contiene el rol, proyecto, contexto, fechas, descripción y tecnologías.

Mantén las experiencias ordenadas de la más reciente a la más antigua. Usa `endDate: null` para una experiencia que continúa en la actualidad.

### Proyectos

Edita:

```text
src/data/projects.ts
```

Cada proyecto puede incluir una imagen, un repositorio y una demo. No es necesario añadir enlaces de sustitución si esos recursos todavía no existen.

Para una captura guardada en:

```text
public/images/projects/proyecto.webp
```

Utiliza esta ruta en los datos:

```ts
image: {
  src: "/images/projects/proyecto.webp",
  alt: "Descripción de la captura del proyecto",
},
```

No incluyas `public` en la ruta.

### Presentación y formación

Edita:

```text
src/data/about.ts
```

Aquí se definen:

- Presentación personal.
- Objetivo profesional.
- Intereses.
- Formación académica.
- Idiomas.

La formación distingue entre estudios finalizados y estudios en curso. Las fechas previstas de finalización deben identificarse como tales.

### Metadatos

Edita `index.html` para actualizar:

- Título de la página.
- Descripción.
- Autor.
- Favicon, cuando exista.

Estos datos son independientes del contenido de `profile.ts`.

### Estilos y animaciones

- Los estilos de los componentes se definen principalmente mediante clases de Tailwind CSS.
- Los estilos globales están en `src/index.css`.
- La integración de Tailwind con Vite está en `vite.config.ts`.
- La configuración general de movimiento reducido está en `App.tsx`.

## Revisión antes de publicar

- [ ] Sustituir todos los datos de demostración.
- [ ] Confirmar nombres, fechas y estado de los estudios.
- [ ] Completar el perfil y los enlaces reales.
- [ ] Añadir y comprobar las capturas de los proyectos.
- [ ] Verificar la descarga del currículum, si se incluye.
- [ ] Sustituir los metadatos de ejemplo.
- [ ] Revisar la navegación con teclado.
- [ ] Comprobar la página en móvil y escritorio.
- [ ] Comprobar la preferencia de movimiento reducido.
- [ ] Revisar que no haya errores en la consola.
- [ ] Ejecutar `npm run lint`.
- [ ] Ejecutar `npm run build`.
- [ ] Revisar la compilación con `npm run preview`.
- [ ] Comprobar que no se incluyen credenciales ni información sensible.

## Despliegue

El despliegue todavía no se documenta para un proveedor concreto.

La compilación se genera con:

```bash
npm run build
```

La configuración final dependerá de la plataforma elegida y de si el sitio se publica en la raíz de un dominio o en una subruta.

## Autor

Los datos de autor y contacto se mantienen en `src/data/profile.ts`.

## Licencia

No se ha definido una licencia de uso para este proyecto. Antes de reutilizar o distribuir su código, consulta las condiciones con su autor.