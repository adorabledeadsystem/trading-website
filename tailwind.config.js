module.exports = {
  content: [
    "./src/**/*.jsx",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'media-h-840': { 'raw': '(max-height: 840px)' },
      'media-h-760': { 'raw': '(max-height: 760px)' },
      'media-h-700': { 'raw': '(max-height: 700px)' },
      'media-h-640': { 'raw': '(max-height: 640px)' },
    },
    colors: {
      'light': '#FFFFFF',
      'dark': '#666666',
      'primary': '#BC7C1B',
      'secondary': {
        1: '#F8F2E8',
        2: '#C99649'
      },
      'grey': '#737373',
      'grey-light': '#FAFAFA',
      'green': '#0E7465',
      'green-light': '#50A18E',
      'green-opacity': '#EBF6F4',
      'hover': '#2A7CC7',
      'disabled': '#8EC2F2',
      'muted': '#BDBDBD',
      'success': '#2DC071',
      'alert': '#E77C40',
      'danger': '#E74040',
      'main': '#7F67CE',

      // gray: { 
      //   25: '#FCFCFD',
      //   50: '#F9FAFB',
      //   100: '#F2F4F7',
      //   200: '#EAECF0',
      //   300: '#D0D5DD',
      //   400: '#98A2B3',
      //   500: '#667085',
      //   600: '#475467',
      //   700: '#344054',
      //   800: '#1D2939',
      //   900: '#101828',
      // },
      // primary: {
      //   25: '#FCFAFF',
      //   50: '#F9F5FF',
      //   100: '#F4EBFF',
      //   200: '#E9D7FE',
      //   300: '#D6BBFB',
      //   600: '#7F56D9',
      //   700: '#6941C6',
      // },
      success: {
        300: '#6CE9A6',
        500: '#6CE9A6',
      },
      error: {
        25: '#FFFBFA',
        50: '#FEF3F2',
        100: '#FEE4E2',
        300: '#FDA29B',
        500: '#F04438',
        700: '#B42318',
      }
      // white: '#FFFFFF',
      // black: '#000000',
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

