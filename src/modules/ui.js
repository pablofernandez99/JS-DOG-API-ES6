class UI {
    constructor() {
        this.content = document.getElementById('content')
    }

    showImage(breed) {
        if (breed.status === 'error') {
            this.content.innerHTML = `
                <p>${breed.message}</p>
            `
        } else {
            this.content.innerHTML = `
                <img src="${breed.message}"/>
            `
        }
    }

    loader() {
        this.content.innerHTML = `
        <div class="loader">
            
        </div>
        `
    }
}

export { UI }