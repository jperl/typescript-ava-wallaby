module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.ts',
      '!src/**/*.unit.ts',
      '!src/**/*.integration.ts',
    ],

    tests: [
      'src/**/*.unit.ts',
    ],

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript({ module: 'commonjs' }),
    },

    env: {
      type: 'node'
    },

    testFramework: 'ava',

    debug: true,
  };
};
