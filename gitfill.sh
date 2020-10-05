#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 168 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 167 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 166 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 165 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 164 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 169 days ago" -m "codewars daily"
git push -u origin main


