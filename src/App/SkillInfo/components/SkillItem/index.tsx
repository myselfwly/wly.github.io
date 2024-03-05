import { FC } from "react";
import styled from "styled-components";
import { SkillInfoType } from "../../types";
interface SkillItemPropsType {
	data: SkillInfoType[];
	level: number;
}
/** */
export const SkillItem: FC<SkillItemPropsType> = ({ data, level }) => {
	return (
		<SkillItemWarpper className={"level_" + level} $level={level}>
			{parseData(data, level)}
		</SkillItemWarpper>
	);
};

const SlillItemLi: FC<{ data: SkillInfoType; level: number }> = ({
	data,
	level,
}) => {
	return (
		<li className="contain">
			<div className="title">{data.title}</div>
			{!!data?.children?.length && (
				<div className={"children_skill"}>
					<SkillItem data={data.children} level={level + 1} />
				</div>
			)}
		</li>
	);
};
const parseData = (data: SkillInfoType[], level?: number) => {
	return data.map((item, index) => {
		return (
			<SlillItemLi data={item} level={level ?? 0} key={index + "_" + level} />
		);
	});
};
const getListStyle = (level: number) => {
	const listStyleLists = [
		"simp-chinese-informal",
		"decimal",
		"lower-latin",
		"upper-roman",
	];
	if (level + 1 >= listStyleLists.length) return "decimal";
	return listStyleLists[level];
};
//style_components
const SkillItemWarpper = styled.ol<{ $level: number }>`
	&:nth-child(n + 1) {
		margin-top: 14px;
	}
	width: 100%;
	&.${({ $level }) => "level_" + $level} {
		li {
			list-style: ${({ $level }) => getListStyle($level)};
			&:nth-child(n + 1) {
				margin-top: 8px;
			}
		}
		.contain {
			padding-left: ${({ $level }) => 48 - $level * 16}px;
		}
		.title {
			font-size: ${({ $level }) => {
				const res = 20 - $level * 4;
				return res < 12 ? 12 : res;
			}}px;
		}
	}
`;
