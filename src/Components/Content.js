import Form from './Form';
import TodoList from './TodoList';

const Content = (props) => {
    const { inputTodo, todosData, handleDelete, handleChange, submitEvent, handleCompleted } = props;

    return (
        <section className="vh-100" style={{ backgroundColor: '#eee' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-9 col-xl-7">
                        <div className="card rounded-3">
                            <div className="card-body p-4">
                                <h4 className="text-center my-3 pb-3">To Do App</h4>
                                <Form inputTodo={inputTodo} submitEvent={submitEvent} handleChange={handleChange}></Form>
                                <TodoList
                                    todosData={todosData}
                                    handleDelete={handleDelete}
                                    handleCompleted={handleCompleted}
                                ></TodoList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;
