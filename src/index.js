import React from 'react'
import { render } from 'react-dom'
import { hello } from './modules/helloworld'

import './assets/scss/style.scss'

hello()

const App = () => (
  <div>
    <h1>Hello Parcel!</h1>
    <p>Zero configuration is really great.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, aliquam et eligendi magni, fugiat harum! Amet reprehenderit ea, distinctio dicta molestias ab minima sed molestiae, officiis explicabo cumque perspiciatis inventore.</p>
  </div>
)

render(<App/>, document.querySelector('#app'))
