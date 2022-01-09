# Learn svg css

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Links

- Live Site URL: [Link](https://trinhlehainam.github.io/learn-svg/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

### What I learned
- Use stroke dash to animate svg path line.

``` css
.path {
    stroke-dasharray: 800;
    stroke-dashoffset: -800;
    transition: ease 2s;
}

.path:hover{
    stroke-dashoffset: 0;
    stroke-dasharray: 800;
} 
```

- Use svg grandient element.

```html/ jsx
<svg>
    <defs>
        <radialGradient id="my-gradient">
            <stop offset="0%" stopColor="#e66465" />
            <stop offset="100%" stopColor="#9198e5" />
        </radialGradient>
    </defs>
...
</svg>
```

- Clip path and clip path animation.

```css
.fill {
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
    transition: ease-in-out 0.5s;
}

.btn-base:hover .fill {
    clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
}
```

- How to add custom font-face to React App with CSS. Need to move font files to src/fonts/ folder.

```css
@font-face {
    font-family: "Odinson";
    src: url("../fonts/Odinson.ttf") format('truetype');
    font-weight: normal;
}
```

### Continued development

### Useful resources

- [svg line animation](https://css-tricks.com/svg-line-animation-works/) - This help to how to use animate svg line.
- [svg gradients](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Gradients) - This help to how to fill gradient color in svg.
- [clipPath](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath) - This help to how to use clip-path to clip images.
- [clipPath Animation](https://css-playground.com/view/65/clipping-paths-with-clip-path) - This help to how to use animate clip-path in svg.
- [add custom font to react](https://blog.greenroots.info/3-quick-ways-to-add-fonts-to-your-react-app) - This help to how to add custom front to my React Project.
- [Scale SVG](https://css-tricks.com/scale-svg/) - This help to how to SVG and fit to div box.

## Author

- GitHub - [@trinhlehainam](https://github.com/trinhlehainam)
- Twitter - [@namtrile](https://www.twitter.com/namtrile)

## Acknowledgments
