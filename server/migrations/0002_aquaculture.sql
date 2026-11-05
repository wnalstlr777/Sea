-- Additive aquaculture v1. No changes to existing player/statistics tables.
CREATE TABLE IF NOT EXISTS aqua_profiles (
 player_id TEXT PRIMARY KEY REFERENCES players(player_id),
 fry INTEGER NOT NULL DEFAULT 0 CHECK(fry BETWEEN 0 AND 5),
 tube_color INTEGER NOT NULL CHECK(tube_color BETWEEN 0 AND 5),
 tutorial INTEGER NOT NULL DEFAULT 0 CHECK(tutorial BETWEEN 0 AND 6)
);
-- statement-breakpoint
CREATE TABLE IF NOT EXISTS aqua_members (
 player_id TEXT PRIMARY KEY REFERENCES players(player_id),
 pen_id TEXT NOT NULL CHECK(pen_id IN ('A','B')),
 joined_at INTEGER NOT NULL,active_at INTEGER NOT NULL
);
-- statement-breakpoint
CREATE INDEX IF NOT EXISTS aqua_member_pen ON aqua_members(pen_id,active_at);
-- statement-breakpoint
CREATE TRIGGER IF NOT EXISTS aqua_member_capacity BEFORE INSERT ON aqua_members
 WHEN (SELECT COUNT(*) FROM aqua_members WHERE pen_id=NEW.pen_id)>=3
 BEGIN SELECT RAISE(ABORT,'Pen full'); END;
-- statement-breakpoint
CREATE TABLE IF NOT EXISTS aqua_cycles (
 cycle_id TEXT PRIMARY KEY,pen_id TEXT NOT NULL CHECK(pen_id IN ('A','B')),
 released_by TEXT NOT NULL REFERENCES players(player_id),
 started_at INTEGER NOT NULL,completes_at INTEGER NOT NULL,completed_at INTEGER,
 status TEXT NOT NULL CHECK(status IN ('active','complete'))
);
-- statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS aqua_one_active_cycle ON aqua_cycles(pen_id) WHERE status='active';
-- statement-breakpoint
CREATE TABLE IF NOT EXISTS aqua_feeds (
 cycle_id TEXT NOT NULL REFERENCES aqua_cycles(cycle_id),
 slot INTEGER NOT NULL CHECK(slot BETWEEN 1 AND 3),player_id TEXT NOT NULL REFERENCES players(player_id),
 fed_at INTEGER NOT NULL,PRIMARY KEY(cycle_id,slot)
);
-- statement-breakpoint
CREATE INDEX IF NOT EXISTS aqua_feed_player ON aqua_feeds(player_id,fed_at);
-- statement-breakpoint
CREATE TABLE IF NOT EXISTS aqua_rewards (
 cycle_id TEXT NOT NULL REFERENCES aqua_cycles(cycle_id),slot INTEGER NOT NULL,
 player_id TEXT NOT NULL REFERENCES players(player_id),fish_id TEXT NOT NULL,
 earned_at INTEGER NOT NULL,claimed_at INTEGER,PRIMARY KEY(cycle_id,slot)
);
-- statement-breakpoint
CREATE INDEX IF NOT EXISTS aqua_reward_player ON aqua_rewards(player_id,claimed_at);
-- statement-breakpoint
CREATE TABLE IF NOT EXISTS aqua_inventory (
 player_id TEXT NOT NULL REFERENCES players(player_id),fish_id TEXT NOT NULL,quantity INTEGER NOT NULL CHECK(quantity>0),
 first_obtained_at INTEGER NOT NULL,last_obtained_at INTEGER NOT NULL,PRIMARY KEY(player_id,fish_id)
);
-- statement-breakpoint
CREATE TABLE IF NOT EXISTS aqua_schools (school_id TEXT PRIMARY KEY,available_at INTEGER NOT NULL DEFAULT 0);
-- statement-breakpoint
INSERT OR IGNORE INTO aqua_schools(school_id) VALUES('s1'),('s2'),('s3'),('s4');
-- statement-breakpoint
CREATE TABLE IF NOT EXISTS aqua_collects (
 player_id TEXT PRIMARY KEY REFERENCES players(player_id),challenge_id TEXT NOT NULL UNIQUE,
 school_id TEXT NOT NULL,started_at INTEGER NOT NULL,expires_at INTEGER NOT NULL
);
-- statement-breakpoint
CREATE TABLE IF NOT EXISTS aqua_requests (
 actor TEXT NOT NULL,request_id TEXT NOT NULL,action TEXT NOT NULL,result TEXT NOT NULL,created_at INTEGER NOT NULL,
 PRIMARY KEY(actor,request_id)
);
