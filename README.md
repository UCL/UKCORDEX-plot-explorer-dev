# UKCORDEX-plot-explorer-dev

This repo is the development version of [the UKCORDEX Plot Explorer](https://github.com/UCL/UKCORDEX-plot-explorer). We use it to test new changes and make non-production releases to share at the end of each sprint with the research team for feedback.

You can see the latest deployed live version [here](https://github-pages.ucl.ac.uk/UKCORDEX-plot-explorer-dev/). Please note the latest version of the repo can be unstable as we might be carrying out work in progress.

To submit new feature requests or issue, please do so [in the production repository](https://github.com/UCL/UKCORDEX-plot-explorer/issues/new).

## Deploy website locally
```
npm install [--force]
npm start
```

Note `--force` might be needed when dependencies prevent the project from building, but it's preferable to investigate the dependency issues and resolve them avoiding force instal.

## Deployment to GitHub Pages
This repository is configured so that deployment occurs automatically when pushing changes to the repository. It's recommended this is always done as part of a pull request.
