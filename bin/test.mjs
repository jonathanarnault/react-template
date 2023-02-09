/**
 * Copyright (c) 2023 Jonathan ARNAULT
 *
 * For the full copyright and license information, please view the LICENSE file that was distributed with this source code.
 */

import path from 'node:path';

import { transformSync } from 'esbuild';

import { testOptions } from './_config.mjs';

const srcDir = path.dirname(new URL('.', import.meta.url).toString()).slice(7) + '/src';

export const process = (sourceText, sourcePath) => {
    if (sourcePath.endsWith('.tsx')) {
        try {
            return transformSync(sourceText, testOptions);
        } catch (e) {
            console.error(`Failed to process test file "${sourcePath}": ${e}`);
        }
    }

    return {
        code: `module.exports = "${sourcePath.slice(srcDir.length)}";`,
        map: '',
    };
};

export const createTransformer = () => {
    return {
        process
    };
};

export default {
    createTransformer,
    process,
};
