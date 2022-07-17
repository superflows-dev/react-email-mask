# react-email-mask

> A react module that masks email addresses from any input string

[![NPM](https://img.shields.io/npm/v/react-email-mask.svg)](https://www.npmjs.com/package/react-email-mask) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-email-mask
```

## Usage

```jsx
import React from 'react'

import { maskEmail } from 'react-email-mask'
import 'react-email-mask/dist/index.css'

const App = () => {

  console.log(maskEmail('my email address is hello@abc.com, is your email address byebye@defgh.com?'));

  return <div>Hello Email Mask Helper</div>
}

export default App

```

## Output

my email address is h\*\*\*o@a\*c.com, is your email address b\*\*\*\*e@d\*\*\*h.com?



## License

MIT © [superflows-dev](https://github.com/superflows-dev)
