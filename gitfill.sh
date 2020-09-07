#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 196 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 197 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 198 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 199 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 200 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 181 days ago" -m "codewars daily"
git push -u origin main


