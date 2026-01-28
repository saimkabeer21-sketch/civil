cd server
Remove-Item -Recurse -Force node_modules, bun.lock, package-lock.json -ErrorAction SilentlyContinue
npm install
npm run dev
