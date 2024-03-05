import { FC } from "react";
import styled from "styled-components";
import { EductionType } from "../../types";
interface RangeTimePropsType
	extends Pick<EductionType, "startTime" | "endTime"> {}
/** */
export const RangeTime: FC<RangeTimePropsType> = ({ startTime, endTime }) => {
	return (
		<RangeTimeWarpper>
			<div className="bottom_line"></div>
			<div className="textContain">
				{startTime} -- {endTime}
			</div>
		</RangeTimeWarpper>
	);
};
//style_components
const RangeTimeWarpper = styled.div`
	height: 100%;
	position: relative;
	.bottom_line {
		position: absolute;
		width: 100%;
		height: 4px;
		bottom: 0;
		background: #05a6ec;
		border-bottom-right-radius: 4px;
		border-top-right-radius: 4px;
	}
	.textContain {
		position: absolute;
		right: 4px;
	}
`;
