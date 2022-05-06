module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        ligtRed: 'hsl(356, 100%, 66%)',
        veryLightRed: 'hsl(355, 100%, 74%)',
        veryLightRedNav: 'hsl(355, 100%, 95%)',
        veryDarkBlue: 'hsl(208, 49%, 24%)',
        'veryDarkBlue-600': 'hsl(208, 49%, 45%)',
        grayishBlue: 'hsl(240, 2%, 79%)',
        veryDarkGrayishBlue: 'hsl(207, 13%, 34%)',
        veryDarkBlackBlue: 'hsl(240, 10%, 16%)',
        introGradientLightRed: 'hsl(353, 100%, 62%)',
        introGradientVeryLightRed: 'hsl(13, 100%, 72%)',
        bodyGradientVeryDarkGrayBlue: 'hsl(237, 17%, 21%)',
        bodyGradientVeryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)'
      },
    },
  },
  plugins: [],
}
