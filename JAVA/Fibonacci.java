import java.util.Scanner;

class Fibonacci {
    public static void main(String args[]) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the count : ");

        try {
            int count = scanner.nextInt();

            int n1 = 0, n2 = 1, n3, i;
            System.out.print(n1 + " " + n2);// printing 0 and 1

            for (i = 2; i < count; ++i)// loop starts from 2 because 0 and 1 are already printed
            {
                n3 = n1 + n2;
                System.out.print(" " + n3);
                n1 = n2;
                n2 = n3;
            }
        } finally {

            scanner.close();

        }

    }
}