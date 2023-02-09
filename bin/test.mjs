/**
 * Copyright (c) 2023 Jonathan ARNAULT
 *
 * For the full copyright and license information, please view the LICENSE file that was distributed with this source code.
 */

import { transform, transformSync } from 'esbuild';

import { testOptions } from './_config.mjs';

export const process = (sourceText, sourcePath) => {
    if (sourcePath.endsWith('.css')) {
        return { code: 'module.exports = {};', map: '' };
    }

    console.log(`Processing test file: ${sourcePath}`);
    return transformSync(sourceText, testOptions);
};

export const createTransformer = () => {
    return {
        process,
    };
};

export default {
    createTransformer,
    process,
};
