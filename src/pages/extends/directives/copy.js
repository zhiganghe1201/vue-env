const copy = {
	bind(el, { value }) {
		el.$value = value;
		el.handler = () => {
			if (!el.$value) {
				console.log('无复制内容');
				return;
			}
			// 动态创建 textarea 标签
			const textarea = document.createElement('textarea');
			// 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
			textarea.readOnly = 'readonly';
			textarea.style.position = 'absolute';
			textarea.style.left = '-99999px';
			// textarea.style.display = 'none';
			textarea.value = el.$value;
			document.body.appendChild(textarea);
			textarea.select();
			const result = document.execCommand('Copy');
			if (result) {
				console.log('复制成功');
			}
			document.body.removeChild(textarea);
		};
		el.addEventListener('click', el.handler);
	},
	componentUpdated(el, { value }) {
		el.$value = value;
	},
	unbind(el) {
		el.removeEventListener('click', el.handler);
	},
};

export default copy;
