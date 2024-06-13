# SPIRAL TRAVERSAL
## Introduction
A spiral traversal algorithm is meant to traverse elements in a two-dimensional array in a spiral pattern, ensuring that each element is visited at least once. 

To qualify for many software engineering positions, you need to demonstrate a high understanding of basic computer science concepts through tests such as this one.

[Leetcode](https://leetcode.com/) is a platform for developers to test their skills in such topics, and is a good place to get your skills up to par. The Spiral Traversal problem among many others can be found on their site.

## Understanding The Problem
In **JavaScript**, a two-dimensional array is an array made up of other arrays. Consider the code snippet below;


```javascript
let matrix = 
[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
```
To access an element in the matrix, we access an array within the array (which intuitively can be defined as the row), then the element within that array (the column). As such, we will use two indices to get to the element of our choice. Try not to lose sight of this in order to understand which element is being accessed specifically when we get to actually writing our code.

Our spiral will be clockwise **ie** first, a **right** traversal, then a **down**, a **left**, an **up**, and repeat. This pattern will be repeated over and over until all elements in the matrix have been traversed exactly once. Once the last element is displayed, the program should stop and the result stored in an array variable.

For this example, the expected output should be;
```javascript
result = [1,2,3,4,8,12,16,15,14,13,9,5,6,7,,11,10]
```
Makes sense? Good! Let's get started on the code.
## Let's Get Coding!
### Limits
As stated earlier, the traversal of the array will be in either one of four directions. Change of direction is determined by where in the matrix we are. 
1. We shift from a right traversal to a down traversal when we reach the **right** limit of the matrix,
2. We shift from a down traversal to a left traversal when we reach the **bottom** limit of the matrix,
3. We shift from a left traversal to an upward traversal when we reach the **left** limit of the matrix,
4. And we shift from an upward traversal to a right traversal when we reach the **top** limit of the matrix.

This means that we will need at least 4 limit variables to store this information. 

Since indexing of arrays begins at 0, the **top** and **left** limits will be set to zero.

```javascript
let top = 0;
let left = 0;
```
The **right** limit will be the size of the first element in the first array (the row) minus 1 (array size displays number of elements and we need the index of the last element, which is less 1 of the size). The bottom limit similarly, will be the size of the array (since the size of the matrix is the number of arrays/rows it has) minus 1.
```javascript
let right = matrix[0].length - 1;
let bottom = matrix.length - 1;
```
We will also need a **direction** variable to determine which direction we will be traversing the matrix. It will be a string variable originally set to **"right"** since this will always be the direction we begin our traversal.
```javascript
let direction = "right";
```
Our limits will be updated every time a traversal over a row/column is completed so that the row/column is not traversed again at a later point in the code. For example, once the right traversal of the top row is completed, the next time we have a right traversal, it will be in the second row. The **top** and **left** limits will therefore have a one added to jump to the next row/column. The **bottom** and **right** limits on the other hand will always be decremented by one since the limit will be moving upwards and leftwards respectively.

Because of this constant updating of the limits, at one point in our code, the limits opposite to each other will meet. At this point, we will terminate and store the **result** (The traversal will be complete).

### The While Loop
We will use a **While Loop** to implement the spiral traversal algorithm. The loop will run on two conditions;

1. The top limit is less than or equal to the bottom limit.
2. The left limit is less than or equal to the right limit.

```javascript
while (top <= bottom && left <= right){
}
```
All our traversal code will be in this while loop.
#### 1. Right Traversal
To traverse across the top row, we will use a **For Loop**. Before the traversal loop, we will have to check the **direction** variable to know which direction the traversal will be, after which we will **push** the results to our **result** array. Since we will be focusing on our first row alone, only the second index will be changing (from the **left** limit; 0, to the **right** limit).

After the traversal is done, our **top** limit is incremented and the direction value reassigned to **"down"**.

```javascript
if (direction == "right"){
        for (i = left; i <= right; i++){
            number.push(matrix[top][i]);
        }
        top = top++;
        direction = "down";
    }
```

#### 2. Down Traversal
This traversal across the right column will be similar to the one discussed above with some minor changes. Since we will be focusing on our right column alone, only the first index will be changing (from the **top** limit;0, to the **bottom** limit).

After the traversal is done, our **right** limit is decremented and the direction value reassigned to **"left"**.

```javascript
else if (direction == "down"){
        for (i = top; i <= bottom; i++){
            number.push(matrix[i][right]);
        }
        right = right--;
        direction = "left";
    }
```

#### 3. Left Traversal
This traversal will be accross the bottom row. Therefore, only the second index will be changing (from the **right** limit to the **left** limit).

After the traversal is done, our **bottom** limit is decremented and the direction value reassigned to **"up"**.

```javascript
else if (direction == "left"){
        for (i = right; i >= left; i--){
            number.push(matrix[bottom][i]);
        }
        bottom = bottom--;
        direction = "up";
    }
```
#### 4. Up Traversal
This traversal will be across the left column. Only the first index will be changing (from the **bottom** limit to the **top** limit).

*Note that at this point in the first loop, both the **bottom** and **top** limit have excluded the original top and bottom rows of the matrix since they have already been traversed*

After the traversal is done, the **left** limit is incremented and the direction value reassigned to **"right"**.

*Note that at this point in the first loop, both the **left** and **right** limits have excluded the original left most and right most columns of the matrix since they have already been traversed.*

```javascript
else if (direction == "up"){
        for (i = bottom; i >= top; i--){
            number.push(matrix[i][left]);
        }
        left = left + 1;
        direction = "right";
    }
```

## Conclusion
This problem proves to a would-be employer that you understand loops and control statements as well as a basic understanding of the two-dimensional array data structure. 

For readers that are new to **JavaScript** but not new to programming, you may have noticed the lack of a print statement which would showcase our result. As **JavaScript** is a scripting language, it runs either in a browser or server and can not print on its own. For more information on how to print data from **JavaScript**, read [this](https://www.w3schools.com/js/js_output.asp) article.
