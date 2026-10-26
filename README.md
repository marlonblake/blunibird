# blunibird

Poems, short stories, essays and quotes. React + Vite + React Router.

## Run it
```
npm install
npm run dev        # local site at http://localhost:5173
npm run build      # makes the dist/ folder to upload
```

## Where her words go
Everything she writes lives in **two files**, you never touch the pages:

| File | What it holds |
| --- | --- |
| `src/content/writing.js` | every poem, story, essay and quote (copy a block, paste at top, fill in) |
| `src/content/site.js` | her name, taglines, bio, email, socials, published-in list, your footer credit |

## Structure
```
src/
  App.jsx            routes + layout
  main.jsx           entry
  styles.css         all styling (colours are the variables at the top)
  content/           <- her writing and settings
  components/        Header, Footer, PieceRow
  pages/             Home, Collection (poems/stories/essays/quotes), Piece, About, Contact, NotFound
```

## Deploy
Netlify / Vercel / Cloudflare Pages: build command `npm run build`, publish folder `dist`.
`public/_redirects` already makes page links work on Netlify. On Vercel, add a rewrite of `/(.*)` to `/`.
