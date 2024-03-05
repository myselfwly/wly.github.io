//APP.tsx
import { FC } from "react";
import styled from "styled-components";
import { BaseInfo } from "./BaseInfo";
import { SkillInfo } from "./SkillInfo";
import { WorkInfo } from "./WorkInfo";
import { EductionInfo } from "./EductionInfo";
import { HobbyInfo } from "./HobbyInfo";
const App: FC = () => {
	return (
		<AppWarpper className="resume_warpper">
			<div className="base info">
				<BaseInfo />
			</div>
			<div className="skill info">
				<SkillInfo />
			</div>
			<div className="work info">
				<WorkInfo />
			</div>
			<div className="eduction info">
				<EductionInfo />
			</div>
			<div className="hobby info">
				<HobbyInfo />
			</div>
		</AppWarpper>
	);
};
export default App;

const AppWarpper = styled.div`
	width: 100%;
	height: fit-content;
	background-color: #fff;
	padding: 3rem;
	.info {
		width: 100%;
		margin-top: 2rem;
		padding-bottom: 1rem;
		box-sizing: border-box;
		line-height: 1;
		&:first-child {
			margin-top: 0;
		}
		border-bottom: 2px solid #3a3a3a22;
		&:last-child {
			border: none;
			margin-bottom: 0;
		}
	}
`;
