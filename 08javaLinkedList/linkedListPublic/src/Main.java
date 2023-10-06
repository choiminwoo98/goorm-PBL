public class Main {
    public static void main(String[] args) {
        MyLinkedList<Integer> myLinkedList = new MyLinkedList<>();

        // add
        myLinkedList.add(1);
        myLinkedList.add(2);
        myLinkedList.add(3);

        // get
        System.out.println("---get---");
        System.out.println(myLinkedList.get(0));
        System.out.println(myLinkedList.get(1));
        System.out.println(myLinkedList.get(2));

        // delete
        myLinkedList.delete(1);

        System.out.println("---loop---");
        for(Integer item : myLinkedList) {
            System.out.println(item);
        }
    }
}