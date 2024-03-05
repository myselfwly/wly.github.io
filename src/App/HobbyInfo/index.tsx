import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { getHobbyInfo } from "../mock/data";
import { Title } from "src/components/bussiness/Title";
interface HobbyInfoPropsType {}
/**爱好信息 */
export const HobbyInfo: FC<HobbyInfoPropsType> = (props) => {
	const [hobbyInfo, setHobbyInfo] = useState("");
	useEffect(() => {
		getHobbyInfo().then(({ data }) => {
			setHobbyInfo(data);
		});
	}, []);
	return (
		<HobbyInfoWarpper>
			<Title title="个人描述" />
			<div className="context">{hobbyInfo}</div>
		</HobbyInfoWarpper>
	);
};
//style_components
const HobbyInfoWarpper = styled.div`
	.context {
		padding-top: 32px;
		text-indent: 2em;
		line-height: 1.75;
	}
`;
