#!/usr/env/bin bash

rm -rf generate-out/node

# # show the available config params to build the config.yaml below
# docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli config-help \
#     -g nodejs-express-server

docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/generate/api-oas3.yaml \
    -c /local/generate/openapi-generator-config-node.yaml \
    -g nodejs-express-server \
    -o /local/generate-out/node

# cp generate-out/node/controllers/*.js src/controller
# cp generate-out/node/services/*.js src/service
# cp generate-out/node/utils/*.js src/utils

# echo "manually confirm the package.json files match"