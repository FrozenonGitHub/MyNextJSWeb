import {useState} from 'react';
import {NextPage} from 'next';
import {Audio} from 'react-loader-spinner';
import personalInfo from '../components/data/personalInfo.json';
import IconImage from '../components/IconImage';


const Style={
    height: 498,
    width: 680,
    frameborder: 0
}

const Misc: NextPage<unknown> = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="items-center">
            <h1 className="text-2xl font-bold">Email</h1>
            <a href="mailto: zhaowenyue98@gmail.com" className="hover:underline">
                ✉️ {personalInfo.about.gmail}
            </a>
            <br/>
            <br/>
            <h1 className="text-2xl font-bold">
                <a href={personalInfo.socialMedia.LinkedIn} className="underline" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </h1>
        </div>
    );
};

export default Misc;
