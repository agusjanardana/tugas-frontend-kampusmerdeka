import { useState } from 'react';
import Content from './Content';

const Home = () => {
    const [todosData, setTodo] = useState(
        [
            {
                id: 0,
                title: 'I want Running',
                completed: false
            },
            {
                id: 1,
                title: 'I want swimming',
                completed: false
            }
        ]
    );

    const [inputTodo, setInputTodo] = useState('');

    const handleDelete = (id) => {
        var temporaryItem = todosData.filter((data, index, arr) => arr[index].id !== id );
        
        setTodo([...temporaryItem]);
    }

    const handleChange = (e) => {
        e.preventDefault();
        const key = e.target.name;
        const todosDataTarget = e.target.value;
        setInputTodo(todosDataTarget);

    }

    const submitEvent = (e) => {
        e.preventDefault();
        console.log(inputTodo);
        if (inputTodo === "") {
            var element = document.getElementById('text-danger');
            element.innerText = "Please input something !"
            return false;
        } else {
            var element2 = document.getElementById('text-danger');
            element2.innerText = ""
        }
        let addData = {
            title : inputTodo,
            id: Math.round(Math.random() * 50),
            completed : false
        };
        setTodo([
            ...todosData, addData
        ]);
    };

    const handleCompleted = (id) => {
        var data = todosData;
        for (var i in data) {
            if (data[i].id === id) {
                data[i].completed = data[i].completed === 'false' ? 'true' : 'false';
                break;
            }
        }
        setTodo([...data]  )
        return;
    };
    return (
        <div>
            <Content
                todosData={todosData}
                inputTodo = {inputTodo}
                handleDelete={handleDelete}
                handleChange={handleChange}
                submitEvent={submitEvent}
                handleCompleted={handleCompleted}
            ></Content>
        </div>
    )
}

export default Home;