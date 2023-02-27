class Dog {
    constructor(data) {
        Object.assign(this,data)
    }

    getDogHtml() {
        const {name,avatar,age,bio} = this
        return `
                <div class="dog-card" style="background-image: url(${avatar})">
                    <img id="badge-like" class="badge hidden" src="/graphics/like-image.png">
                    <img id="badge-none" class="badge hidden" src="/graphics/nope-image.png">
                    <div class="text">
                        <h2>${name},  ${age}</h2>
                        <p>${bio}</p>
                    </div>
                </div>
            `
    }

    setMatchStatus() {
        this.hasBeenLiked = true
        this.hasBeenSwiped = true
    }

    setSwipedStatus() {
        this.hasBeenSwiped = true
    }
}

export default Dog