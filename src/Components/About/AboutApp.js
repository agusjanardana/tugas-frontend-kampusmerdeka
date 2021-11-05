
import Sidebar from './Sidebar';
import './styles.css'

const AboutApp = () => {
    return (
    <>
        <Sidebar style={{ backgroundColor: '#eee' }}>
        </Sidebar>
        <div className="card about-card">
            <h5 className="card-header">About App</h5>
            <div className="card-body">
                <h5 className="card-title">Todo App Hero</h5>
                <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
            </div>
        </div>
        </>
    )
}

export default AboutApp;