# ByteSpace

ByteSpace is a responsive course marketplace frontend built with HTML, CSS, and JavaScript. It has no build step or npm package dependencies.

## Run locally

You need Node.js and npm. From the project folder, run:

```sh
npm run dev
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173) in your browser. The local server serves the site files and sends client-side routes back to `index.html`.

To stop the server, press `Ctrl+C` in the terminal. You can also start it with `npm start`.

## Pages

| URL | Page |
| --- | --- |
| `/` | Home |
| `/search` | Course search |
| `/course/build-digital-assets` | Course overview |
| `/course/build-digital-assets/lessons` | Course lessons |
| `/course/build-digital-assets/reviews` | Course reviews |
| `/creator/purepearl-studio` | Creator profile |
| `/login` | Sign in |
| `/register` | Create an account |

## Deploy on Vercel

### 1. Push the project to GitHub

If the project is already in a GitHub repository, continue to the next step. Otherwise, create an empty repository on GitHub, then run these commands from the ByteSpace project folder. Replace `OWNER/REPOSITORY` with the path to that repository.

```sh
git add .
git commit -m "Add ByteSpace frontend"
git branch -M main
git remote add origin https://github.com/OWNER/REPOSITORY.git
git push -u origin main
```

### 2. Import the repository in Vercel

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
2. Select **Add New → Project**.
3. Find the ByteSpace repository and select **Import**. If it is missing, grant Vercel access to that GitHub repository.
4. Use these project settings:

   | Setting | Value |
   | --- | --- |
   | Framework Preset | Other |
   | Root Directory | `.` (the folder containing `index.html`) |
   | Build Command | Leave blank |
   | Output Directory | `.` |
   | Install Command | Leave the default |

   This is a static site, so Vercel does not need to compile or bundle it. No environment variables are required.

5. Select **Deploy** and wait for the deployment to finish.
6. Open the Vercel URL shown on the deployment page.

### 3. Check direct links

Open a course page and refresh it, for example:

```text
https://YOUR-PROJECT.vercel.app/course/build-digital-assets/reviews
```

The root `vercel.json` rewrites client-side routes to `index.html`, so links such as `/login` and `/course/.../reviews` continue to work when opened directly or refreshed.

### Future updates

Vercel deploys a preview for pull requests and branches. A push or merge to the project's Production Branch (commonly `main`) creates a production deployment. See [Vercel's Git deployment guide](https://vercel.com/docs/git).

### Deploy from the terminal instead

You can deploy without importing GitHub through the dashboard. From the project folder, install the Vercel CLI and follow its prompts:

```sh
npm install --global vercel
vercel login
vercel link
vercel
vercel --prod
```

`vercel` creates a preview deployment; `vercel --prod` deploys to production. The generated `.vercel` project folder is ignored by Git.

For current build and routing options, see [Vercel Builds](https://vercel.com/docs/builds) and [Vercel rewrites](https://vercel.com/docs/project-configuration/vercel-json#rewrites).
