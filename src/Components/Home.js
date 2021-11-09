import { useState } from 'react';
import Content from './Content';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { handleSubmit } from '../store/todoSlice';


const Home = () => {
    const [inputTodo, setInputTodo] = useState('');
    let todosDatas = useSelector((state) => state.todo.todolists);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        const key = e.target.name;
        const todosDataTarget = e.target.value;
        setInputTodo(todosDataTarget);
    };

    const submitEvent = (e) => {
        e.preventDefault();
        
        if (inputTodo === '') {
            var element = document.getElementById('text-danger');
            element.innerText = 'Please input something !';
            return false;
        } else {
            var element2 = document.getElementById('text-danger');
            element2.innerText = '';
        }
        let addData = {
            title: inputTodo,
            id: Math.round(Math.random() * 50),
            completed: false,
        };
        dispatch(handleSubmit(addData));
        // todosDatas = [...todosDatas, addData];
        // console.log(todosDatas);
    };

   
    return (
        <>
            <Navbar></Navbar>
            <Content
                inputTodo={inputTodo}
                handleChange={handleChange}
                submitEvent={submitEvent}
            ></Content>
        </>
    );
};

export default Home;
