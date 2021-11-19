This is a zero-dependency VueJS adaptation of Sam Herberts [SVG Loaders](https://github.com/SamHerbert/SVG-Loaders) 
library.
<br />
Inspired by [svg-loaders-react](https://github.com/ajwann/svg-loaders-react)

# Usage

## Install from NPM
```bash
npm install svg-loaders-vue
```

## Import the SVGLoaders components

### Import  loader
```js
import { Bars } from 'svg-loaders-vue'
```
and use it
```js
<Bars />
```

## Components

```<Audio />```

```<BallTriangle />```

```<Bars />```

```<Circles />```

```<Grid />```

```<Hearts />```

```<Oval />```

```<Puff />```

```<Rings />```

```<SpinningCircles />```

```<TailSpin />```

```<ThreeDots />```

# Props

To adjust the size, pass `height` and `width` property with desired value.
Any other properties passed to the component will be automatically applied. 
<br />Check [SVG Presentation Attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 
for customizing the SVG.

# Example Usage
```vue
<Puff stroke="green" />

<Bars :height="60" />

<Circles :height="48" fill="red" />
```

### To Do
- Unit Test



