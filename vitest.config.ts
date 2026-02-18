import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'
import {playwright} from '@vitest/browser-playwright'

export default defineConfig({
    plugins: [react()],
    test: {
        setupFiles: ['./vitest.setup.ts'],
        browser: {
            enabled: true,
            provider: playwright(),
            instances: [
                {
                    browser: 'chromium',
                    headless: true,
                },
            ],
        },
    },
})
