#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 163 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 162 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 161 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 160 days ago" -m "codewars daily"
git push -u origin main

touch test.txt
git add .
git commit --date " 159 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 158 days ago" -m "codewars daily"
git push -u origin main


