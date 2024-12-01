/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      /* MAIN */
      'primary'     : '#3456FF',
      'secondary'   : '#111643',
      /* ACCENT */
      'accent-1'    : '#800080',
      'accent-2'    : '#022277',
      'accent-3'    : '#F7F9FC',
      'accent-4'    : '#34B27D',
      'accent-5'    : '#121212',
      'accent-6'    : '#1E2431',
      /* NEUTRAL */
      'neutral-1'   : '#666666',
      'neutral-2'   : '#D6D6D6',
      'neutral-3'   : '#AAAAAA',
      'neutral-4'   : '#F5F7FA',
      'neutral-5'   : '#FDEDEE',
      'neutral-6'   : '#F6F8FB',
      'neutral-7'   : '#E2E2E2',
      'neutral-8'   : '#888888',
      'neutral-9'   : '#F3F5F8',
      'neutral-10'  : '#DBE0EB',
      /* FEEDBACK */
      'success'     : '#55BA45',
      'success-2'   : '#55BA45',
      'error'       : '#E90F0F',
      'error-2'     : '#FF5E5B',
      /* COMMON */
      'white'       : '#FFFFFF',
      'black'       : '#060D1A',
      'black-1'       : '#1E1E1E',
    },
    fontSize: {
      'small'   : '.625rem', // 10px
      'default' : '.75rem',  // 12px
      'medium'  : '.875rem', // 14px
      'big'     : '1rem',    // 16px
      'large'   : '1.125rem',// 18px
      'xl'      : '1.25rem', // 20px
      '2xl'     : '1.5rem',  // 24px
      '3xl'     : '1.875rem' // 30px
    },
    fontWeight: {
      'bold'   : 600,
      'medium' : 500,
      'regular': 400
    },
    fontFamily: {
      "Poppins": ["Poppins", 'sans-serif'],
    },
    spacing: {
      0: '0rem',
      1: '0.0625rem',  // 1px
      2: '0.125rem',   // 2px
      4: '0.25rem',    // 4px
      5: '0.313rem',   //5px
      6: '0.375rem',   // 6px
      8: '0.5rem',     // 8px
      10: '0.625rem',  // 10px
      12: '0.75rem',   // 12px
      14: '0.875rem',  // 14px
      15: '0.9375rem',  // 15px
      16: '1rem',      // 16px
      18: '1.125rem',  //18px
      20: '1.25rem',  // 20px
      22:'1.375rem', //22px
      24: '1.5rem',   // 24px
      26 : '1.625rem', //26px
      28: '1.75rem',  // 28px
      30: '1.875rem', //30px
      32: '2rem',     // 32px
      36: '2.25rem',  // 36px
      38: '2.375rem', //38px
      40: '2.5rem',   // 40px
      42: '2.625rem',   // 40px
      44: '2.75rem', // 44px
      46: '2.875rem', // 46px
      48: '3rem',   // 48px
      50: '3.125rem',  // 50px
      56: '3.5rem', // 56px
      60: '3.75rem', //60px
      64: '4rem',   // 64px
      75: '4.6875rem', //75px
      80: '5rem',   // 80px
      96: '6rem',   // 96px
      100: '6.25rem', // 100px
      112: '7rem',  // 112px
      128: '8rem',  // 128px
      144: '9rem',  // 144px
      150: '9.375rem', // 150px
      160: '10rem', // 160px
      176: '11rem', // 176px
      192: '12rem', // 192px
      200: '12.5rem', //200px
      208: '13rem', // 208px
      224: '14rem', // 224px
      240: '15rem', // 240px
      250: '15.625rem', //250px
      256: '16rem', // 256px
      288: '18rem', // 288px
      300: '18.75rem', //300px
      320: '20rem', // 320px
      350: '21.875rem', //350px
      384: '24rem', // 384px
      400: '25rem', //400px
    },
    screens: {
      'xs':'359px',
      // => @media (min-width: 375px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      'card-xl': '1318px',
      // => @media (min-width: 1318px) { ... }
      '2xl': '1360px',
      // => @media (min-width: 1360px) { ... }
      '3xl': '1440px',
      // => @media (min-width: 1440px) { ... }
      '4xl': '1600px',
      // => @media (min-width: 1600px) { ... }
      'card-4xl': '1644px',
      // => @media (min-width: 1644px) { ... }
      '5xl': '1920px',
      // => @media (min-width: 1920px) { ... }
      'card-5xl': '1975px',
      // => @media (min-width: 1976px) { ... }
    },

    extend: {
      borderRadius: {
        '4' : '0.25rem',  // border radius 4px
        '6' : '0.375rem', // 6px
        '10' : '0.625rem',// 10px
      },
    }
  },
  plugins: []
}