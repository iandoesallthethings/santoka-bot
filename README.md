# Santōka Every Hour

A Mastodon bot that posts a random haiku by Santōka Taneda every hour.

## The Algo:
1. [Knuth shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)s (seeded) the list of all haiku on boot
2. Pickes a haiku based on the current hour
3. Posts to Bluesky, Mastodon, and Twitter if /haiku is called from an authenticated cron job.

At the moment, there are enough poems to last about 25 days. It just loops after that until the next month, then reshuffles.

## Credits
* Haiku written by [Taneda Santōka](https://en.wikipedia.org/wiki/Sant%C5%8Dka_Taneda).
* Collected by [Gábor Terebess](https://terebess.hu/english/haiku/taneda.html) and all his various sources.  
* Compiled/normalized by [Luca](https://photon.garden).
* Bot by [Ian](https://iandoesallthethings.com).

## Tech 
* Built with [Sveltekit](https://kit.svelte.dev/).
* Hosted with [Vercel](https://vercel.com/) cron jobs.
* Posts as [@santokabot@botsin.space](https://botsin.space/@santokabot).

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
* Pick an appropriate poem based on the weather in a location (find a way to trace where he walked in Japan and pick weather from there?)
* Reply to @'s with a contextually appropriate poem (RAG search or tags?)
* ~AI Santoka - Fine-tune an LLM to generate new haiku~ Eh, feels greasy.

## Buy me a coff- uhhh [serverless function](https://ko-fi.com/iandoesallthethings)
Cron jobs cost money. Not a lot, but some. If you like this bot and want me to make more, consider dropping a tip to help keep it (and sites like my portfolio, which helps me land gigs that buy me food and such) running. 

Any donations that exceed the price of Vercel Pro will probably go to the Trevor Project or Mermaids or something. Idk. Drop me a line if you have a suggestion.