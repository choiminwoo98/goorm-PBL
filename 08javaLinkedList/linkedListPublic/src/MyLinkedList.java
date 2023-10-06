import java.util.Iterator;
import java.util.NoSuchElementException;

public class MyLinkedList<T> implements Iterable<T> {
    private Node<T> head;
    private int size=0;

    public void add(T data) {
        Node<T> node = new Node<>(data);

        // LinkedList가 비어있는 경우 : head에 넣어준다.
        if(size==0) {
            head = node;
        } else {
            // 마지막 노드를 찾는다.
            Node<T> current = head;
            while(current.getNext() != null) {
                current = current.getNext();
            }
            // 현재 current에는 가장 마지막 Node가 위치하고 있음
            // 마지막 노드의 next에 새로운 노드를 추가한다.
            current.setNext(node);
        }

        this.size++;
    }

    public T get(int index) {
        // 양 끝 경계값 예외처리
        if(index < 0 || this.size <= index) {
            throw new IndexOutOfBoundsException();
        }

        // index번째 노드를 찾는다.
        Node<T> current = this.head;
        for (int i = 0; i < index; i++) {
            current = current.getNext();
        }
        return current.getData();
    }

    public void delete(int index) {
        // 양 끝 경계값 예외처리
        if(index < 0 || this.size <= index) {
            throw new IndexOutOfBoundsException();
        }

        if(index==0) {
            head = head.getNext();
        } else {
            // index번째 노드를 찾는다.
            Node<T> current = this.head;
            for (int i = 0; i < index-1; i++) {
                current = current.getNext();
            }
            // 직전 노드의 next를 i+1번째 노드로 바꿔준다.
            current.setNext(current.getNext().getNext());
        }

        this.size--;
    }

    @Override
    public Iterator<T> iterator() {
        return new Iterator<T>(){
            // 맨 처음부터 순회
            private Node<T> current = head;

            @Override
            public boolean hasNext() {
                return current != null;
            }

            @Override
            public T next() {
                // 다음이 있는지 먼저 확인하고, 있으면 동작
                if(!hasNext()) {
                    throw new NoSuchElementException();
                }

                T data = current.getData();
                current = current.getNext();
                return data;
            }
        };
    }

    // Stack, Queue 구현에 활용
    public int size() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }
}
