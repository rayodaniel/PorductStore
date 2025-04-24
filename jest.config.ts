import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest',
    // Añade estas configuraciones clave:
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '^@core/(.*)$': '<rootDir>/src/core/$1',
      '^@shared/(.*)$': '<rootDir>/src/shared/$1',
      '^@app/(.*)$': '<rootDir>/src/app/$1',
      '^@tests/(.*)$': '<rootDir>/src/__tests__/$1'
    },
    
    // Opcional pero recomendado para TypeScript
    transform: {
      '^.+\\.(t|j)sx?$': ['ts-jest', {
        tsconfig: '<rootDir>/tsconfig.json',
        isolatedModules: true // Mejor rendimiento
      }]
    },
    
    // Extiende el tiempo de espera si es necesario
    testTimeout: 10000,
    
    // Ignora ciertos directorios
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/.next/'
    ]
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)