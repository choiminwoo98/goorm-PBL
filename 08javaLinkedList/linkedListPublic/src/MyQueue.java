public class MyQueue<T> {
    private MyLinkedList<T> list = new MyLinkedList<>();

    // enqueue
    public void enqueue(T item) {
        list.add(item);
    }

    // dequeue
    public T dequeue() {
        // 아무것도 없는데 꺼내려고하면 예외
        if(list.isEmpty()) {
            throw new IllegalStateException("queue가 비었다.");
        }

        T frontItem = list.get(0);
        list.delete(0);
        return frontItem;
    }

    // peek
    public T peek() {
        // 아무것도 없는데 꺼내려고하면 예외
        if(list.isEmpty()) {
            throw new IllegalStateException("queue가 비었다.");
        }

        T frontItem = list.get(0);
        return frontItem;
    }
}
