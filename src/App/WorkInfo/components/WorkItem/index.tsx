import { FC } from "react";
import styled from "styled-components";
import { WorkInfoType } from "../../types";
import { ProjectName } from "./ProjectName";
import { RangeTime } from "./RangeTime";
import { TechSatck } from "./TechSatck";
import { Description } from "./Description";
interface WorkItemPropsType {
	data: WorkInfoType;
}
/** */
export const WorkItem: FC<WorkItemPropsType> = ({
	data: { projectName, startTime, endTime, techStack, description },
}) => {
	return (
		<WorkItemWarpper>
			<div className="work name">
				<ProjectName projectName={projectName} />
			</div>
			<div className="work range">
				<RangeTime startTime={startTime} endTime={endTime} />
			</div>
			<div className="work tech">
				<TechSatck techStack={techStack} />
			</div>
			<div className="work description">
				<Description description={description} />
			</div>
		</WorkItemWarpper>
	);
};
//style_components
const WorkItemWarpper = styled.div`
	word-break: break-all;

	padding-top: 32px;
	&::before {
		grid-column: span 2;
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		box-shadow: 0px 3px 3px 0px #6e5353;
	}
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: auto;
	grid-template-areas:
		"name range"
		"tech tech"
		"desc desc";
	grid-row-gap: 8px;
	.work {
		margin-left: 32px;
		&.name {
			height: 48px;
			line-height: 48px;
			margin-left: 1rem;
			font-size: 18px;
			font-weight: 600;
			grid-area: name;
		}
		&.range {
			margin-left: 0;
			line-height: 48px;
			font-size: 18px;
			font-weight: 600;
			grid-area: range;
			text-align: end;
		}
		&.tech {
			grid-area: tech;
			height: fit-content;
		}
		&.description {
			grid-area: desc;
			text-indent: 2em;
			line-height: 1.75;
		}
	}
`;
