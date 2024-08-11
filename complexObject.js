let alien = {
    name : 'shimhan',
    password: 'shim@123',
    laptop: {
        cpu: 'i7',
        ram: '16gb',
        brand : 'Lenovo' 
    }
}

// console.log(alien)
// console.log(alien.name)
// console.log(alien.laptop)
// console.log(alien.laptop.cpu)
// console.log(alien.laptop['ram'])
console.log(alien.laptop.brand)

delete alien.laptop
console.log(alien)