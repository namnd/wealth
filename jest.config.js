module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    setupFiles: ['<rootDir>test/setup.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/index.tsx',
    ],
    coverageDirectory: '<rootDir>test/coverage',
};
