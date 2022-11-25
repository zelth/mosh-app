import { Fragment } from "react";
import { HeroContent } from "../components/molecules";
import { useServicesData } from "../hooks/useServicesData";
import Image1 from "../assets/img/hero-img-1.png";
import Image2 from "../assets/img/hero-img-2.png";

const Homepage = () => {
	const { data, loading } = useServicesData();

	return (
		<Fragment>
			<section className="hero">
				<section className="hero-banner">
					<h1>Get back on track</h1>
					<p className="text-center hero-message">
						Treatment plan in 24 hours. <br /> Treat anxiety, depression & more
					</p>
				</section>
				<section className="content-wrapper d-grid gap-y-6 gap-x-6">
					{data && !loading && (
						<Fragment>
							<HeroContent
								img={Image1}
								title="Free Doctor Consultation"
								items={data?.consultation}
								buttonLink="https://www.getmosh.com.au/quizzes/mental_health_quiz"
								buttonTitle="Get started"
							/>
							<HeroContent
								img={Image2}
								title="One-on-one therapy sessions"
								items={data?.consultation}
								buttonLink="https://www.getmosh.com.au/booking/mental_health"
								buttonTitle="Book therapist"
							/>
						</Fragment>
					)}
				</section>
			</section>
		</Fragment>
	);
};

export default Homepage;
