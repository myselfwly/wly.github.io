import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { getSkillInfo } from "../mock/data";
import { SkillItem } from "./components/SkillItem";
import { SkillInfoType } from "./types";
import { Title } from "src/components/bussiness/Title";
interface SkillInfoPropsType {}
/**技能掌握 */
export const SkillInfo: FC<SkillInfoPropsType> = (props) => {
	const [skillData, setSkillData] = useState<SkillInfoType[]>([]);
	useEffect(() => {
		getSkillInfo().then(({ data }) => {
			setSkillData(data);
		});
	}, []);
	return (
		<SkillInfoWarpper>
			<Title title="技能掌握" />
			<div className="contain">
				<SkillItem data={skillData} level={0} />
			</div>
		</SkillInfoWarpper>
	);
};
//style_components
const SkillInfoWarpper = styled.div`
	width: 100%;
	height: fit-content;
	& > .contain {
		padding-top: 32px;
		padding-left: 48px;
	}
`;
