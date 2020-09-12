## Vue 编写规范

##### 1.【强制】单行代码不超过120。元素属性合理换行，尽量不超过120，像一些正则表达式除外。

##### 2.【强制】缩进规范。`tab-size`为4，统一采用`tab`缩进， 不可出现`space`缩进。

##### 3.【强制】空格规范。

1. 关键字前后留空格。
2. 对象的值前面留空格。
3. 操作符前后留空格。
4. 逗号后面留空格。
5. 大括号中前后留空格。

##### 4.【强制】文件规范。

1. 文件名全部采用连字符, 例：`xx-xx`。
2. 元素名称使用连字符分隔单词，自定义元素切勿使用保留字。

    1. `<el-button />` element组件使用
    2. `<sy-button />` 项目内部自定义组件使用, 本着已项目名称简写开头, 如: 市域 --> sy

3. 验证组件的 `props`。
4. 自定义事件属性名称 handle[]：如：`@change="handleChange"`。
5. 自定义方法名称 
    - 请求数据：load[],如：`:load-data="loadData"`。
    - 获取数据: get[], 
    - 设置数据: set[],
    - 其他【建议】: show[],hide[],toggle[]等

6. 自定义组件发射的事件名称不要带 `on-`。


##### 5.【强制】组件结构规范。
```html
<template>
</template>

<script>
import XXX from 'xxx';

export default {
	name: "v-tpl-basic",
	funtional: false,
	components: {
		'xxx': XXX,
	},
	filters: {},
	directives: {},
	mixins: [],
	model: {},
	data() {
		return {
		    xxx: ''
		};
	},
	computed: {
		
	},
	watch: {},
	beforeRouteEnter(to, from, next) {
		// 在渲染该组件的对应路由被 confirm 前调用
		// 不！能！获取组件实例 `this`
		// 因为当守卫执行前，组件实例还没被创建
	},
	beforeRouteUpdate(to, from, next) {
		// 在当前路由改变，但是该组件被复用时调用
		// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
		// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
		// 可以访问组件实例 `this`
	},
	beforeRouteLeave(to, from, next) {
		// 导航离开该组件的对应路由时调用
		// 可以访问组件实例 `this`
	},
	beforeCreate() {},
	created() {},
	beforeMount() {},
	mounted() {},
	beforeUpdate() {},
	updated() {},
	beforeDestroy() {},
	destroyed() {},
	activated() {},
	deactivated() {},
	errorCaptured() {},
	methods: {
	    loadData() {
	    },
		handleFn() {
			console.log(arguments);
		},
		async handleSave() {
			try {
				const { file, base64Image } = await this.$refs.target.getImage();
				this.result = base64Image;

			} catch (e) {
				console.log(e, "跨域问题：需要添加 cors协议头");
			}
		}
	},
	// render(h) { return null; },
};
</script>

<style lang="scss"> // 禁用scoped
.v-home {
    ._header {
    
    }
}

.v-home-order {
    ._header {
    
    }
}
</style>

```

##### 6.【强制】样式命名规范。尽量多使用全局样式。

1. 普通页面：`v-(路由简写)-(组件模块)`;`v-home-header`,内部：`_(模块)`;`_tabs`
2. 公用组件：`c-(功能)-（结构）`;`c-modal-header`,内部：`_(模块)`;`_tabs`
3. 全局样式：以 `g-` 开头，参考【@cci-team/sass】README.md

##### 7.【强制】开发规范。

1. ES6+语法。方法的定义采用箭头函数的形式等, 禁用`_this`。
2. 页面搜索条件加在`url`上，做到搜索、编辑、删除等操作界面合理。
3. 无用`console`请注释或删除。
4. 无用文件及时删除。
5. 及时处理`eslint`提示的错误和警告。


##### 8.【强制】协作规范。

 - 第三方库的引用必须申请
 - 切换分支时，必须关闭webpack服务
 - ...