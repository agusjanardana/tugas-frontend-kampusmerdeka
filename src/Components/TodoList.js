const TodoList = (props) => {
    const { todosData, handleDelete, handleCompleted } = props;
    
    console.log("test data", todosData);
    return (
        <table className="table mb-4">
            <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Todo Today</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {todosData?.map((value, index) => (
                    <tr key={index}>
                        <th scope="row">{value.id}</th>
                        <td>{value.title}</td>
                        <td>{value.completed === 'true' ? 'Completed' : 'In Progress'}</td>
                        <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                onClick={() => handleDelete(value.id)}
                            >
                                Delete
                            </button>
                            <button
                                type="submit"
                                className="btn btn-success ms-1"
                                onClick={() => handleCompleted(value.id)}
                            >
                                Finished
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TodoList
