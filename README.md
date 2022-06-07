# AMC

## Local server
Run `npm install`
change directory to client and Run `npm install` and
Run `npm run build` in folder base path and
Run `npm run start` to start the local server, Navigate to `http://localhost:3000/`

## Client Environment API Path for local to prod URL
go to client/src/environment/environment.ts change the ApiUrl `http://localhost:3000` to prod URL
Run `npm run build` in folder base path, dist will be generated with prod URL path