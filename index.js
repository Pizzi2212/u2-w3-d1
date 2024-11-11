// Exercise 1

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
  }
  static ageCompare(user1, user2) {
    if (user1.age > user2.age) {
      return 'user1 è più grande'
    } else if (user1.age === user2.age) {
      return 'user1 e user2 hanno la stessa età'
    } else if (user1.age < user2.age) {
      return 'user2 è più grande'
    } else {
      return 'inserisci utente'
    }
  }
}

const taty = new User('Taty', 'Castellanos', 25, 'Argentina')
const nico = new User('Nicolò', 'Rovella', 22, 'Italia')

console.log(User.ageCompare(taty, nico))

//Exercise 2

const petName = document.getElementById('petName')
const ownerName = document.getElementById('ownerName')
const species = document.getElementById('species')
const breed = document.getElementById('breed')

const form = document.getElementById('form')

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName
    this.ownerName = ownerName
    this.species = species
    this.breed = breed
  }
  ownerPet(pet) {
    return this.ownerName === pet.ownerName
  }
}

const pets = []

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const pet = new Pet(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  )
  pets.push(pet)
  console.log(pet)
})

const button = document.getElementById('buttonControl')

button.addEventListener('click', (e) => {
  console.log(pets[0].ownerPet(pets[1]))
})
