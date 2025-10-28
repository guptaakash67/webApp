Quick Vercel deployment steps

1) Install Vercel CLI (if you want to deploy from your machine):

```powershell
npx vercel login
```

2) From the repository root, deploy only the `frontend` folder (recommended for this repo):

```powershell
npx vercel --cwd frontend
# or for production
npx vercel --cwd frontend --prod
```

Notes:
- The repo contains `vercel.json` that tells Vercel to build `frontend` with `@vercel/static-build` and serve the `dist/` folder.
- If you want to deploy backend/API routes to Vercel, we can convert `backend/server.js` to Vercel Serverless functions under an `api/` folder — tell me if you want that.
