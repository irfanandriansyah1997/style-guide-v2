module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '!lib/*.js',
    '!src/*.svg',
    '!src/*.scss',
    '!src/*.less',
    '!lib/**/*.js',
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.mock.{js,jsx,ts,tsx}',
    '!src/**/interface/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/*storybook*.{js,jsx,ts,tsx}',
    '!src/**/storybook/*.{js,jsx,ts,tsx}',
    '!src/**/storybook/**/*.{js,jsx,ts,tsx}',
    '!src/component/**/constant/*.{js,jsx,ts,tsx}',
    '!src/**/*.constant.{js,jsx,ts,tsx}',
    '!.rollup.cache'
  ],
  coverageDirectory: '.jest_coverage/',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  globals: {
    IntersectionObserver: true,
    ResizeObserver: true,
    innerWidth: true
  },
  moduleFileExtensions: ['js', 'jsx', 'es6', 'ts', 'tsx'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest'
  },
  setupFilesAfterEnv: [
    './etc/jest/enzyme.config.ts',
    '@testing-library/jest-dom/extend-expect',
    'jest-canvas-mock'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    "@/atomic/(.*)$": "<rootDir>/src/component/atomic/$1",
    "@/molecules/(.*)$": "<rootDir>/src/component/molecules/$1",
    "@/organism/(.*)$": "<rootDir>/src/component/organism/$1",
    "@/helper/(.*)$": "<rootDir>/src/utils/helper/$1",
    "@/modules/(.*)$": "<rootDir>/src/utils/modules/$1",
    "@/constant/(.*)$": "<rootDir>/src/utils/constant/$1",
    "@/interface/(.*)$": "<rootDir>/src/utils/interface/$1",
    "@/assets/(.*)$": "<rootDir>/src/assets/$1",
    "@/utils/(.*)$": "<rootDir>/src/utils/$1",
    "@/style/(.*)$": "<rootDir>/src/style/$1",
    '@/repository/(.*)$': '<rootDir>/src/core/repository/$1',
    '@/(.*)$': '<rootDir>/./src/$1',
    'package.json': '<rootDir>/package.json'
},
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.es6$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules/']
};
