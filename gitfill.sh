#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 206 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 205 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 204 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 203 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 202 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 201 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 200 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 199 days ago" -m "codewars daily"
git push -u origin main
