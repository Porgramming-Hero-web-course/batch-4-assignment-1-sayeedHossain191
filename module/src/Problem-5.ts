{
    // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

    type personType = {
        name: string
        age: number
    }
    //type personType2 = keyof personType

    const getProperty = <A extends personType, B extends keyof A>(param1: A, param2: B): A[B] => {

        return param1[param2]
    }

    //const person = <personType>({ name: "Alice", age: 30 });
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
}