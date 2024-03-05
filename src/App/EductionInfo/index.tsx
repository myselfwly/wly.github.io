import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { EductionType } from "./types";
import { getEductionInfo } from "../mock/data";
import { EductionItem } from "./components/EductionItem";
import { Title } from "src/components/bussiness/Title";
interface EductionInfoPropsType {}
/**教育信息 */
export const EductionInfo: FC<EductionInfoPropsType> = (props) => {
	const [eductionInfo, setEductionInfo] = useState<EductionType[]>([]);
	useEffect(() => {
		getEductionInfo().then(({ data }) => {
			setEductionInfo(data);
		});
	}, []);
	return (
		<EductionInfoWarpper>
			<Title title="教育经历" />
			{eductionInfo.map((item) => (
				<EductionItem data={item} key={item.school} />
			))}
		</EductionInfoWarpper>
	);
};
//style_components
const EductionInfoWarpper = styled.div``;
