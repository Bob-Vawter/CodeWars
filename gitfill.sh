#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 157 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 190 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 191 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 192 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 193 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 194 days ago" -m "codewars daily"
git push -u origin main


