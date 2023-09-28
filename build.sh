#!/bin/bash
set -e

# cleanup
rm -rf ./.tmp
rm -rf ./src
mkdir ./src
cp .openapi-generator-ignore ./src/.openapi-generator-ignore

# clone auth
mkdir ./.tmp
cd .tmp
git clone git@github.com:yaiam/denji.git
cd ..

# install tools
dotnet tool restore

# publish
dotnet publish ./.tmp/denji/src/Api/Api.csproj -o ./.tmp/denji/publish/ -c Release

# generate swagger.json
dotnet swagger tofile --output swagger.json ./.tmp/denji/publish/Api.dll public

# cleanup
rm -rf ./.tmp

# generate client
npm i
npm run build