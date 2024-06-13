let matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
top = 0;
bottom = matrix.length - 1;
left = 0;
right = matrix[0].length - 1;
number = [];
direction = "right";
    
while (top <= bottom && left <= right){
    if (direction == "right"){
        for (i = left; i <= right; i++){
            number.push(matrix[top][i]);
        }
        top = top + 1;
        direction = "down";
    }
    else if (direction == "down"){
        for (i = top; i <= bottom; i++){
            number.push(matrix[i][right]);
        }
        right = right - 1;
        direction = "left";
    }
    else if (direction == "left"){
        for (i = right; i >= left; i--){
            number.push(matrix[bottom][i]);
        }
        bottom = bottom - 1;
        direction = "up";
    }
    else if (direction == "up"){
        for (i = bottom; i >= top; i--){
            number.push(matrix[i][left]);
        }
        left = left + 1;
        direction = "right";
    }
    }
console.log(number);