import { Fragment, FC, useState } from "react";
import { Link, Image } from "../../atoms";
import CircleCheck from "../../../assets/img/circle-check.svg";
import { Accordion } from "../Accordion";

interface HeroContentProps {
	img: string;
	title: string;
	items: string[];
	buttonLink: string;
	buttonTitle: string;
}

export const HeroContent = ({
	title,
	img,
	items,
	buttonLink,
	buttonTitle,
}: HeroContentProps) => {
	const [show, setShow] = useState<boolean>(false);

	const onToggleAccordion = () => {
		setShow(!show);
	};

	return (
		<Fragment>
			<section className="content-container">
				<section onClick={onToggleAccordion}>
					<Image src={img} alt={title} className="w-full" />
					<section className="mobile-content">
						{items && <Accordion title={title} items={items} show={show} />}
					</section>
				</section>
				<section>
					<section className="desktop-content">
						<h2>{title}</h2>
						<ul>
							{items.map((item, itemIndex) => {
								return (
									<li key={`${item}-${itemIndex}`}>
										<Image src={CircleCheck} />
										<p>{item}</p>
									</li>
								);
							})}
						</ul>
					</section>
					<Link href={buttonLink} className="btn">
						{buttonTitle}
					</Link>
				</section>
			</section>
		</Fragment>
	);
};
