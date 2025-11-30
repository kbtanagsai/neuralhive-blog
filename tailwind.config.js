module.exports = {
  content: ["./pages//.{js,jsx}", "./components//.{js,jsx}", "./posts//*.{md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['ui-monospace','SFMono-Regular','Menlo','Monaco','monospace']
      },
      colors: {
        nh: { black: '#1b1b1b', warm: '#f3e9d2' }
      }
    }
  },
  plugins: []
}