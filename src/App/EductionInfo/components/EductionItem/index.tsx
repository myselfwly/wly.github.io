import { FC } from "react";
import styled from "styled-components";
import { SchoolName } from "./SchoolName";
import { EductionType } from "../../types";
import { Detail } from "./Detail";
import { RangeTime } from "./RangeTime";
import { Awards } from "./Awards";
interface EductionItemPropsType {
	data: EductionType;
}
/** */
export const EductionItem: FC<EductionItemPropsType> = ({
	data: { school, endTime, startTime, ranking, major, awards },
}) => {
	return (
		<EductionItemWarpper>
			<div className="eduction name">
				<SchoolName school={school} />
			</div>
			<div className="eduction detail">
				<Detail ranking={ranking} major={major} />
			</div>
			<div className="eduction range">
				<RangeTime endTime={endTime} startTime={startTime} />
			</div>
			<div className="eduction awards">
				<Awards awards={awards} />
			</div>
		</EductionItemWarpper>
	);
};
//style_components
const EductionItemWarpper = styled.div`
	word-break: break-all;
	padding-top: 32px;
	&::before {
		grid-column: span 3;
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		box-shadow: 0px 3px 3px 0px #6e5353;
	}
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-auto-rows: auto;
	grid-template-areas:
		"name detail range"
		"awards awards awards";
	grid-row-gap: 8px;
	.eduction {
		margin-left: 32px;
		&.name {
			height: 48px;
			line-height: 48px;
			margin-left: 1rem;
			font-size: 18px;
			font-weight: 600;
			grid-area: name;
		}
		&.detail {
			margin-left: 0;
			height: 48px;
			line-height: 48px;
			margin-left: 0;
			font-size: 18px;
			font-weight: 600;
			grid-area: detail;
		}
		&.range {
			margin-left: 0;
			line-height: 48px;
			font-size: 18px;
			font-weight: 600;
			grid-area: range;
			text-align: end;
		}
		&.awards {
			grid-area: awards;
			height: fit-content;
		}
	}
`;
