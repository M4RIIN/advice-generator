module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-grayish-blue': '#323a49',
        'grayish-blue': '#4e5d73',
        'dark-blue':'#1f2632',
        'neon-green':'#52ffa8',
        'light-cyan' : '#cee3e9'
      },
      borderRadius: {
        'large': '20px',
      },
      fontFamily: {
        'manrope': ['Manrope']
      },
      fontSize: {
        '28': '28px',
      },
      height: {
        '0.1': '1px',
      }
  
    },
  },
  plugins: [],
}
