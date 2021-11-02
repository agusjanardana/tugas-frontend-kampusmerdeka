import './style.css';

const Content = () => {
    const ListJson = [ 
        {
            id: 1,
            title: "Membuat Komponen",
            completed: true,
        },
        {
            id: 2,
            title: "Unit Testing",
            completed: false,
        },
        {
            id: 3,
            title: "Setup Development Environment",
            completed: true,
        },
        {
            id: 4,
            title: "Deploy ke server",
            completed: false,
        },
    ]
    const isCompleted = (completed) => {
        return completed ? 'text-crossed' : '';
    }
    return (
        <div className="content">
            {ListJson.map((value, index) => {
                return (
                    <div className="card" style={{width: "25rem"}}>
                        <ul className="list-group list-group-flush">
                            <li className={`${isCompleted(value.completed)} json-text`}>{value.title}</li>
                        </ul>
                    </div>
               
                )
            })}
        </div>
    )
}

export default Content