 let instructorName = {
    name: "Daniel",
    age: 4,
    address: "Kayode Ibidapo street",
    email: "coding@gmail.com",
 }
 console.log(instructorName)
 console.log(`The name of the instructor is ${instructorName.name} and the address is ${instructorName.address} and his email is ${instructorName.email}`)

for (key in instructorName) {
    console.log(key + ": " + instructorName[key])
}