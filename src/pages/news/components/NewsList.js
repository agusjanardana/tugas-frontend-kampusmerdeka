import { Link } from 'react-router-dom';

const NewsList = (props) => {
    const { NewsListing } = props;
    // console.log(NewsListing);
    return (
        <div className="container">
            <div className="row row-cols-2 rows-cols-lg-5 g-2 g-lg-3">
                {NewsListing.map((value, index) => {
                    return (
                        <div className="col" key={index}>
                            <div className="card" style={{ width: '18rem' }}>
                                {value.media == null ? (
                                    <strong style={{ textAlign: 'center' }}>NO IMAGES</strong>
                                ) : (
                                    <img src={value.media} className="card-img-top" alt={value.title} />
                                )}

                                <div className="card-body">
                                    <h5 className="card-title">{value.title}</h5>
                                    <p className="card-text">{value.summary}</p>
                                </div>
                                <div className="card-body">
                                    <a href={value.link} className="card-link">
                                        News URL
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NewsList;
