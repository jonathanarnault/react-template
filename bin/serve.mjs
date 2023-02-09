/**
 * Copyright (c) 2023 Jonathan ARNAULT
 *
 * For the full copyright and license information, please view the LICENSE file that was distributed with this source code.
 */

import { context } from 'esbuild';

import options from './_config.mjs';

(async () => {
    const ctx = await context(options);

    await ctx.serve({
        host: '127.0.0.1',
        port: 8080,
        servedir: 'app',
    });
})();
