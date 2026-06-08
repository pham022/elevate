const renderTip = async () => {
    
    const requestedID = parseInt(window.location.href.split('/').pop())

    const response = await fetch('/tips')
    const data = await response.json()

    const tipContent = document.getElementById('tip-content')

    let tip

    if (data) {
        tip = data.find(tip => tip.id === requestedID)
    }

    if (tip) {
        document.getElementById('image').src = tip.image
        document.getElementById('title').textContent = tip.title
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + tip.submittedBy
        document.getElementById('category').textContent = 'Category: ' + tip.category
        document.getElementById('text').textContent = tip.text
        document.title = tip.title
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Data Available 😞'
        tipContent.appendChild(message)
    }
}

renderTip()