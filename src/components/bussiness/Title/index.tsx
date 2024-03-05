import { FC } from "react";
import styled from "styled-components";
interface TitlePropsType {
	title: string;
}
/** */
export const Title: FC<TitlePropsType> = ({ title }) => {
	return (
		<TitleWarpper>
			<span className="text">{title}</span>
		</TitleWarpper>
	);
};
//style_components
const TitleWarpper = styled.div`
	width: 100%;
	height: 42px;
	margin-bottom: 8px;
	box-sizing: border-box;
	border-bottom: 4px solid #05a6ec;
	text-indent: 0;
	display: flex;
	align-items: center;
	&::before {
		content: "";
		display: inline-block;
		width: 1em;
		height: 100%;
		background-color: #05a6ec;
	}
	.text {
		font-size: 30px;
		text-indent: 0.6rem;
	}
`;
