// Drag-and-drop calendar/queue logic helper
function refreshQueueCalendar(posts) {
    const calendar = document.getElementById('queue-calendar');
    if (!calendar) return;
    calendar.innerHTML = '';
    
    posts.forEach(post => {
        const item = document.createElement('div');
        item.className = 'calendar-event-item';
        item.style.padding = '8px';
        item.style.margin = '4px 0';
        item.style.borderLeft = '4px solid #f59e0b';
        item.style.background = 'rgba(245, 158, 11, 0.05)';
        item.innerText = `[${post.status}] ${post.content.slice(0, 30)}...`;
        calendar.appendChild(item);
    });
}
