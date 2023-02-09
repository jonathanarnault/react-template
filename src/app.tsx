/**
 * Copyright (c) 2023 Jonathan ARNAULT
 *
 * For the full copyright and license information, please view the LICENSE file that was distributed with this source code.
 */

import React, { FunctionComponent, ReactElement } from 'react';
import ReactDOM from 'react-dom';

import './app.css';

/**
 * This is the app entrypoint.
 * 
 * @param       props       The app properties.
 * @returns     The React Application
 */
const App: FunctionComponent<{}> = ({ }: object): ReactElement => {
    return <>Hello World!</>
};

ReactDOM.render(<App />, document.body);
