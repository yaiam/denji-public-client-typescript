# Denji Public Client Typescript

## Generate client
```
dotnet tool restore
npm i
./build.sh
```

## Publish npm locally
```
cd src
npm i
npm run build
cd dist
npm link

cd my-project
npm link denji-public-client
```