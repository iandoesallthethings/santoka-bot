# Santōka Every Hour
A Mastodon bot that posts a random haiku by Santōka Taneda every hour.

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
```

## Ideas/variations for the future
* Pick an appropriate poem based on the weather in a location (find a way to trace where he walked in Japan and pick weather from there?)
* Reply to @'s with a contextually appropriate poem (Using NLP)
* AI Santoka - Fine-tune an LLM to generate new haiku

## Buy me a coff- uhhh [serverless function](https://ko-fi.com/iandoesallthethings)
Cron jobs cost money. Not a lot, but some. If you like this bot and want me to make more, consider dropping a tip to help keep it (and sites like my portfolio, which helps me land gigs that buy me food and such) running. Any donations that exceed the price of Vercel Pro will probably go to the Trevor Project or Mermaids or something. Idk. Drop me a line if you have a suggestion.