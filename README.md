# Cielo John Bareza

Personal site for Cielo John Bareza, software developer. One page: an introduction, selected work, skills, about, and contact.

All of the words live in [`content/site.ts`](content/site.ts). Edit that file to change the bio, work, skills, email, or profile links. Leave GitHub and LinkedIn empty until you have real profile URLs. Do not add a phone number or a home address.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Host it on Vercel

Vercel’s free Hobby plan is enough for this personal site.

1. Push this repository to GitHub.
2. Sign in at [vercel.com](https://vercel.com) with the same GitHub account.
3. Import the repository. The framework preset is Next.js. Leave the default build command (`npm run build`) and output settings as they are.
4. Deploy. Vercel assigns a public URL such as `your-project.vercel.app`.
5. Later pushes to the connected branch redeploy the site on their own.

### Custom domain

In the Vercel project, open **Settings → Domains**, add your domain, and set the DNS records Vercel shows you.

### Other hosts

Netlify and Cloudflare Pages can build a Next.js app as well. Use Vercel for this site.
