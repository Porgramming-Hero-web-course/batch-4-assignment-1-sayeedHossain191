{
    // Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

    interface Profile {
        name: string
        age: number
        email: string
    }
    type partialProfile = Partial<Profile>

    const updateProfile = (obj1: Profile, obj2: partialProfile): Profile => {
        if (obj2.age !== undefined) {
            obj1.age = obj2.age;
        }
        return obj1
    }

    // Sample Input :
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
}