import { useState } from "react";
import CircleCheck from "../../../assets/img/circle-check.svg";
import ChevronUp from "../../../assets/img/chevron-up.svg";
import ChevronDown from "../../../assets/img/chevron-down.svg";
import { Image } from "../../atoms";

interface AccordionProps {
	title: string;
	items: string[] | undefined;
	show: boolean;
}

export const Accordion = ({ title, items, show }: AccordionProps) => {
	const [isActive, setIsActive] = useState<boolean>(show);

	const handleClose = () => {
		setIsActive(!isActive);
	};

	return (
		<section className="accordion">
			<section onClick={handleClose} className="accordion_heading">
				<h2>{title}</h2>
				{isActive ? (
					<Image src={ChevronUp} alt="Chevron Up" />
				) : (
					<Image src={ChevronDown} alt="Chevron Down" />
				)}
			</section>
			<section className="accordion_content">
				{(isActive || show) && (
					<ul>
						{items?.map((content, idx) => {
							return (
								<li key={idx}>
									<Image src={CircleCheck} />
									<p>{content}</p>
								</li>
							);
						})}
					</ul>
				)}
			</section>
		</section>
	);
};
