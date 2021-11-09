import { useSelector, useDispatch } from 'react-redux';
import { handleDelete, handleCompleted, handleEdit } from '../../src/store/todoSlice';
import { useState } from 'react';

const TodoList = (props) => {
    const [todoEditing, setTodoEditing] = useState(null);
    const [editingText, setEditingText] = useState('');

    let todosDatas = useSelector((state) => state.todo.todolists);
    const dispatch = useDispatch();

    const submitEdits = (id) => {
        let addData = {
            title: editingText,
            id: id,
            completed: false,
        };
        dispatch(handleEdit(addData));
        setTodoEditing(null);
    };

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
                {todosDatas?.map((value, index) => (
                    <tr key={index}>
                        <th scope="row">{value.id}</th>
                        <td>
                            {' '}
                            {value.id === todoEditing ? (
                                <input type="text" onChange={(e) => setEditingText(e.target.value)} />
                            ) : (
                                <p>{value.title}</p>
                            )}
                        </td>
                        <td>{value.completed === 'true' ? 'Completed' : 'In Progress'}</td>
                        <td className="todo-actions">
                            {value.id === todoEditing ? (
                                <button
                                    type="submit"
                                    className="btn btn btn-warning"
                                    onClick={() => submitEdits(value.id)}
                                >
                                    Submit Edits
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="btn btn btn-warning"
                                    onClick={() => setTodoEditing(value.id)}
                                >
                                    Edit
                                </button>
                            )}
                            <button
                                type="submit "
                                className="btn btn-danger ms-1"
                                onClick={() => dispatch(handleDelete(value.id))}
                            >
                                Delete
                            </button>
                            <button
                                type="submit"
                                className="btn btn-success ms-1"
                                onClick={() => dispatch(handleCompleted(value.id))}
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

export default TodoList;
