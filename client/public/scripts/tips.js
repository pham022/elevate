const renderTips = async () => {
    
    const response = await fetch('/tips')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {

        data.map(tip => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${tip.image})`

            const title = document.createElement('h3')
            title.textContent = tip.title
            bottomContainer.appendChild(title)

            const category = document.createElement('p')
            category.textContent = 'Category: ' + tip.category
            bottomContainer.appendChild(category)

            // const audience = document.createElement('p')
            // audience.textContent = 'Great For: ' + tip.audience
            // bottomContainer.appendChild(audience)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/tips/${tip.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer) 
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Data Available 😞'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
} else {
    renderTips()
}