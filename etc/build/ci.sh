#!/bin/bash

set -e

_MAIN() {
  echo "_MAIN"

  if [[ $CI_STAGE_NAME = "BUILD" ]]; then
    echo "STAGE: BUILD"

    _STAGE_BUILD
  elif [[ $CI_STAGE_NAME = "TEST" ]]; then
    echo "STAGE: TEST"

    _STAGE_TEST
  elif [[ $CI_STAGE_NAME = "BUILD_DOCUMENTATION" ]]; then
    echo "STAGE: BUILD DOCUMENTATION"

    _STAGE_DOCUMENTATION
  else
    echo "UNKNOWN STAGE. EXIT!"
    exit 1
  fi
}


# ===============================================
# Stage Build
# ===============================================
_STAGE_BUILD() {
  FILE_PATH=$(find src/component/* -type f -mindepth 1 -maxdepth 2 -name "index.tsx")
  yarn run compile -- --customPath="$FILE_PATH"
}

# ===============================================
# Stage Build Documentation
# ===============================================
_STAGE_DOCUMENTATION() {
  yarn build-storybook
}


# ===============================================
# Stage Test
# ===============================================
_STAGE_TEST() {
  yarn run test
}

_MAIN "$@"; exit
