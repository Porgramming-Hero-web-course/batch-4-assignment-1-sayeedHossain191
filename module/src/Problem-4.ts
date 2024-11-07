{
    // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    interface circleType {
        shape: string
        radius: number
    }
    interface rectangleType {
        shape: string
        width: number
        height: number
    }
    type common = circleType | rectangleType

    const calculateShapeArea = (param: common): number => {
        if ('radius' in param) {
            return Math.PI * param.radius * param.radius;
        }
        else if ('width' in param && 'height' in param) {
            return param.width * param.height
        }
        throw new Error("Unknown shape type");
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });

    console.log(circleArea)
    console.log(rectangleArea)
}