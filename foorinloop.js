let alien = {
    name: 'shimhan',
    password: 'shim@123',
    laptop: {
        cpu: 'i7',
        ram: '16gb',
        brand: 'Lenovo'
    }
}


for (let key in alien) {
    console.log(key, alien[key])
}

console.log("********************************************************************")


for (let key in alien.laptop) {
    console.log(key,alien.laptop[key])
}

