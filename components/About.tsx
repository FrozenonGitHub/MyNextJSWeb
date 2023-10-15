import Image from 'next/image';

import ExtLink from './ExtLink';
import IconImage from './IconImage';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json'

const About = (): JSX.Element => {
	return (
		<section className="grid gap-12" id="about">
			<div className="flex justify-between">
				<div className="mr-8 hidden md:block rounded-md">
					<ProfileImage></ProfileImage>
				</div>
				<div className="flex flex-col max-w-xl w-full justify-evenly">
					<h1 className="text-4xl font-bold pb-8 md:pb-0">{personalInfo.name}</h1>
					<p>
						<br/>
						I am a {personalInfo.about.year} PhD student
						in <ExtLink href={personalInfo.about.department.link}>{personalInfo.about.department.name} </ExtLink>, School of Informatics at{'\xa0'}
						<ExtLink href= {personalInfo.about.college.link}>{personalInfo.about.college.name}</ExtLink>, 
						advised by <ExtLink href={personalInfo.about.advisor.link}> {personalInfo.about.advisor.name}. </ExtLink>
					</p>
					<p>
						<br/><a href="mailto: wenyue.zhao@ed.ac.uk">✉️ {personalInfo.about.email}</a> || <a href="mailto: zhaowenyue98@gmail.com">✉️ {personalInfo.about.gmail}</a>
					</p>
					<p>
						<br/>Research Interest: {personalInfo.about.interest}
					</p>
					<p className = "text-gray-600">
						Committed to improving database systems with algorithm and design...
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
