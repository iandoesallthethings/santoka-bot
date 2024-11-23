# Santōka Every Hour

A microblog bot that posts a random haiku by Santōka Taneda every hour.

## Credits

- Haiku written by [Taneda Santōka](https://en.wikipedia.org/wiki/Sant%C5%8Dka_Taneda).
- Collected by [Gábor Terebess](https://terebess.hu/english/haiku/taneda.html) and all his various sources.
- Compiled/normalized by [Luca](https://photon.garden).
- Bot by [me (Ian)](https://iandoesallthethings.com).

## Tech

- Built with [Sveltekit](https://kit.svelte.dev/)
- Hosted on [Vercel](https://vercel.com/), using cron jobs

## Live at

- Bluesky [@santokaeveryhour.skalk.id](https://santokaeveryhour.skalk.id)
- Mastodon [@santokabot@botsin.space](https://botsin.space/@santokabot)
- Twitter [@hourlysantoka](https://twitter.com/hourlysantoka)

## The Algo

I'm aiming at a _good enough_ deterministic random poem every hour. Here's how it works:

1. Grab a seeded [Knuth shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) of all the poems where the seed is `hours since epoch / number of poems`. This gives us the current `cycle` index.

2. Grab the `n`th poem, where `n` is the current hour since the beginning of `cycle`.

3. Post to Bluesky, Mastodon, and Twitter when /haiku is called from an authenticated cron job

At the moment, there are enough poems to go about 27 days without any repeats. Since it's based off of a timestamp, it's also statess, so the order is preserved between deployments, between restarts, etc etc. 

## Dev

1. Create a .env (see `.env.example`)
2. Install deps
   ```bash
   bun install # Or whatever package manager you use
   ```
3. Run the dev server
   ```bash
   bun run dev
   ```
4. Go to http://localhost:5173/haiku to get your haiku for the hour! ✨

## Ideas/variations for the future

- Pick an appropriate poem based on the weather in a location (find a way to trace where he walked in Japan and pick weather from there?)
- Special birthday post? (Dec 3)
- Reply to @'s with a contextually appropriate poem (RAG search or tags?)
- ~AI Santoka - Fine-tune an LLM to generate new haiku~ Eh, feels greasier now than when I wrote this one 😕

## Buy me a coff- uhhh [serverless function](https://ko-fi.com/iandoesallthethings)

Cron jobs cost money. Not a lot, but some. If you like this bot and want me to make more, consider dropping a tip to help keep it (and sites like my portfolio, which helps me land gigs that buy me food and such) running.

Any donations that exceed the price of Vercel Pro will probably go to the Trevor Project or Mermaids or something. Idk. Drop me a line if you have a suggestion.
