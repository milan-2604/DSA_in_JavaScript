/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let smallest =points[0];
    let greatestX = points[0][0];
    let greatestY = points[0][1];
    for(let i=0; i<points.length; i++){
        if(points[i][0] + points[i][1] < smallest[0]+smallest[1]){
            smallest = points[i];
        }
        if(points[i][0]>greatestX){
            greatestX = points[i][0];
        }
        if(points[i][1]>greatestY){
            greatestY = points[i][1];
        }
    }
    const area = 1/2 * (greatestX-smallest[0]) * (greatestY-smallest[1]);
    console.log(smallest);
    console.log(greatestX);
    console.log(greatestY);
    console.log(area) ;

};
largestTriangleArea([[1,0],[0,0],[0,1]])
//wrong approach only applicable for right angle triangle



//here's the correct solution
//we'll use brute force
var largestTriangleArea = function(points) {
    let maxArea = 0;

    // Loop through all triplets of points
    for (let i = 0; i < points.length - 2; i++) {
        for (let j = i + 1; j < points.length - 1; j++) {
            for (let k = j + 1; k < points.length; k++) {
                // Extract points
                const [x1, y1] = points[i];
                const [x2, y2] = points[j];
                const [x3, y3] = points[k];

                // Calculate area using the coordinate formula
                const area = Math.abs(
                    x1 * (y2 - y3) +
                    x2 * (y3 - y1) +
                    x3 * (y1 - y2)
                ) / 2;

                if (area > maxArea) {
                    maxArea = area;
                }
            }
        }
    }
    return maxArea;
};
