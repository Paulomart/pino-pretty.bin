const { exec } = require('pkg');

const targetEnv = process.argv[2];
const output = targetEnv.includes('win') ? `bin/pino-pretty-${targetEnv}.exe` : `bin/pino-pretty-${targetEnv}`;

exec(['./node_modules/pino-pretty', '--target', targetEnv, '--output', output])
  .catch(console.error);
