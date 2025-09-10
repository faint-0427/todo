const TodoItem = ({id, content, onDel}) => {
    const onClickDel=()=>{
        onDel(id);
    }

    return (
        <>
            <div className="item">
                <div>{content}</div>
                <button onClick={onClickDel}>삭제</button>
            </div>
        </>
    )
}

export default TodoItem