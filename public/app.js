// App logic for Community Agent

document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const menuItems = document.querySelectorAll('.menu-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            menuItems.forEach(mi => mi.classList.remove('active'));
            tabPanes.forEach(tp => tp.classList.remove('active'));

            item.classList.add('active');
            const tabId = item.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    const socket = io();
    const postsQueue = document.getElementById('posts-queue-list');
    
    // Load posts queue
    function loadQueue() {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => {
                postsQueue.innerHTML = '';
                data.reverse().forEach(post => {
                    const div = document.createElement('div');
                    div.className = 'queue-item';
                    
                    const isPublished = post.status === 'Published';
                    const statusClass = isPublished ? 'published' : 'queued';
                    const statusLabel = isPublished ? 'Publicado' : 'Programado';

                    div.innerHTML = `
                        <div class="queue-item-header">
                            <span class="queue-item-platform">${post.platform}</span>
                            <span class="queue-item-status ${statusClass}">${statusLabel}</span>
                        </div>
                        <div class="queue-item-body">${post.content}</div>
                        <div class="queue-item-footer">
                            <span class="queue-item-date">Fecha: ${new Date(post.scheduledAt || post.id).toLocaleString()}</span>
                            ${!isPublished ? `<button class="btn-success btn-publish-now" style="padding: 5px 10px; font-size: 0.75rem;" data-id="${post.id}">Publicar Ya</button>` : ''}
                        </div>
                    `;
                    postsQueue.appendChild(div);
                });

                // Attach publish listeners
                document.querySelectorAll('.btn-publish-now').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const id = e.target.getAttribute('data-id');
                        fetch(`/api/posts/publish/${id}`, { method: 'POST' })
                            .then(res => res.json())
                            .then(() => loadQueue());
                    });
                });
            });
    }

    loadQueue();

    // WebSocket Listeners
    socket.on('new_post', () => loadQueue());
    socket.on('post_published', (post) => {
        loadQueue();
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;
        document.getElementById('varego-telemetry').innerHTML += `
            <div class="log-line"><span class="log-time">[${timeStr}]</span> <span class="log-success">SYSTEM:</span> Post #${post.id} publicado en ${post.platform} vía VAREGO Core.</div>
        `;
    });

    // Schedule post
    const btnSchedule = document.getElementById('btn-schedule-post');
    btnSchedule.addEventListener('click', () => {
        const content = document.getElementById('post-text').value;
        const platform = document.getElementById('post-platform').value;
        if (!content) return;

        fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content,
                platform,
                scheduledAt: new Date(Date.now() + 60 * 60 * 1000) // 1 hr from now
            })
        })
        .then(res => res.json())
        .then(() => {
            document.getElementById('post-text').value = '';
            loadQueue();
            const now = new Date();
            const timeStr = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;
            document.getElementById('varego-telemetry').innerHTML += `
                <div class="log-line"><span class="log-time">[${timeStr}]</span> <span class="log-info">TESIS:</span> Petición de programación recibida para ${platform}.</div>
            `;
        });
    });

    // Polish AI
    const btnPolish = document.getElementById('btn-polish-ai');
    btnPolish.addEventListener('click', () => {
        const text = document.getElementById('post-text').value;
        const tone = document.getElementById('post-tone').value;
        if (!text) return;

        btnPolish.textContent = 'Procesando...';
        btnPolish.disabled = true;

        // Simulate local Gemini polishing based on requested tone
        setTimeout(() => {
            let polishedText = text;
            if (tone === 'business') {
                polishedText = text + " Optimiza tus operaciones B2B con privacidad absoluta. Hablemos de software local. 🚀";
            } else if (tone === 'hacker') {
                polishedText = text + " [Local Execution Only] Zero Cloud leak. Pure performance. 🛡️";
            } else if (tone === 'funny') {
                polishedText = "Mis inversores dicen que compre en Q4, pero mis agentes locales dicen que compre siempre. " + text + " 🤖";
            } else if (tone === 'hegel') {
                polishedText = "Superación dialéctica del software tradicional: " + text + " Síntesis local alcanzada.";
            }

            document.getElementById('post-text').value = polishedText;
            btnPolish.textContent = '✨ Polimentar con IA';
            btnPolish.disabled = false;

            const now = new Date();
            const timeStr = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;
            document.getElementById('varego-telemetry').innerHTML += `
                <div class="log-line"><span class="log-time">[${timeStr}]</span> <span class="log-info">SÍNTESIS:</span> Copiloto IA polimentó el texto con tono '` + tone + `'.</div>
            `;
        }, 1200);
    });

    // Toggle Follower growth Bot
    const btnToggleBot = document.getElementById('btn-toggle-bot');
    let botActive = true;
    btnToggleBot.addEventListener('click', () => {
        botActive = !botActive;
        if (botActive) {
            btnToggleBot.textContent = 'ACTIVADO';
            btnToggleBot.className = 'btn-success';
        } else {
            btnToggleBot.textContent = 'DESACTIVADO';
            btnToggleBot.className = 'btn-secondary';
        }

        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;
        document.getElementById('varego-telemetry').innerHTML += `
            <div class="log-line"><span class="log-time">[${timeStr}]</span> <span class="log-warn">SYSTEM:</span> Bot de seguidores ` + (botActive ? 'iniciado' : 'detenido') + `.</div>
        `;
    });
});