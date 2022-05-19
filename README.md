# UKCORDEX plot explorer - development version

This repo contains the development version of [the UKCORDEX Plot Explorer](https://github.com/UCL/UKCORDEX-plot-explorer). We use it to test new changes and make non-production releases to share at the end of each sprint with the research team for feedback.

You can see the latest deployed live version of this repository [here](https://github-pages.ucl.ac.uk/UKCORDEX-plot-explorer-dev/). Please note the latest version of this repo can be unstable as we might be carrying out work in progress.

To submit new feature requests or issues, please do so [in the production repository](https://github.com/UCL/UKCORDEX-plot-explorer/issues/new). Issues are disabled on this one.

## Development guide

### Dependencies
This website is built using React. You will need:

* npm (Last tested with npm 8.0.0)

This project has the following dependencies:
* create-react-app
* react-select
* react-bootstrap
* gh-pages
* file-saver
* react-katex
* react-router

### Continuous Integration and Deployment

There are [3 GH Actions workflows](https://github.com/UCL/UKCORDEX-plot-explorer-dev/tree/development/.github/workflows) configured:
* Build and test: Builds the app and runs test for 3 different versions of node
* Deploy to development: Builds the app and deploys to the development URL (https://github-pages.ucl.ac.uk/UKCORDEX-plot-explorer-dev)
* Deploy to production: Builds the app and deploys to the production URL (https://github-pages.ucl.ac.uk/UKCORDEX-plot-explorer)

For CD we are using [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action).

We are using [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action) to deploy automatically using GH Actions, and [the npm gh-pages module](https://github.com/tschaub/gh-pages) to deploy

### Workflow guidelines
To work on a new feature or bug fix, please do as follows:
1. Create a new branch, e.g. `feature/about_us_section`.
2. Create a new draft pull request to the `development` branch. For every new push to the branch, the pull request will trigger the build, test and deploy GH actions, showing the deployed website in the development URL.
3. Once you are happy with your changes, mark your draft pull request as "ready to review" and assign at least one reviewer.
4. Reviewers will give comments or approve the request, which might require new changes to be done, pushed and, in turn, get tested and deployed.
5. Once the pull request is approved, merge and delete the branch.
6. A new push to the `development` branch arising from the pull request merge will trigger another automatic build, test and deployment, but this time it will be done to the production URL too.

Please note sometimes GH Pages deployment takes a long time. Deployment typically happens in under 10 minutes, but sometimes it's taken around 20-25.

### Working locally
It's nice to have an automated workflow that builds, tests and deploys, but sometimes we need to see the deployed results quicker on our own local machine.

To install all dependencies, build the website and deploy locally:
```
npm install [--force]
npm start
```

You should see now a message in your console indicating your web is being
deployed in localhost:3000 (or different port if 3000 is busy). Note that you don't need to kill this process and deploy it again if you want to work on changes to the code - they will update in the locally deployed app immediately after saving.

Also note `--force` might be needed when dependencies prevent the project from building, but it's preferable to investigate the dependency issues with `npm audit` and resolve them avoiding force instal.

To run tests:
```
npm ci
```

To deploy to GitHub Pages we use [the npm gh-pages module](https://github.com/tschaub/gh-pages):
```
npm run deploy
```

### Troubleshooting
#### If gh-pages doesn't appear to work
New changes to a GitHub Pages website can take time to propagate, so you might not be your latest changes right away. 

Sometimes there's a message [in the GH Pages settings](https://github.com/UCL/UKCORDEX-plot-explorer-dev/settings/pages) indicating that the website is ready to be deployed. This means it's still queueing, but should be deployed soon. Shortly after and without the need for reloading the page, GitHub should show a message saying the website is published. It might still take further time until the new changes are propagated, though. From experience it's take anywhere from a couple seconds to 20-25 minutes.

If GitHub still doesn't seem to be deploying the latest changes correctly, you can try the following:
1. Create a `deploy` version of your `feature` or `bugfix` branch with the same content.
1. Run
    ```
    npm build 
    ```
1. This would have created a build directory, which contents are what gets deployed to the `gh-pages` branch.
1. Go to the GitHub repository and find "Settings" -> "Pages".
1. Choose to publish the new `deploy` branch you have just created.
1. You might need to wait a few minutes for the changes to propagate.

#### Track deployment to development
When there's a new push to a working branch in a pull request, the GH actions to build, test and deploy to the development URL are triggered:
1.  Go to [the actions tab on the development repository](https://github.com/UCL/UKCORDEX-plot-explorer-dev/actions) and click on the workflows being run now
2.  Look into the log from the action to see how it's going.
3.  Go to [the `gh-pages` branch](https://github.com/UCL/UKCORDEX-plot-explorer-dev/tree/gh-pages) to see if your last changes are there.
4.  Check [the GH Pages settings](https://github.com/UCL/UKCORDEX-plot-explorer-dev/settings/pages) to see if the message says the website was already published, and remember to give some time to GitHub to propagate the new changes in [the development URL](https://github-pages.ucl.ac.uk/UKCORDEX-plot-explorer-dev).

#### Track deployment to production
When a pull request is merged to `development` this triggers a deployment to the production URL. In order to follow the GH Actions run, you can:
1. Go to [the actions tab on the development repository](https://github.com/UCL/UKCORDEX-plot-explorer-dev/actions) and click on the merge that's currently running.
2. That should now show you [these 3 actions](./README.md#continuous-integration-and-deployment) being run. 
3. Click on the one that's doing the development to production to see its progress. 
4. Go to [the action's tab in the production repo](ttps://github.com/UCL/UKCORDEX-plot-explorer/actions). It should show an action doing the deployment to production.
5. Go to [the `gh-pages` branch](https://github.com/UCL/UKCORDEX-plot-explorer/tree/gh-pages) in the production repo to see if your last changes are there.
6. Check [the GH Pages settings](https://github.com/UCL/UKCORDEX-plot-explorer-dev/settings/pages) in the production repo to see if the message says the website was already published, and remember to give some time to GitHub to propagate the new changes in [the production URL](https://github-pages.ucl.ac.uk/UKCORDEX-plot-explorer-dev).
