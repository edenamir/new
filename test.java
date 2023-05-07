import static java.lang.Math.*;
public class Matrix {
    private int[][] matrix;
    public Matrix(int[][] matrix) {
        this.matrix = matrix;
    }
    
    public int getNonOverlappingRectangle(){
        for (int i = 0; i < 10; i++) {
            Rectangular rect1 = getRectangular(i);
            boolean overlaps = false;
            for (int j = 0; j < 10; j++) {
                if (i != j) { // skip comparing rectangle with itself
                    Rectangular rect2 = getRectangular(j);
                    if (rect1.overlaps(rect2)) {
                        overlaps = true;
                        break;
                    }
                }
            }
            // Return the row number of the first non-overlapping rectangle found
            if (!overlaps) {
                return i;
            }
        }
        // If all rectangles are overlapping return -1
        return -1;
    }

    public Rectangular getRectangular(int row) {
        int[] nodes = new int[8];
        for (int i = 0; i < 8; i++) {
            nodes[i] = matrix[row][i];
        }
        return new Rectangular(nodes);
    }
    
    public class Rectangular {
        private Point node1;
        private Point node2;
        private Point node3;
        private Point node4;

        for(int i=0; i<=)
            
        public Rectangular(int[] row) {

            this.node1 = new Point(row[0], row[1]);
            this.node2 = new Point(row[2], row[3]);
            this.node3 = new Point(row[4], row[5]);
            this.node4 = new Point(row[6], row[7]);
        }
        
        public Point getNode1() {
            return node1;
        }
        public Point getNode2() {
            return node2;
        }
        public Point getNode3() {
            return node3;
        }
        public Point getNode4() {
            return node4;
        }
        // function to check if two rectangulars overlap
        public boolean overlaps(Rectangular other) {
            
            boolean xOverlap = this.node1.getX() <= other.node4.getX() && this.node4.getX() >= other.node1.getX();
            
            boolean yOverlap = this.node1.getY() >= other.node4.getY() && this.node4.getY() <= other.node1.getY();
            
            return xOverlap && yOverlap;
        }
    }

    public class Point {
        private int x;
        private int y;
    
        public Point(int x, int y) {
            this.x = x;
            this.y = y;
        }
        
        public int getX() {
            return x;
        }
        
        public int getY() {
            return y;
        }
    
    }

}