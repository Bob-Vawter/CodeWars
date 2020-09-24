#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 179 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 178 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 177 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 177 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 176 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 175 days ago" -m "codewars daily"
git push -u origin main


