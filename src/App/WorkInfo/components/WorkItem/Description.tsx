import { FC } from "react";
import styled from "styled-components";
import { WorkInfoType } from "../../types";
interface DescriptionPropsType extends Pick<WorkInfoType, "description"> {}
/** */
export const Description: FC<DescriptionPropsType> = ({ description }) => {
	return <DescriptionWarpper>{description}</DescriptionWarpper>;
};
//style_components
const DescriptionWarpper = styled.div``;
