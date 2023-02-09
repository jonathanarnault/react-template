/**
 * Copyright (c) 2023 Jonathan ARNAULT
 *
 * For the full copyright and license information, please view the LICENSE file that was distributed with this source code.
 */

/**
 * The ESBuild otpions used for both build and test.
 */
export const commonOptions = {
    sourcemap: true,
    jsx: 'transform',
};

/**
 * The ESBuild compile options when build te App.
 */
export const buildOptions = {
    ...commonOptions,
    entryPoints: [
        './src/main.jsx',
    ],
    assetNames: 'assets/[name]-[hash]',
    loader: {
        '.png': 'file',
        '.jpg': 'file',
    },
    bundle: true,
    outdir: 'app',
    minify: true,
}

/**
 * The test compile options, used by ESBuild <-> Jest bridge.
 */
export const testOptions = {
    ...commonOptions,
    loader: {
        '.png': 'dataurl',
        '.jpg': 'dataurl',
    },
    format: 'cjs',
    loader: 'tsx',
};
