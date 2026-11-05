-- Additive and repeatable. No player, aggregate or game data is removed.
CREATE TABLE IF NOT EXISTS players (
  player_id TEXT PRIMARY KEY,
  credential_hash TEXT NOT NULL UNIQUE,
  nickname TEXT NOT NULL,
  country_code TEXT NOT NULL DEFAULT 'UNKNOWN',
  first_seen_at INTEGER NOT NULL,
  last_seen_at INTEGER NOT NULL,
  visit_count INTEGER NOT NULL DEFAULT 0 CHECK(visit_count >= 0),
  sailing_ms INTEGER NOT NULL DEFAULT 0 CHECK(sailing_ms >= 0),
  accounted_until INTEGER NOT NULL DEFAULT 0
);
-- statement-breakpoint
CREATE TABLE IF NOT EXISTS daily_stats (
  date_kst TEXT PRIMARY KEY,
  total_visits INTEGER NOT NULL DEFAULT 0,
  unique_visitors INTEGER NOT NULL DEFAULT 0
);
-- statement-breakpoint
CREATE TABLE IF NOT EXISTS daily_visitors (
  date_kst TEXT NOT NULL,
  player_id TEXT NOT NULL REFERENCES players(player_id),
  PRIMARY KEY(date_kst, player_id)
);
-- statement-breakpoint
CREATE TABLE IF NOT EXISTS visit_sessions (
  session_id TEXT PRIMARY KEY,
  player_id TEXT NOT NULL REFERENCES players(player_id),
  date_kst TEXT NOT NULL,
  started_at INTEGER NOT NULL,
  last_seen_at INTEGER NOT NULL,
  ended_at INTEGER
);
-- statement-breakpoint
CREATE INDEX IF NOT EXISTS sea_sessions_player_seen ON visit_sessions(player_id, last_seen_at);
-- statement-breakpoint
CREATE INDEX IF NOT EXISTS sea_sessions_cleanup ON visit_sessions(last_seen_at);
-- statement-breakpoint
CREATE INDEX IF NOT EXISTS sea_players_sailing ON players(sailing_ms DESC, first_seen_at, player_id);
-- statement-breakpoint
CREATE INDEX IF NOT EXISTS sea_players_visits ON players(visit_count DESC, first_seen_at, player_id);
-- statement-breakpoint
CREATE TRIGGER IF NOT EXISTS sea_session_count AFTER INSERT ON visit_sessions BEGIN
  UPDATE players SET visit_count = visit_count + 1,
    last_seen_at = MAX(last_seen_at, NEW.started_at) WHERE player_id = NEW.player_id;
  INSERT INTO daily_stats(date_kst, total_visits) VALUES(NEW.date_kst, 1)
    ON CONFLICT(date_kst) DO UPDATE SET total_visits = total_visits + 1;
  INSERT OR IGNORE INTO daily_visitors(date_kst, player_id) VALUES(NEW.date_kst, NEW.player_id);
END;
-- statement-breakpoint
CREATE TRIGGER IF NOT EXISTS sea_unique_visitor_count AFTER INSERT ON daily_visitors BEGIN
  UPDATE daily_stats SET unique_visitors = unique_visitors + 1 WHERE date_kst = NEW.date_kst;
END;
