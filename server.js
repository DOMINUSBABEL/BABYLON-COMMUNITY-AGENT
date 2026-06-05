const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 4003;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const POSTS_FILE = path.join(__dirname, 'posts.json');

const defaultPosts = [
  { id: 1, content: "BABYLON.IA garantiza la confidencialidad absoluta de tus datos empresariales al operar 100% de manera local y en tu propia red. Dile adiós a los tokens limitados y riesgos en la nube. #InteligenciaArtificial #Pymes", platform: "X/Twitter", status: "Published", scheduledAt: "2026-06-05T12:00:00" },
  { id: 2, content: "La temporada ideal para vender software a pymes es Octubre-Noviembre porque es cuando construyen presupuestos fiscales para 2027. ¡Diseña tu plan ahora!", platform: "LinkedIn", status: "Queued", scheduledAt: "2026-06-05T18:00:00" }
];

app.get('/api/posts', (req, res) => {
  if (!fs.existsSync(POSTS_FILE)) {
    fs.writeFileSync(POSTS_FILE, JSON.stringify(defaultPosts, null, 2));
    return res.json(defaultPosts);
  }
  fs.readFile(POSTS_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Read error' });
    res.json(JSON.parse(data || '[]'));
  });
});

app.post('/api/posts', (req, res) => {
  const newPost = { id: Date.now(), ...req.body, status: "Queued" };
  let posts = [];
  if (fs.existsSync(POSTS_FILE)) {
    try {
      posts = JSON.parse(fs.readFileSync(POSTS_FILE, 'utf8') || '[]');
    } catch (e) {}
  }
  posts.push(newPost);
  fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
  
  // Notify client via websocket
  io.emit('new_post', newPost);
  res.json({ success: true, post: newPost });
});

// Mocking Puppeteer trigger from VAREGO
app.post('/api/posts/publish/:id', (req, res) => {
  const { id } = req.params;
  if (!fs.existsSync(POSTS_FILE)) return res.status(404).json({ error: 'No posts' });
  
  let posts = JSON.parse(fs.readFileSync(POSTS_FILE, 'utf8') || '[]');
  let targetPost = null;
  posts = posts.map(post => {
    if (post.id === parseInt(id)) {
      targetPost = { ...post, status: "Published" };
      return targetPost;
    }
    return post;
  });
  
  fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
  io.emit('post_published', targetPost);
  res.json({ success: true, post: targetPost });
});

io.on('connection', (socket) => {
  console.log('Dashboard Client Connected via WebSocket');
});

server.listen(PORT, () => {
  console.log(`Community Agent (VAREGO Bridge) running at http://localhost:${PORT}`);
});