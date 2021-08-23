import java.util.Scanner;

public class Factorial {

    public static void main(String args[]) {
        int i, fact = 1;

        Scanner scanner = new Scanner(System.in);

        try {

            System.out.println("Enter the number of which you want the factorial : ");

            int number = scanner.nextInt();

            for (i = 1; i <= number; i++) {
                fact = fact * i;
            }
            System.out.println("Factorial of " + number + " is: " + fact);
        } finally {

            scanner.close();

        }

    }

}
