# Learn svg css

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![]()

### Links

- Live Site URL: [](https://trinhlehainam.github.io/tipcalculatorchallenge/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

### What I learned

- I learned how to use google font API.

```css
@import url(https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;600;700&display=swap);
```
- I learned how to use React context to pass global state to all children components.

```ts
// App.tsx
<InputContext.Provider value={inputContext}>
...
</InputContext.Provider>

// selectip.component.tsx
const { bill, setBill } = useContext(InputContext);
```

- I learned how to avoid bug when checking state's value.

```tsx
// from
setSelectedTip && customTip && setSelectedTip(customTip);
// to
setSelectedTip && (customTip !== undefined) && setSelectedTip(customTip);
```

- I learned how to set root path for Create React App build project correct by setting homepage attribule in package.json to '.'

```package.json
{
    ...
    "homepage": ".",
    ...
}
```

### Continued development

### Useful resources

- [svg line animation](https://css-tricks.com/svg-line-animation-works/) - This help to how to use animate svg line.
- [svg gradients](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Gradients) - This help to how to fill gradient color in svg.
- [clipPath](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath) - This help to how to use clip-path to clip images.
- [clipPath Animation](https://css-playground.com/view/65/clipping-paths-with-clip-path) - This help to how to use animate clip-path in svg.
- [add custom font to react](https://blog.greenroots.info/3-quick-ways-to-add-fonts-to-your-react-app) - This help to how to add custom front to my React Project.

## Author

- GitHub - [@trinhlehainam](https://github.com/trinhlehainam)
- Twitter - [@namtrile](https://www.twitter.com/namtrile)

## Acknowledgments
