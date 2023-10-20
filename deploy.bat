npm run build

cd dist

git init
git add -a
git commit -m "deployment script running. changes committed."
git push -f https://github.com/keltonlee7536/vue-resume.git main:deployment

cd -