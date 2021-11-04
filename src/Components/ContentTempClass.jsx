import React, { Component } from 'react';
import './style.css';

class Content extends Component {
    constructor() {
        super();
        this.state = {
            todosData: [
                {
                    id: 1,
                    title: 'I want swimming',
                    completed: false
                },
            ],
            title: "",
            editing : false,
        };
    }

    handleDelete = (id) => {
        var temporaryItem = this.state.todosData.filter((data) => data.id !== id);
        this.setState({todosData: temporaryItem});
    }

    handleChange = (e) => {
        e.preventDefault();
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            ...this.state.title, [key] : value,
        })
    }

    submitEvent = (e) => {
        e.preventDefault();
        if (this.state.title == "") {
            var element = document.getElementById('text-danger');
            element.innerText = "Please input something !"
            return false;
        } else {
            var element = document.getElementById('text-danger');
            element.innerText = ""
        }
        let addData = {
            title : this.state.title,
            id: Math.round(Math.random() * 50),
            completed : false
        };
        this.setState({
            todosData: [...this.state.todosData, addData],
            title : ""
        });
    };

    handleCompleted = (id) => {
        var data = this.state.todosData;
        for (var i in data) {
            if (data[i].id == id) {
                data[i].completed = data[i].completed === 'false' ? 'true' : 'false';
                break;
            }
        }
        this.setState({ data })
        return;
    }
    handleEditing = () => {
        console.log("edit mode activated")
    }

    render() {
        return (
            <section className="vh-100" style={{ backgroundColor: '#eee' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-9 col-xl-7">
                            <div className="card rounded-3">
                                <div className="card-body p-4">
                                    <h4 className="text-center my-3 pb-3">To Do App</h4>

                                    <form
                                        onSubmit={this.submitEvent}
                                        className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2 "
                                    >
                                        <div className="col-12">
                                            <div className="form-outline">
                                                <input type="text" id="form1" className="form-control" name="title" onChange={this.handleChange} />
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
                                            {this.state.todosData.map((value, index) => (
                                                <tr key={index} >
                                                    <th scope="row">{ value.id }</th>
                                                    <td onDoubleClick={this.handleEditing} >{value.title}</td>
                                                    <td>{value.completed == 'true' ? 'Completed' : 'In Progress'}</td>
                                                    <td>
                                                        <button type="submit" className="btn btn-danger" onClick={() => this.handleDelete(value.id)}>
                                                            Delete
                                                        </button>
                                                        <button type="submit" className="btn btn-success ms-1" onClick ={() => this.handleCompleted(value.id)}>
                                                            Finished
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;
