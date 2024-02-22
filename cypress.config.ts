import { defineConfig } from 'cypress'

import { cucumberPlugin } from './tests/e2e/plugins/cucumber'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents: cucumberPlugin,
    specPattern: '**/*.feature',
    supportFile: false,
  },
})
