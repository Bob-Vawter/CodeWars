#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 174 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 173 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 172 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 171 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 170 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 169 days ago" -m "codewars daily"
git push -u origin main


