module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
			arial: [
				'Arial',
				'sans-serif'
			],
  			poppins: [
  				'poppins',
  				'sans-serif'
  			],
  			bricolage: [
  				'Bricolage Grotesque',
  				'sans-serif'
  			],
  			helvetica: [
  				'helvetica',
  				'sans-serif'
  			],
  			geist: [
  				'geist',
  				'sans-serif'
  			]
  		},
  		screens: {
  			qy: '575px',
  			xs: '480px',
  			ss: '632px',
  			sm: '768px',
  			md: '940px',
  			xl: '1200px'
  		},
		aspectRatio: {
        '9/16': '9 / 16',
      },
  	}
  },
  plugins: [],
};
