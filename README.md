# Movie Reviews Website — Next.js + Tailwind + TMDB

> Built June 2023 concept, implemented with modern Next.js App Router, server-side rendering, Tailwind CSS, dark mode, search, trending & top-rated, and rich details pages for Movies and TV.

## Quickstart

1. **Create a TMDB API Read Access Token (v4)** at https://www.themoviedb.org/settings/api
2. **Copy `.env.example` to `.env.local`** and paste your token.

```bash
cp .env.example .env.local
# edit .env.local and set TMDB_READ_TOKEN="<<YOUR V4 READ TOKEN>>"
```

3. **Install & run**

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Tech

- Next.js 14 App Router (SSR by default, with per-page revalidation)
- Tailwind CSS 3, dark mode via `next-themes`
- TMDB API (trending, top-rated, search, details with credits & recommendations)
- Image Optimization for TMDB images
- TypeScript ready

## Notes

- This app reads from TMDB on the server. Your token is **not exposed** to the browser.
- UI aims to be clean, IMDB-like, with tabs for Trending/Top Rated and a search box in the header.
- Feel free to customize styles, add reviews/ratings storage, or hook in a database for user reviews.
