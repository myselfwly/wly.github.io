import { FC } from "react";
import styled from "styled-components";
import { EductionType } from "../../types";
interface DetailPropsType extends Pick<EductionType, "major" | "ranking"> {}
/** */
export const Detail: FC<DetailPropsType> = ({ major, ranking }) => {
	return (
		<DetailWarpper>
			<div className="bottom_line"></div>
			<div className="textContain">
				<div className="major">{major}</div>
				{ranking && <div className="ranking">专业第{ranking}名</div>}
			</div>
		</DetailWarpper>
	);
};
//style_components
const DetailWarpper = styled.div`
	height: 100%;
	text-indent: 1rem;
	position: relative;
	.bottom_line {
		position: absolute;
		width: 100%;
		height: 4px;
		bottom: 0;
		background: #05a6ec;
	}
	.textContain {
		width: 100%;
		position: absolute;
		display: flex;
		z-index: 3;
		.ranking {
			margin-left: auto;
			margin-right: 0px;
		}
	}
`;
