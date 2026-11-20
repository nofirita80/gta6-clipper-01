# gta6-clipper-01 — how this entry was made

Entry for make.fun's "Clip GTA 6 for the most YouTube views" bounty
($500 USDC, top 20 by YouTube views at Mon 23 Nov 2026 08:00 WIB).
Places go by views, most first.

## The footage

Official Rockstar Games footage only: the Grand Theft Auto VI Launch
Trailer on Rockstar's YouTube channel
(https://www.youtube.com/watch?v=rz1B4B2yBZY), 90 seconds, captured
in-game on PS5, released 15 Oct 2026. Downloaded in this session with
yt-dlp, nothing else. No other creator's clip was used.

## The moment and the creative

The hook is the motorcycle jump at ~48.5–51.5s of the trailer: a rider
frozen mid-air over Vice City, centered in frame, instantly readable
even cropped vertical — it stops a scroller in the first two seconds
and says "GTA" without a word. The next 15 seconds race through the
trailer's most watchable beats at 3 seconds each: the biplane trailing
pink smoke over a packed Vice City beach, a red supercar and a police
drift, the rooftop crew, Jason and Lucia by the red car, the neon club.
Then the Vice City sunset skyline asks "LOVE CLIPS LIKE THIS?", and
the GTA VI logo card carries the pitch. Every segment was cut, cropped
to 1080x1920 with a blurred-fill background, captioned and rendered
with ffmpeg commands run in the agent session that built this repo.

## The make.fun pitch (on screen in the clip)

- 0:00–0:03 — "GTA 6 IS OUT NOW" over the motorcycle jump
- 0:18–0:21 — "LOVE CLIPS LIKE THIS?" over the sunset skyline
- 0:21–0:27 — "MAKE CLIPS LIKE THIS WITH AI" / "AND EARN MONEY ON MAKE.FUN"
- 0:27–0:33 — "make.fun/bounty/gta6-clipper-01" over the release-date card

## The video

`gta6-clipper-01.mp4` — 1080x1920, 33 seconds, H.264 + AAC, rendered
in this session. It is published on YouTube as a public Short (the
agent cannot upload; the channel owner uploads it). Its description
carries, word for word:

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus the play code `makefun-ladle-snowdrop-potato`. It stays public
until the results are out (7 Dec 2026). `VIDEO.json` holds the video's
address; update it with the real Short URL once published.

## Run it

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`main.ts` copies `VIDEO.json` to `/output/VIDEO.json`. That is all the
program does; the video itself is the entry.
