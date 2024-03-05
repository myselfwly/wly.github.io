import { FC } from "react";
import styled from "styled-components";
import { WorkInfoType } from "../../types";
interface TechSatckPropsType extends Pick<WorkInfoType, "techStack"> {}
/** */
export const TechSatck: FC<TechSatckPropsType> = ({ techStack }) => {
	return (
		<TechSatckWarpper>
			<p>{techStack.join(" ,")}</p>
		</TechSatckWarpper>
	);
};
//style_components
const TechSatckWarpper = styled.div`
	color: #8c8c8c;
	border-left: 4px solid #2196f3;
	background-color: #f0fdff;
	padding: 1px 20px;
	margin: 22px 0;
	transition: color 0.35s;
	&::after {
		display: block;
		content: "";
	}
	p {
		margin: 10px 0;
		line-height: inherit;
	}
`;
