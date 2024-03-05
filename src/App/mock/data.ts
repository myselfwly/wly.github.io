import { MainInfoType, OtherInfoType } from "../BaseInfo/types";
import { EductionType } from "../EductionInfo/types";
import { SkillInfoType } from "../SkillInfo/types";
import { WorkInfoType } from "../WorkInfo/types";
import yxxs from "src/asserts/images/yxxs.jpeg";
import yxgr from "src/asserts/images/yxgr.jpeg";
import jxj from "src/asserts/images/jxj.jpeg";
import dc from "src/asserts/images/dc.png";
import hlwj from "src/asserts/images/hlwj.jpeg";
export const getMainInfo = async (): Promise<BaseType<MainInfoType>> => {
	return await Promise.resolve({
		code: 0,
		data: {
			name: "王柳园",
			posts: "WEB 前端工程师",
		},
	});
};

export const getOtherInfo = async (): Promise<BaseType<OtherInfoType>> => {
	return await Promise.resolve({
		code: 0,
		data: {
			age: 25,
			eMail: "wangliuyuanperson@163.com",
			phone: 15680587919,
			address: "四川成都",
			blog: "https://juejin.cn/user/2186269944188333/posts",
			sourceCode: "",
			degree: "本科（全日制）",
		},
	});
};

export const getSkillInfo = async (): Promise<BaseType<SkillInfoType[]>> => {
	return await Promise.resolve({
		code: 0,
		data: [
			{
				title: "语言层",
				children: [
					{ title: "HTML CSS 掌握并熟练使用", children: [] },
					{
						title: "JS 熟练掌握",
						children: [
							{ title: "Event Loop (Message Loop) 机制理解透彻" },
							{ title: "上下文执行栈研究通透" },
							{ title: "对于存储机制理解透彻" },
						],
					},
					{
						title: "TS 熟练掌握",
						children: [
							{ title: "熟练掌握TS基础类型" },
							{ title: "TS 内置工具有自己的见解，有发布文章" },
						],
					},
				],
			},
			{
				title: "框架层",
				children: [
					{
						title: "React",
						children: [
							{ title: "React Hooks 精通" },
							{ title: "React Component 能够使用开发" },
						],
					},
					{
						title: "Vue",
						children: [
							{ title: "Vue2 能够使用开发" },
							{ title: "Vue3 能够使用开发" },
						],
					},
				],
			},
			{
				title: "工程化",
				children: [
					{ title: "Webpack 理解工作原理，可单独配置项目" },
					{
						title: "Babel 理解工作原理",
					},
					{
						title: "Prettier 能够在项目中配置实现Prettier",
					},
					{
						title: "ESlint 能够在项目中配置实现Prettier",
					},
					{
						title: "Git 理解Git的工作原理，并能够熟练使用Git进行协作开发",
					},
				],
			},
		],
	});
};

export const getWorkInfo = async (): Promise<BaseType<WorkInfoType[]>> => {
	return await Promise.resolve({
		code: 0,
		data: [
			{
				projectName: "SDC ME 租户平台",
				techStack: ["Vue2", "VueX", "axios"],
				startTime: "2021-07",
				endTime: "2021-10",
				description: `负责租户平台前段主程序员，设计开发租户的ME场景开发，三方应用接入开发，以及租户资源管理开发。`,
			},
			{
				projectName: "SDC BMS 用户管理系统",
				techStack: ["Vue3", "TS", "axios", "JSX", "antdv"],
				startTime: "2021-10",
				endTime: "2022-02",
				description: `负责用户管理系统中角色管理，日志管理，用户组管理，系统配置以及单点登录的开发，另外参与公司公共组件库的开发。`,
			},
			{
				projectName: "SDC MINER 人工智能平台",
				techStack: [
					"React Hook",
					"axios",
					"recoil",
					"webpack",
					"babel",
					"antd",
					"antv-x6",
					"TypeScript",
				],
				startTime: "2022-03",
				endTime: "2024-03",
				description:
					"担任人工智能平台的主程序员，参与员工培养，负责人工智能平台的架构设计，程序升级，程序开发等。开发内容包括但不限于数据源模块开发、资源模块开发、智能标注模块开发、服务模块开发、首页模块开发、交互式建模模块开发和可视化建模（DAG解析）模块开发。",
			},
			{
				projectName: "SDC LM 大模型平台",
				techStack: [
					"React Hook",
					"axios",
					"recoil",
					"webpack",
					"babel",
					"antd",
					"antv-x6",
					"TypeScript",
				],
				startTime: "2023-3",
				endTime: "2024-03",
				description:
					"担任大模型平台的主程序员，参与员工培养，负责大模型平台的架构设计，程序开发等。开发内容包括但不限于大模型训练模块开发、Prompt模块开发、知识库开发、应用编排（思维链）模块开发和AI对话（SSE）模块开发。",
			},
		],
	});
};

export const getEductionInfo = async (): Promise<BaseType<EductionType[]>> => {
	return await Promise.resolve({
		data: [
			{
				startTime: "2017-09",
				endTime: "2021-07",
				school: "西南民族大学",
				major: "网络工程",
				ranking: 9,
				awards: [
					{
						startTime: "2017-09",
						endTime: "2018-07",
						name: "优秀学生",
						image: yxxs,
					},
					{
						startTime: "2017-09",
						endTime: "2018-07",
						name: "三等奖学金",
						image: jxj,
					},
					{
						startTime: "2017-09",
						endTime: "2018-07",
						name: "优秀个人",
						image: yxgr,
					},
					{ startTime: "2017-09", endTime: "2018-07", name: "校团干先进个人" },
					// { startTime: "2018-09", endTime: "2019-07", name: "三等奖学金" },
					{
						startTime: "2019-09",
						endTime: "2020-07",
						name: "互联网+证书",
						image: hlwj,
					},
					{
						startTime: "2019-09",
						endTime: "2020-07",
						name: "全国大学生创新创业证书",
						image: dc,
					},
				],
			},
			{
				startTime: "2021-07",
				endTime: "2024-03",
				school: "成都四方为业",
				major: "WEB 前端工程师",
				awards: [
					{ startTime: "2021-07", endTime: "2021-12", name: "优秀管培生" },
					{
						startTime: "2022-01",
						endTime: "2022-12",
						name: "优秀管培生",
					},
				],
			},
		],
		code: 0,
	});
};

export const getHobbyInfo = async (): Promise<BaseType<string>> => {
	return {
		code: 0,
		data: "注重基础，喜欢研究，有比较开阔的思维，注重于将复杂问题简单化，透过现象看本质，一切复杂问题终究是简单问题的堆积，善于沟通思路清奇。",
	};
};

export type BaseType<T> = {
	data: T;
	code: number;
};
