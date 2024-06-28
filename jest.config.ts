import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/test/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
}
export default config
