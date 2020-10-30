#!/usr/bin/env node

const program = require('commander')
const execa = require('execa')

program
  .command('doc', { isDefault: true })
  .description('Serve the viewer')
  .action(() => {
    execa.command(`npx tailwind-config-viewer -o`, {
      stdio: 'inherit',
    })
  })

program.parse(process.argv)
