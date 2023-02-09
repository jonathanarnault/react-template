/**
 * Copyright (c) 2023 Jonathan ARNAULT
 *
 * For the full copyright and license information, please view the LICENSE file that was distributed with this source code.
 */

import React from 'react';
import type { FunctionComponent, ReactElement } from 'react';

import './index.css';
import logo from './logo.png';

/**
 * @param       props       The logo properties.
 * @returns     The React Element
 */
export const Logo: FunctionComponent<{}> = ({ }: object): ReactElement => {
    return <img src={logo} />
};
