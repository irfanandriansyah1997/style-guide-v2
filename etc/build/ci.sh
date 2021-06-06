#!/bin/bash

set -e

FILE_PATH=$(find src/component/* -type f -mindepth 1 -maxdepth 2 -name "index.tsx")
yarn run compile -- --customPath="$FILE_PATH"
