const fs = require('fs')
const childProcess = require('child_process')

childProcess.execSync('npm run build', {stdio: 'inherit'})

fs.copyFileSync('./dist/index.html', './dist/404.html')

childProcess.execSync('git add -A && git commit -m"new build"', {stdio: 'inherit'})
childProcess.execSync('git subtree push --prefix dist origin gh-pages', {stdio: 'inherit'})