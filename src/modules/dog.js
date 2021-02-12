class DogApi {
    async fetchBreed(breed) {
        const breedDog = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        const breedDogData = await breedDog.json()

        return { breedDogData }
    }
}

export { DogApi }