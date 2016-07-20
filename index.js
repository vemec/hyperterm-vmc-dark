
const foregroundColor = '#ebeef4'
const backgroundColor = '#151718'
const borderColor     = '#151718'
const cursorColor     = '#ff2727'
const colors = [
  backgroundColor,
  '#f94a8b', // pink
  '#ade244', // green
  '#fca644', // orange
  '#3a9cff', // blue
  '#9863f9', // purple
  '#27dfe5', // cyan
  '#fcfcfc', // white
  '#49483e', // brown gray
  '#f94a8b', // pink
  '#ade244', // green
  '#fca644', // orange
  '#9863f9', // purple
  '#3a9cff', // blue
  '#27dfe5', // cyan
  '#fcfcfc', // white
  foregroundColor
];

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		foregroundColor,
	    backgroundColor,
	    borderColor,
	    cursorColor,
	    colors,
		termCSS: `
			${config.termCSS || ''}
			.cursor-node {
				border-radius: 2px;
			}

			.cursor-node[focus=true]:not([moving]) {
				animation: fade 1.4s ease-in-out infinite;
		    }

			@keyframes fade {
				0%, 100% { opacity: 0 }
				50% { opacity: 1 }
			}
	    `,
		css: `
			${config.css || ''}

			.tabs_list {
		        background-color: #252d37 !important;
		        margin-top: 2px;
		    }

		    .header_header {
				background-color: #252d37 !important;
				border-top-left-radius: 0;
				border-top-right-radius: 0;
		    }

			.tab_tab span {
				border: 0;
			}

			.tab_tab.tab_active {
				background-color: ${backgroundColor};
				border-radius: 10px 10px 0 0;
			}

			.tab_tab.tab_active::before {
				border-bottom-color: ${backgroundColor};
			}
		`
	});
};
