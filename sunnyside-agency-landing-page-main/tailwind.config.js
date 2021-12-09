module.exports = {
  mode: 'jit',
  purge: [
    './docs/*.html',
    './src/style.css'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    },
    maxHeight: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    },
    zIndex: {
      '9999' : '9999'
    },
    height: {
      cover: '40rem'
    },
    extend: {
      left: {
        '17': '16.5rem'
      },
      contrast: ['hover', 'focus'],
      grayscale: {
        100: '100%',
      },
      fontFamily: {
        header: ["Fraunces", "sans-serif"],
        paragraph: ["Barlow", "sans-serif"],
      },
      colors: {
        "soft-red": "#fe7867",
        "bright-yellow": "#fad400",
        "desaturated-cyan": "#25564b",
        "dark-blue": "#19536b",
        "moderate-cyan": "#458c7e",
        "desaturated-blue": "#23303e",
        "darker-grayish-blue": "#5a636c",
        "dark-grayish-blue": "#818498",
        "grayish-blue": "#a7abae",
        "light-blue": "#71cffe",
        "footer-body": "#82c9bb",
      },
      backgroundImage: {
        "desktop-header": "url('./images/desktop/image-header.jpg')",
        "desktop-transform": "url('./images/desktop/image-transform.jpg')",
        "desktop-stand-out": "url('./images/desktop/image-stand-out.jpg')",
        "desktop-photography": "url('./images/desktop/image-photography.jpg')",
        "desktop-graphic-design": "url('./images/desktop/image-graphic-design.jpg')",
        "desktop-gallery-cone": "url('./images/desktop/image-gallery-cone.jpg')",
        "desktop-gallery-milkbottles": "url('./images/desktop/image-gallery-milkbottles.jpg')",
        "desktop-gallery-orange": "url('./images/desktop/image-gallery-orange.jpg')",
        "desktop-gallery-sugar-cubes": "url('./images/desktop/image-gallery-sugar-cubes.jpg')",
        "mobile-header": "url('./images/mobile/image-header.jpg')",
        "mobile-transform": "url('./images/mobile/image-transform.jpg')",
        "mobile-stand-out": "url('./images/mobile/image-stand-out.jpg')",
        "mobile-graphic-design": "url('./images/mobile/image-graphic-design.jpg')",
        "mobile-photography": "url('./images/mobile/image-photography.jpg')",
        "mobile-gallery-cone": "url('./images/mobile/image-gallery-cone.jpg')",
        "mobile-gallery-milkbottles": "url('./images/mobile/image-gallery-milkbottles.jpg')",
        "mobile-gallery-orange": "url('./images/mobile/image-gallery-orange.jpg')",
        "mobile-gallery-sugar-cubes": "url('./images/mobile/image-gallery-sugar-cubes.jpg')",

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
