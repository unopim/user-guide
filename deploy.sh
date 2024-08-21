#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

echo 'docs.unopim.com' > CNAME

git init
git add -A
git commit -m 'chore: deploy docs to GitHub'
git push -f git@github.com:unopim/user-guide.git master:gh-pages

cd -
