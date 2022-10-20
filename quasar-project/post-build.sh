#!/bin/bash

rm -r ../assets
rm ../index.html
rm ../icons
rm ../favicon.ico

mv ./dist/spa/assets ../assets
mv ./dist/spa/index.html ../index.html
mv ./dist/spa/icons ../icons
mv ./dist/spa/favicon.ico ../favicon.ico

