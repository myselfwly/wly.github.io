import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { WorkInfoType } from "./types";
import { getWorkInfo } from "../mock/data";
import { WorkItem } from "./components/WorkItem";
import { Title } from "src/components/bussiness/Title";
interface WorkInfoPropsType {}
/**工作信息 */
export const WorkInfo: FC<WorkInfoPropsType> = (props) => {
	const [workInfo, setWorkinfo] = useState<WorkInfoType[]>([]);
	useEffect(() => {
		getWorkInfo().then(({ data }) => {
			setWorkinfo(data);
		});
	}, []);
	return (
		<WorkInfoWapper>
			<Title title="工作经历" />
			{workInfo.map((item) => {
				return <WorkItem data={item} key={item.projectName} />;
			})}
		</WorkInfoWapper>
	);
};
//style_components
const WorkInfoWapper = styled.div``;
