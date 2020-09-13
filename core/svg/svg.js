const svg = ({ text1, text2 = '', height = 400, width = 800, font = '' }) => `
<svg fill="none" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
	<foreignObject width="100%" height="100%">
		<div xmlns="http://www.w3.org/1999/xhtml">
			<style>

			@font-face {
				font-family: 'un-abhaya';
				src:  url('../assets/fonts/UN-Abhaya.ttf');
			}
			@font-face {
				font-family: 'un-alakamanda';
				src:  url('../assets/fonts/UN-Alakamanda.ttf');
			}
			@font-face {
				font-family: 'un-arundathee';
				src:  url('../assets/fonts/UN-Arundathee.ttf');
			}
			@font-face {
				font-family: 'un-basuru';
				src:  url('../assets/fonts/UN-Basuru.ttf');
			}
			@font-face {
				font-family: 'un-bindumathi';
				src:  url('../assets/fonts/UN-Bindumathi.ttf');
			}
			@font-face {
				font-family: 'un-davasa';
				src:  url('../assets/fonts/UN-Davasa.ttf');
			}
			@font-face {
				font-family: 'un-derana';
				src:  url('../assets/fonts/UN-Derana.ttf');
			}
			@font-face {
				font-family: 'un-dharanee';
				src:  url('../assets/fonts/UN-Dharanee.ttf');
			}
			@font-face {
				font-family: 'un-disapamok';
				src:  url('../assets/fonts/UN-Disapamok.ttf');
			}
			@font-face {
				font-family: 'un-ganganee';
				src:  url('../assets/fonts/UN-Ganganee.ttf');
			}
			@font-face {
				font-family: 'un-gemunu';
				src:  url('../assets/fonts/UN-Gemunu.ttf');
			}
			@font-face {
				font-family: 'un-gurulugomi';
				src:  url('../assets/fonts/UN-Gurulugomi.ttf');
			}
			@font-face {
				font-family: 'un-imanee';
				src:  url('../assets/fonts/UN-Imanee.ttf');
			}
			@font-face {
				font-family: 'un-indeewaree';
				src:  url('../assets/fonts/UN-Indeewaree.ttf');
			}
			@font-face {
				font-family: 'un-isiwara';
				src:  url('../assets/fonts/UN-Isiwara.ttf');
			}
			@font-face {
				font-family: 'un-malithi';
				src:  url('../assets/fonts/UN-Malithi.ttf');
			}
			@font-face {
				font-family: 'un-rajantha';
				src:  url('../assets/fonts/UN-Rajantha.ttf');
			}
			@font-face {
				font-family: 'un-rashmi';
				src:  url('../assets/fonts/UN-Rashmi.ttf');
			}
			@font-face {
				font-family: 'un-samantha';
				src:  url('../assets/fonts/UN-Samantha.ttf');
			}
			@font-face {
				font-family: 'un-sandhyanee';
				src:  url('../assets/fonts/UN-Sandhyanee.ttf');
			}

			.container {
				font-family:
					${font},
					un-abhaya,
					system-ui,
					-apple-system,
					'Segoe UI',
					Roboto,
					Helvetica,
					Arial,
					sans-serif,
					'Apple Color Emoji',
					'Segoe UI Emoji';
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin: 0;
				width: 100%;
				height: ${height}px;
				background: #50000B;
				background-size: 600% 400%;
				animation: gradientBackground 10s ease infinite;
				border-radius: 10px;
				color: #FDBD49;
				text-align: center;
				text-shadow: 2px 2px 2px #000000;
			}
			.title {
				font-size: 10vh;
				line-height: 1.3;
				letter-spacing: 3px;
				text-transform: uppercase;
				font-weight: regular
			}
			p {
				font-size: 7vh;
			}
			</style>
			<div class="container">
				<p class="title	">${text1}</p>
				<p>${text2}</p>
			</div>
		</div>
	</foreignObject>
</svg>

`;

module.exports = svg;
