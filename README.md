# Santōka Every Hour
A Mastodon bot that posts haiku by Santōka Taneda.


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

```bash
# Create a .env
MASTODON_URL=
MASTODON_TOKEN=
CRON_SECRET=

# Install deps
yarn install

# Run dev server
yarn dev

# Go here for a poem!
http://localhost:5173/haiku 
```
