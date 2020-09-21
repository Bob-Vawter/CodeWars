#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 182 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 183 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 184 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 185 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 186 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 195 days ago" -m "codewars daily"
git push -u origin main


