#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "deployment script running. changes committed."
git push -f https://github.com/keltonlee7536/vue-resume.git master:gh-pages

cd -