# 📢 BABYLON-COMMUNITY-AGENT
## Agente Autónomo de Community Manager e Interacción de Nicho
### Automatización Segura de Redes Sociales sobre VAREGO Core (Stealth SOTA)

---

## 📌 1. Propósito y Estrategia de Crecimiento

El **BABYLON-COMMUNITY-AGENT** es el encargado de la presencia, marca y crecimiento orgánico de las redes sociales del ecosistema. Basado directamente en el core de **VAREGO**, este agente automatiza de forma segura la publicación de contenido técnico, hilos formativos y la interacción de nicho en plataformas como X (Twitter) y LinkedIn.

### 🌟 Estrategia de Crecimiento de la Diseñadora (Follow-Bot)
Inspirado en el caso de éxito citado en los audios de los inversores (donde una fundación creció a más de 1,000 seguidores en 2 meses), el agente incorpora un **algoritmo de seguimiento y asistencia dirigido por nicho**. El bot identifica usuarios relevantes (pymes de hasta 50 empleados) y asiste sus conversaciones de forma natural sin disparar los sistemas de rate-limiting.

---

## 🛡️ 2. Tecnología Stealth SOTA (Evitando Bloqueos)

La mayoría de bots de social media fallan debido al scraping inestable del DOM o cambios repentinos en las clases CSS de las plataformas. Este agente soluciona esto mediante tres tecnologías State of the Art:

1. **Reutilización del Perfil de Navegación (`browser_profile`)**:
   El agente no realiza login en cada ciclo. En su lugar, carga un perfil real de Chrome local persistiendo las cookies de sesión activa.
2. **Intercepción de Redes (CreateTweet API Endpoint)**:
   En lugar de buscar botones con selectores inestables, el script de Puppeteer intercepta las llamadas HTTP salientes y captura directamente el `rest_id` devuelto por el servidor de X. Esto permite encadenar hilos de forma 100% fiable.
3. **Ofuscación de Firma WebDriver**:
   Inyecta código en la inicialización de Puppeteer para eliminar la bandera `navigator.webdriver`, sorteando los firewalls de seguridad anti-bot modernos.
4. **Calculador de Retraso Orgánico con Variación Jitter**:
   Para evitar que las redes sociales detecten patrones de automatización constantes, el bot calcula retrasos aleatorios variables:
   
   $$Delay_{net} = Base \times (1 + \text{random}() \times Jitter)$$
   
   Esto varía los tiempos entre acciones en un rango de ±20%, imitando la navegación humana.

---

## 🧠 3. Dialéctica y Prevención de Contenido Repetitivo

Para evitar la generación de respuestas de baja calidad ("slop"), el agente aplica filtros de control de calidad:

### A. Algoritmo de Decaimiento del Engagement (Half-Life Metric)
Los posts decaen su valor de interacción a lo largo del tiempo de manera exponencial. El bot prioriza promocionar posts antiguos basándose en su tasa de decaimiento:

$$Rate_{decay} = Rate_{base} \times \left(\frac{1}{2}\right)^{\frac{t}{T_{1/2}}}$$

Donde:
* $Rate_{decay}$ es la tasa de interacción proyectada.
* $T_{1/2}$ es la vida media del post (establecida en 24 horas).
* $t$ es el tiempo transcurrido desde la publicación en horas.

### B. Análisis de Sentimiento Dialéctico
Las publicaciones pasan por un clasificador de sentimiento que descarta publicaciones con palabras no deseadas e identifica el tono de interacción óptimo (político, técnico, humor, hegeliano).

---

## 🔌 4. Módulos de Contexto MCP

1. **Puppeteer Browser MCP (`mcp-servers/puppeteer-mcp.json`)**:
   Habilita al modelo local a tomar capturas de pantalla, dar clics y orquestar el navegador de forma directa en caso de requerir re-autenticación.
2. **HTTP Fetcher MCP (`mcp-servers/http-mcp.json`)**:
   Facilita la recolección de noticias y trends locales del nicho tecnológico de pymes para alimentar la matriz de contenidos.
3. **SQLite Social MCP (`mcp-servers/sqlite-mcp.json`)**:
   Almacena las métricas de crecimiento de seguidores e interacciones en la base de datos `db/posts.sqlite`.

---

## 📁 5. Estructura de Archivos

```text
C:\Users\jegom\BABYLON-COMMUNITY-AGENT\
├── package.json
├── server.js
├── varego_bridge.js
├── content_matrix.json
├── .env.example
├── db/
│   ├── schema.sql
│   └── init_db.js
├── mcp-servers/
│   ├── sqlite-mcp.json
│   ├── http-mcp.json
│   └── puppeteer-mcp.json
├── routes/
│   └── social.js
├── skills/
│   ├── automation/
│   │   └── stealth_profile.py
│   ├── follow-bot/
│   │   └── growth_algorithm.js
│   ├── nlp-analytics/
│   │   └── sentiment.js
│   └── publishing/
│       └── engagement.js
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
└── tests/
    └── sentiment.test.js
```

---

## 🚀 6. Inicialización y Despliegue

1. Acceder al directorio del agente de comunidad.
2. Instalar las dependencias de Node.js:
   ```bash
   npm install
   ```
3. Ejecutar las pruebas unitarias del procesador de lenguaje:
   ```bash
   npm test
   ```
4. Lanzar la aplicación local:
   ```bash
   npm start
   ```
5. Acceder al dashboard de planificación social: `http://localhost:4003`
