import {
	CalendarOutlined,
	GithubOutlined,
	GlobalOutlined,
	HomeOutlined,
	MailOutlined,
	PhoneOutlined,
	ScheduleOutlined,
} from "@ant-design/icons";
import { FC, useEffect, useState } from "react";
import { getOtherInfo } from "src/App/mock/data";
import styled from "styled-components";
import { OtherInfoType } from "../../types";

interface OtherInfoPropsType {}
/** */
export const OtherInfo: FC<OtherInfoPropsType> = (props) => {
	const [otherInfo, setOtherInfo] = useState<OtherInfoType>({
		age: 20,
		eMail: "unset",
		phone: 0,
		address: "ueset",
		blog: "",
		degree: "unset",
		sourceCode: "",
	});
	useEffect(() => {
		getOtherInfo().then(({ data }) => {
			setOtherInfo(data);
		});
	}, []);
	return (
		<OtherInfoWarpper>
			<div className="other myAge">
				<div className="label" title="年龄">
					<CalendarOutlined />
				</div>
				<div className="text">{otherInfo.age}岁</div>
			</div>
			<div className="other myEMail">
				<div className="label" title="邮箱">
					<MailOutlined />
				</div>
				<div className="text">{otherInfo.eMail}</div>
			</div>
			<div className="other myPhone">
				<div className="label" title="电话">
					<PhoneOutlined />
				</div>
				<div className="text">{otherInfo.phone}</div>
			</div>
			<div className="other myAdress">
				<div className="label" title="地址">
					<HomeOutlined />
				</div>
				<div className="text">{otherInfo.address}</div>
			</div>
			<div className="other degree">
				<div className="label" title="学历">
					<ScheduleOutlined />
				</div>
				<div className="text">{otherInfo.degree}</div>
			</div>
			<div className="other blog">
				<div className="label" title="博客">
					<GlobalOutlined />
				</div>
				<div className="text">
					<a href={otherInfo.blog} target="_blank">
						个人博客
					</a>
				</div>
			</div>
			<div className="sourceCode">
				<a href={otherInfo.sourceCode} target="_blank">
					<GithubOutlined style={{ fontSize: 18 }} />
				</a>
			</div>
		</OtherInfoWarpper>
	);
};
//style_components
const OtherInfoWarpper = styled.div`
	margin-top: 22px;
	width: 50%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 24px 24px;
	grid-gap: 10px;
	.label {
		width: 2rem;
	}
	.label::after {
		content: " : ";
		display: inline;
		text-align: end;
	}
	.other {
		display: flex;
	}
	.sourceCode {
		position: fixed;
		top: 8px;
		right: 8px;
		cursor: pointer;
	}
`;
