// https://blog.bitsrc.io/5-reasons-to-use-tailwind-css-with-react-native-1e7999c40b2e
// https://blog.nrwl.io/setup-next-js-to-use-tailwind-with-nx-849b7e21d8d0

module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
