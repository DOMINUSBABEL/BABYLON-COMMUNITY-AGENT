CREATE TABLE IF NOT EXISTS scheduled_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    platform TEXT NOT NULL,
    status TEXT DEFAULT 'Queued',
    scheduled_at TIMESTAMP,
    published_at TIMESTAMP
);
CREATE TABLE IF NOT EXISTS followers_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    platform TEXT NOT NULL,
    count INTEGER NOT NULL,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);