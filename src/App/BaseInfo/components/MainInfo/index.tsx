import { FC, useEffect, useState } from "react";
import { getMainInfo } from "src/App/mock/data";
import styled from "styled-components";
import { MainInfoType } from "../../types";
interface MainInfoPropsType {}
/** */
export const MainInfo: FC<MainInfoPropsType> = (props) => {
	const [mainInfo, setMainInfo] = useState<MainInfoType>({
		name: "",
		posts: "",
	});
	useEffect(() => {
		getMainInfo()
			.then(({ data }) => {
				setMainInfo(data);
			})
			.catch((e) => {
				console.error(e);
				setMainInfo({ name: "王柳园", posts: "WEB 前端工程师" });
			});
	}, []);
	return (
		<MainInfoWarpper>
			<div className="myName">{mainInfo.name}</div>
			<div className="myPosts">{mainInfo.posts}</div>
		</MainInfoWarpper>
	);
};
//style_components
const MainInfoWarpper = styled.div`
	text-shadow: 2px 2px 2px #0a0a0a88;
	.myName {
		font-size: 28px;
		font-weight: 600;
		margin-bottom: 8px;
	}
	.myPosts {
		font-size: 20px;
		font-weight: 800;
	}
`;
