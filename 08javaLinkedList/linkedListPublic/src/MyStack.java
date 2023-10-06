public class MyStack<T> {
    private MyLinkedList<T> list = new MyLinkedList<>();

    // push
    public void push(T item) {
        list.add(item);
    }

    // pop
    public T pop() {
        // 아무것도 없는데 꺼내려고하면 예외
        if(list.isEmpty()) {
            throw new IllegalStateException("stack이 비었다.");
        }
        int lastIndex = list.size()-1;
        T top = list.get(lastIndex);
        list.delete(lastIndex);
        return top;
    }

    // peek
    public T peek() {
        // 아무것도 없는데 꺼내려고하면 예외
        if(list.isEmpty()) {
            throw new IllegalStateException("stack이 비었다.");
        }
        int lastIndex = list.size()-1;
        T top = list.get(lastIndex);
        return top;
    }
}
