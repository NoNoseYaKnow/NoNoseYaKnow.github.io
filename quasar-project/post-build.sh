#!/bin/bash

rm -r ../assets
rm ../index.html

mv ./dist/spa/assets ../assets
mv ./dist/spa/index.html ../index.html

