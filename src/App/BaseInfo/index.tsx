import { FC } from "react";
import styled from "styled-components";
import { Photo } from "./components/Photo";
import { MainInfo } from "./components/MainInfo";
import { OtherInfo } from "./components/OtherInfo";
interface BaseInfoPropsType {}
/**基础信息 */
export const BaseInfo: FC<BaseInfoPropsType> = (props) => {
	return (
		<BaseInfoWarpper>
			{true && (
				<>
					<div className="photo">
						<Photo />
					</div>
					<div className="textInfo">
						<MainInfo />
						<OtherInfo />
					</div>
				</>
			)}
		</BaseInfoWarpper>
	);
};
//style_components
const BaseInfoWarpper = styled.div`
	height: 172px;
	padding: 1rem;
	background: linear-gradient(
			217deg,
			rgb(137 137 242 / 80%),
			rgba(255, 0, 0, 0) 70.71%
		),
		linear-gradient(312deg, rgb(66 148 66 / 80%), rgba(0, 255, 0, 0) 70.71%),
		linear-gradient(336deg, rgba(80, 80, 142, 0.8), rgba(0, 0, 255, 0) 70.71%);
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
	box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5), 8px 8px 0 rgba(0, 0, 0, 0.4),
		12px 12px 0 rgba(0, 0, 0, 0.3), 16px 16px 0 rgba(0, 0, 0, 0.2),
		20px 20px 0 rgba(0, 0, 0, 0.05);
	display: flex;
	.photo {
		width: fit-content;
		height: fit-content;
	}
	.textInfo {
		flex: 1 1 auto;
		margin-left: 48px;
	}
`;
