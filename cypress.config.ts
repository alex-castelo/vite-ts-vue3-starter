import { defineConfig } from 'cypress'

import { cucumberPlugin } from './cypress/plugins/cucumber'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents: cucumberPlugin,
    specPattern: '**/*.feature',
  },
})
