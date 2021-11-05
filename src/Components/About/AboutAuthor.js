
import Sidebar from './Sidebar';
import './styles.css'

const AboutAuthor = () => {
    return (
    <>
        <Sidebar style={{ backgroundColor: '#eee' }}>
        </Sidebar>
        <div className="card about-card">
            <h5 className="card-header">About Author</h5>
            <div className="card-body">
                <h5 className="card-title">Todo App Hero</h5>
                <p className="card-text">We are hero excelent lorem ipsum 212koasd lorem ipsum</p>
            </div>
        </div>
        </>
    )
}

export default AboutAuthor;