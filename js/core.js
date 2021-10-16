function main(config) {
	if (!window.app) {
		window.app = {}
	}
	const app = window.app;
	app.config = config;
	app.f = {
		selectSubject: function (subject) {
			const $viewer = document.getElementById('viewer-' + subject);
			$viewer.classList.remove('hide');
		},
		initViewer: function () {

		},
		initNavbar: function () {
			const $nav = document.getElementById('navbar');
			for (const subject of Object.keys(app.config.subjects)) {
				const $btn = document.createElement('button')
				$btn.innerHTML = subject;
				$btn.id = 'nav-button-' + subject;
				$btn.classList = ['nav-button'];
				$btn.onclick = () => app.f.selectSubject(subject);
				$nav.appendChild($btn);
			}
		}
	};
	app.f.initViewer();
	app.f.initNavbar();
}
axios.get('./config.json')
	.then(function (res) {
		main(res.data);
	});