import { FC } from "react";
import styled from "styled-components";
import { EductionType } from "../../types";
interface AwardsPropsType extends Pick<EductionType, "awards"> {}
/** */
export const Awards: FC<AwardsPropsType> = ({ awards }) => {
	return (
		<AwardsWarpper>
			<h3>获取荣誉：</h3>
			<ol>
				{awards.map((item) => (
					<li key={item.name + item.startTime + item.endTime}>
						<a
							href={!!item.image ? item.image : "javascript:void(0)"}
							target="_blank"
							onClick={(e) => {
								if (!item.image) {
									e.preventDefault();

									return false;
								}
							}}>
							{item.name}
						</a>
					</li>
				))}
			</ol>
		</AwardsWarpper>
	);
};
//style_components
const AwardsWarpper = styled.div`
	ol {
		margin-top: 8px;
		margin-left: 2rem;
		line-height: 1.75;
		li {
			&:nth-child(n + 1) {
				margin-top: 4px;
			}

			list-style: decimal;
		}
	}
`;
