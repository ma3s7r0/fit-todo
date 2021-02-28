import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// loads the config from the .env file
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '../../.env' })

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
)
