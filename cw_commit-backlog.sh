#!/usr/bin/bash
touch test.txt
git add .
git commit --date ' 7 days ago' -m 'codewars daily'
git push
rm test.txt
git add .
git commit --date ' 6 days ago' -m 'codewars daily'
git push
touch test.txt
git add .
git commit --date ' 5 days ago' -m 'codewars daily'
git push
rm test.txt
git add .
git commit --date ' 4 days ago' -m 'codewars daily'
git push
touch test.txt
git add .
git commit --date ' 3 days ago' -m 'codewars daily'
git push
rm test.txt
git add .
git commit --date ' 2 days ago' -m 'codewars daily'
git push
touch test.txt
git add .
git commit --date ' 1 days ago' -m 'codewars daily'
git push
rm test.txt
git add .
git commit -m 'codewars daily'
git push
