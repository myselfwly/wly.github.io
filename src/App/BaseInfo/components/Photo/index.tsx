import { FC } from "react";
import styled from "styled-components";
import IfoImg from "src/asserts/images/ifoimg.jpg";
interface PhotoPropsType {}
/** */
export const Photo: FC<PhotoPropsType> = (props) => {
	return (
		<PhotoWarpper>
			<img src={IfoImg} alt="" width={"100%"} />
		</PhotoWarpper>
	);
};
//style_components
const PhotoWarpper = styled.div`
	width: ${390 / 3}px;
	height: ${390 / 3}px;
	box-shadow: 6px 5px 4px #00000066;
	overflow: hidden;
	border-radius: 50%;
`;
