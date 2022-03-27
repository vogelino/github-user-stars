# GitHub User Stars 2 CSV

This repo fetches starred repositories from a GitHub Users and outputs a CSV file.

I use this to export all my own starred repositories and then import them in a Notion table.

## Install

```sh
git clone git@github.com:vogelino/github-user-stars.git
cd github-user-stars
npm install
```

## Run

Before you run the scripts, open `githubStars.js` and modify the GitHub username in the last line. Then run:

```sh
npm run run
```

The results are the outputed in a file called `result.csv` in the repo's root.
