import {useState} from 'react';
import {NextPage} from 'next';
import {Audio} from 'react-loader-spinner';


const Style={
    height: 498,
    width: 680,
    frameborder: 0
}

const Misc: NextPage<unknown> = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="items-center">
            TBD
        </div>
    );
};

export default Misc;
