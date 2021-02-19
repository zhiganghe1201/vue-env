const domSymbol = Symbol('watermark-dom');

export function useWatermark(appendEl = document.body) {
	let func = () => { };
	const id = domSymbol.toString();
	let styleStr = '';

	const clear = () => {
		const domId = document.getElementById(id);
		if (domId) {
			const el = appendEl;
			el && el.removeChild(domId);
			window.removeEventListener('resize', func);
		}
	};

	const createWatermark = (str) => {
		clear();

		const can = document.createElement('canvas');
		can.width = 370;
		can.height = 240;

		const cans = can.getContext('2d');
		if (cans) {
			cans.rotate((-20 * Math.PI) / 120);
			cans.font = '15px Vedana';
			cans.fillStyle = 'rgba(0, 0, 0, 0.15)';
			cans.textAlign = 'left';
			cans.textBaseline = 'middle';
			cans.fillText(str, can.width / 2, can.height);
		}

		const div = document.createElement('div');
		div.id = id;
		styleStr = `
			position: absolute;
			top: 3px;
			left: 0px;
			z-index: 100000;
			pointer-events: none;
			width: ${document.documentElement.clientWidth}px;
			height: ${document.documentElement.clientHeight}px;
			background: url(${can.toDataURL()}) left top repeat;
		`;
		div.setAttribute('style', styleStr);
		const el = appendEl;
		el && el.appendChild(div);
		return id;
	};
	function setWatermark(str) {
		createWatermark(str);
		func = () => {
			setWatermark(str);
		};

		window.addEventListener('resize', func);

		// 防止通过控制台来去掉水印
		const MutationObserver = window.MutationObserver;
		if (MutationObserver) {
			const __wm = document.getElementById(id);
			let mo = new MutationObserver(function () {
				if ((__wm && __wm.getAttribute('style') !== styleStr) || !__wm) {
					mo.disconnect();
					mo = null;
					setWatermark(str);
				}
			});

			mo.observe(appendEl, {
				attributes: true,
				subtree: true,
				childList: true
			});
		}
	}

	return { setWatermark, clear };
}