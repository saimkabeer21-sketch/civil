cd client
Remove-Item -Recurse -Force node_modules, bun.lock, package-lock.json -ErrorAction SilentlyContinue
npm install
npm run dev -- --port 3000
