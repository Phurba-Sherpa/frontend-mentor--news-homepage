tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: 'hsl(35, 77%, 62%)',
          secondary: 'hsl(5, 85%, 63%)',
          blue: {
             light: 'hsl(233, 8%, 79%)',
            dark: 'hsl(236, 13%, 42%)',
            darker: 'hsl(240, 100%, 5%)'
          },
          white: {
            DEFAULT: 'hsl(36, 100%, 99%)'
          }
        },
        fontFamily: {
          'sans': ['"Inter var", sans-serif']
        },
        fontSize: {
          base: '1.06rem'
        },
        fontWeight: {
          400: '400',
          700: '700',
          800: '800'
        },
        gridTemplateRows: {
          '10': 'repeat(10, 5rem)'
        }
      
      },
    }
  }