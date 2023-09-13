import Button from "./button";
import Input from "./input";
import Item from "./item";
import { useState, useEffect } from "react";
const Box = (props) => {
  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");
  const [toggle, setToggle] = useState(1);
  const [currentEditingId, setCurrentEditingId] = useState(null);

  const [todos, setTodos] = useState([
    { id: new Date().getTime(), item: "밥먹기", cost: 1000 },
  ]);

  const handleSubmit = () => {
    if (item && cost) {
      const newTodo = {
        id: new Date().getTime(),
        item,
        cost: parseInt(cost, 10),
      };
      const updatedTodos = [newTodo, ...todos];
      setTodos(updatedTodos);
      props.onNotify("add");
      setItem("");
      setCost("");
    }
  };
  const handleDelete = (id) => {
    console.log(id);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    props.onNotify("delete");
  };
  const handleAllDelete = (id) => {
    setTodos([]);
    props.onNotify("delete");
  };
  const handleUpdate = (todo) => {
    setItem(todo.item);
    setCost(todo.cost);
    setCurrentEditingId(todo.id);
    setToggle(0);
  };
  const handleUpdateSubmit = () => {
    if (currentEditingId && item && cost) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === currentEditingId) {
          return { ...todo, item, cost: parseInt(cost, 10) };
        }
        return todo;
      });

      setTodos(updatedTodos);
      setItem("");
      setCost("");
      setCurrentEditingId(null);
      setToggle(1);
      props.onNotify("update");
    }
  };

  useEffect(() => {
    const totalCost = todos.reduce((sum, todo) => sum + todo.cost, 0);
    props.onTotalCostChange(totalCost);
  }, [todos, props]);
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <div>
        <div
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Input label="지출 항목" value={item} onChange={setItem} />
          <Input label="비용" value={cost} onChange={setCost} />
        </div>
        <div style={{ paddingLeft: "20px" }}>
          {toggle ? (
            <Button onClick={() => handleSubmit()}>제출</Button>
          ) : (
            <Button onClick={() => handleUpdateSubmit()}>수정</Button>
          )}
        </div>
      </div>
      <div>
        {todos.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            onDelete={() => handleDelete(todo.id)}
            onUpdate={() => handleUpdate(todo)}
          />
        ))}
        <div style={{ paddingLeft: "20px", paddingBottom: "10px" }}>
          <Button onClick={handleAllDelete}>목록 지우기</Button>
        </div>
      </div>
    </div>
  );
};
export default Box;
