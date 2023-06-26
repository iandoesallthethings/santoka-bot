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

## Buy me a coff- uhhh [server](https://ko-fi.com/iandoesallthethings)

Cron jobs cost money. Not a lot, but some. If you like this bot and want me to make more, consider dropping a tip to help keep it (and sites like my portfolio, which helps me land gigs that buy me food and such) running. Any donations that exceed the price of Vercel Pro will probably go to the Trevor Project or Mermaids or something. Idk. Drop me a line if you have a suggestion.
