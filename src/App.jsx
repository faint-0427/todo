import './App.css'
import { useState } from 'react';
import TodoItem from './component/TodoItem';

const mockdata = [
  { id: 0, content: "코딩 공부하기" },
  { id: 1, content: "프로젝트 제작하기" },
  { id: 2, content: "기능사 실기 공부하기" },
  { id: 3, content: "세탁하기" },
];

function App() {
  const parsedData = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(parsedData || "") ;
  const [content, setContent] = useState("");

  localStorage.setItem("todos", JSON.stringify(todos)); //[stringify] 문자를 보여주는 것 

  const onCreate = () => {
    if (content === "") {
      // return;[return]반환 혹은 종료
    }
    // setTodos(()=>[기존값,새값])
    setTodos((todos) => [...todos, { id: Date.now(), content: content }])
    //Date.now() 1970년 1월 1일 0시 0분 기준으로 현재까지 시간을 ms로 바꾼 숫자
    setContent(""); // 추가 후 입력창 비우기

  }

  const onEnter = (e) => {
    if (e.key === "Enter")
      onCreate();
    //키보드 enter키 누를 시 값 입력됨 
  }

  const onDel = (targetID) => {
    setTodos((todos) => todos.filter((item) => item.id !== targetID))
  }


  return (
    <>
      <div id="wrap">
        <div className="inner">
          <h1>My Todo List</h1>
          <div className="add">
            <input onKeyDown={onEnter} value={content} onChange={(e) => { setContent(e.target.value) }} type="text" placeholder='할 일을 입력하세요!' />
            <button onClick={onCreate}>추가</button>
          </div>{/* add */}
          <div className="list">
            {todos.map(({ id, content }) => {
              return <TodoItem onDel={onDel} key={id} id={id} content={content}></TodoItem>
            })}
          </div>{/* list */}
        </div>
      </div>
    </>
  )
}

export default App
