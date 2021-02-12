let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputBreed = document.getElementById('inputBreed').value
    if (inputBreed === '') {
        return
    } else {
        import('./modules/ui.js').then(module => {
            let ui = new module.UI()
            ui.loader()
        })
        import('./modules/dog.js').then(module => {
            let dog = new module.DogApi()
            dog.fetchBreed(inputBreed.toLowerCase())
                .then(resp => {
                    import('./modules/ui.js').then(module => {
                        let ui = new module.UI()
                        ui.showImage(resp.breedDogData)
                    })
                })
        })
    }
})