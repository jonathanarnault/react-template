/**
 * Copyright (c) 2023 Jonathan ARNAULT
 *
 * For the full copyright and license information, please view the LICENSE file that was distributed with this source code.
 */

/** @type {require('jest').Config} */
export default {
    transform: {
        '(\\.[jt]sx|\\.css)?$': './bin/test.mjs',
    },
    testEnvironment: 'jsdom',
};
