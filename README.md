# BABYLON-COMMUNITY-AGENT
## Agente de Gestión de Community Manager con VAREGO Core

Este agente forma parte del ecosistema **BABYLON.IA** y hereda la tecnología de **VAREGO** para la publicación automatizada y segura en redes sociales (como X/Twitter, LinkedIn, TikTok), utilizando bots locales y reutilización de sesiones.

### 🌟 Propuesta de Valor Clave
* **Estrategia de Crecimiento de Seguidores**: Inspirado en el bot de crecimiento automático mencionado en los audios de los inversores, este sistema automatiza de forma segura y natural las interacciones para ganar tracción orgánica.
* **Seguridad de Acceso (Evita Bloqueos)**: Utiliza `browser_profile` para persistir las cookies de sesión en Chrome e intercepta el backend de red (`CreateTweet` API endpoint) para evitar ser detectado por políticas de scraping del DOM.
* **Coherencia e Inteligencia**: Incluye una matriz de contenido local con listas negativas para asegurar que las publicaciones varíen conceptualmente en cada ciclo, adaptando el tono a tendencias comerciales.

### ⚙️ Funcionalidades
1. **Programador de Mensajes y Hilos**: Panel visual para planificar y estructurar publicaciones en redes.
2. **Generación con Plantillas Locales**: Utiliza el motor de Gemini para redactar borradores sin revelar datos comerciales.
3. **Simulador de Crecimiento de Comunidad**: Panel para controlar los bots locales y ver estadísticas de interacción.

### 🚀 Uso
1. Instalar:
   ```bash
   npm install
   ```
2. Correr:
   ```bash
   npm start
   ```
3. Acceso: `http://localhost:4003`
