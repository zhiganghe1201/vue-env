<template>
	<cci-layout class="layout">
		<cci-layout-sider width="255" theme="light">
			<div class="logo">
				社会治理指数录入系统
			</div>
			<cci-menu
				mode="inline"
				theme="light"
				:default-selected-keys="['9']"
				:style="{ borderRight: 1 }"
				class="menu-wrap"
			>
				<cci-menu-item key="9">
					<router-link to="/tasklist">
						任务列表
					</router-link>
				</cci-menu-item>
				<cci-menu-item key="10">
					<router-link to="/taskmaintain">
						任务维护
					</router-link>
				</cci-menu-item>
				<cci-menu-item key="11">
					<router-link to="/approvallist">
						审批列表
					</router-link>
				</cci-menu-item>
				<cci-menu-item key="12">
					<router-link to="/advice">
						决策建议
					</router-link>
				</cci-menu-item>
			</cci-menu>
		</cci-layout-sider>
		<cci-layout>
			<cci-layout-header class="header">
				<div class="g-m-r-12">
					欢迎登陆
				</div>
				<div class="g-pointer">
					退出
				</div>
			</cci-layout-header>
			<cci-breadcrumb class="breadcrumb g-bg-white g-bt g-pd-l-8">
				<cci-breadcrumb-item v-for="it in matchedList" :key="it.path">
					<router-link :to="it.path">
						{{ it.title }}
					</router-link>					
				</cci-breadcrumb-item>
			</cci-breadcrumb>
			<cci-layout-content class="g-m-16 g-bg-white g-pd-24 g-relative">
				<router-view />
			</cci-layout-content>
		</cci-layout>
	</cci-layout>
</template>
<script>
import { Layout, Breadcrumb, Menu, Icon } from 'ant-design-vue';
import { deepClone } from 'lodash';

export default {
	name: 'page-layout',
	components: {
		'cci-layout': Layout,
		'cci-layout-header': Layout.Header,
		'cci-layout-sider': Layout.Sider,
		'cci-layout-content': Layout.Content,
		'cci-breadcrumb': Breadcrumb,
		'cci-breadcrumb-item': Breadcrumb.Item,
		'cci-menu': Menu,
		'cci-menu-item': Menu.Item,
		// 'cci-icon': Icon

	},
	data() {
		return {
			collapsed: false,
		};
	},
	computed: {
		matchedList() {
			return this.$route.meta.route;
		}
	},
	watch: {
	
	},
	mounted() {

	}
};
</script>

<style lang='scss'>
.layout {
	min-height: 100vh;
	.logo {
		background: #4271F3;
		color: #fff;
		font-size: 18px;
		line-height: 64px;
		padding-left: 24px;
		// text-align: center;
	}
	.menu-wrap {
		.ant-menu-item, .ant-menu-item-selected  {
			height: 50px !important;
			line-height: 50px;
			margin: 0;

		}
		.ant-menu-item-selected {
			background: #728DD8;
			a {
				color: #fff !important;
			}
		}
	}
	.ant-layout-header {
		padding: 0
	}
	.header {
		display: flex;
		justify-content: flex-end;
		color: #fff;
		background: #4271F3;
		padding-right: 16px;
	}
	.breadcrumb {
		height: 48px;
		line-height: 48px;
		padding-left: 16px
	}
}
</style>
