import { FC } from "react";
import styled from "styled-components";
import { EductionType } from "../../types";
interface SchoolNamePropsType extends Pick<EductionType, "school"> {}
/** */
export const SchoolName: FC<SchoolNamePropsType> = ({ school }) => {
	return (
		<SchoolNameWarpper>
			<div className="bg_main">
				<div className="block_bg"></div>
				<div className="arror_bg"></div>
				<div className="arror_bg end_arror">
					<div className="arror_bg sider_arror"></div>
				</div>
				<div className="arror_bg end_arror bottom">
					<div className="arror_bg sider_arror"></div>
				</div>
			</div>
			<div className="bottom_line"></div>
			<div className="textContain">{school}</div>
		</SchoolNameWarpper>
	);
};
//style_components
const SchoolNameWarpper = styled.div`
	height: 100%;
	text-indent: 1rem;
	position: relative;
	.bg_main {
		position: absolute;
		/* width: 240px; */
		bottom: 4px;
		display: flex;
		.block_bg {
			width: 146px;
			border: 22px solid #05a6ec;
			border-top-right-radius: 2px;
			border-bottom-right-radius: 2px;
		}
		.arror_bg {
			margin-left: -1px;
			z-index: 2;
			width: 0;
			border-left: 18px solid #05a6ec;
			border-top: 22px solid #00000000;
			border-bottom: 22px solid #00000000;
		}
		.offect {
			margin-left: -4px;
		}
		.end_arror {
			position: relative;

			transform: scale(0.9);
			z-index: 1;
			margin-left: -10px;
			.sider_arror {
				position: absolute;
				transform: scale(1);
				border-left: 18px solid #fff;
				top: -22px;
				left: -22px;
			}
		}
		.bottom {
			transform: scale(0.7);
			z-index: 0;
			margin-left: -8px;
		}
	}
	.bottom_line {
		position: absolute;
		width: 100%;
		height: 4px;
		bottom: 0;
		background: #05a6ec;
	}
	.textContain {
		position: absolute;
	}
`;
