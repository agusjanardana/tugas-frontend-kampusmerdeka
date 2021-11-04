
const Form = (props) => {
    const {inputTodo, submitEvent, handleChange}  = props;
    return (
        <form
            onSubmit={submitEvent}
            className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2 "
        >
            <div className="col-12">
                <div className="form-outline">
                    <input type="text" id="form1" className="form-control" name="title" onChange={handleChange} value={inputTodo}/>
                    <label className="form-label" for="form1">
                        What do you want to do today?
                        <p id="text-danger" className="text-danger"></p>
                    </label>
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </div>
        </form>
    )
}

export default Form;