import { Link } from 'react-router-dom';

const NewsList = (props) => {
    const { NewsListing } = props;
    console.log(NewsListing);
    return (
        <div className="container">
            <div className="row row-cols-2 rows-cols-lg-5 g-2 g-lg-3">
                {NewsListing.map((value, index) => {
                    return (
                        <div className="col" key={index}>
                            <div class="card" style={{ width: '18rem' }}>
                                <img src={value.urlToImage} class="card-img-top" alt={value.title} />
                                <div class="card-body">
                                    <h5 class="card-title">{value.title}</h5>
                                    <p class="card-text">{value.description}</p>
                                </div>
                                <div class="card-body">
                                    <a href={value.url} class="card-link">
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
