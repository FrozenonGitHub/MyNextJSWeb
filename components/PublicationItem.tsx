import ExtLink from './ExtLink';

interface Props {
    publication: any;
    index: number;
}

const PublicationItem = ({publication, index}: Props): JSX.Element => {
    return (
        <div className = "mt-4 mb-8">
            <p className="text-xl">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <b><i>{publication.title}</i></b>
                    <div>
                        {publication.links.map((linkItem: any, idx: any) => (
                            <ExtLink href={linkItem.url} key={idx}> [{linkItem.name}]</ExtLink>
                        ))}<br/>
                    </div>
                </div>
                {publication.author}<br/>
                <a>
                    {publication.conference}
                </a>
            </p>
        </div>

    );
};

export default PublicationItem;
