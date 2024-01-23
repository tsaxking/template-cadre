npx prettier . --write &&
deno fmt . &&
npx eslint **/*.ts --ignore-pattern ./node_modules/ --ignore-pattern **/*.js --ignore-pattern ./dist/ &&
deno test --unstable --allow-all --no-check &&
deno check **/*.ts