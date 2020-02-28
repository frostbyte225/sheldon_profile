// Card Definitions
let cards = [
    {
        'title'         : 'project one',
        'desc'          : 'This is a description of a project',
        'img_source'    : '',
        'last_updated'  : 5
    },
    {
        'title'         : 'project two',
        'desc'          : 'This is the description for the second project',
        'img_source'    : '',
        'last_updated'  : 10
    },
    {
        'title'         : 'project three',
        'desc'          : 'This is the description for the third project',
        'img_source'    : '',
        'last_updated'  : 50
    }
]

var hasClickedAlpha = false;
var hasClickedDate = false;

let card_group = document.getElementById('project-card-container')
let html_cards = document.getElementsByClassName('card')
let num = html_cards.length
var sorted_cards = sortByAlphanumeric()

let sorting_request = document.getElementById('sort-by-alpha')
sorting_request.addEventListener('click', () => {
    if ( hasClickedAlpha == false ) {
        removeElements()
        sorted_cards = sortByAlphanumeric()
        insertSortedHTML();
        hasClickedAlpha = true
        hasClickedDate = false
    }
})

let sorting_request_date = document.getElementById('sort-by-date') 
sorting_request_date.addEventListener('click', () => {
    if ( hasClickedDate == false ) {
        removeElements();
        sorted_cards = sortByDate()
        insertSortedHTML();
        hasClickedDate = true
        hasClickedAlpha = false
    }
})

// Removing original HTML
function removeElements() {
    while ( num > 0 ) {
        html_cards.item(num-1).remove()
        num--
    }    
}

function displayAllElements() {
 cards.forEach( card => {
     card_group.innerHTML(`
     <div class="card">
     <img class="card-img-top" src="..." alt="Card image cap">
     <div class="card-body">
       <h5 class="card-title">${card.title}</h5>
       <p class="card-text">${card.desc}</p>
       <p class="card-text"><small class="text-muted">Last updated <span class="updated text-muted">${card.last_updated}</span> mins ago</small></p>
     </div>
    </div>
     `)
 })
}


// Sorting w/ inner HTML
function insertSortedHTML() {

    console.log(sorted_cards)
    sorted_cards.forEach(card => {
        // create_card()
        // create_card_body()
        let new_card = document.createElement('div')
        new_card.setAttribute('class', 'card')
        
        let img_src = document.createElement('class','card-img-top')
        img_src.setAttribute('src', card.img_source)
    
        let card_body = document.createElement('div')
        card_body.setAttribute('class', 'card-body')
    
        let heading_5 = document.createElement('h5')
        heading_5.setAttribute('class','card-title')
        heading_5.innerHTML = (card.title)
    
        let p_tag = document.createElement('p')
        p_tag.setAttribute('class', 'card-text')
        p_tag.innerHTML = (card.desc)
    
        let updated = document.createElement('p')
        updated.setAttribute('class', 'card-text')
        updated.innerHTML = (`<small class="text-muted">Last updated <span class="updated text-muted">${card.last_updated}</span> mins ago</small>`)
    
        card_body.appendChild(heading_5)
        card_body.appendChild(p_tag)
        card_body.appendChild(updated)
    
        new_card.appendChild(img_src)
        new_card.appendChild(card_body)
    
        card_group.appendChild(new_card)
    
        num++
    })
}

// @Return: Array
function sortByAlphanumeric() {
    let newCardArray = []
    let titles = []
    cards.forEach(card => {
        titles.push(card.title)
    })

    titles.sort()
    
    titles.forEach(title => {
        cards.forEach(card => {
            if ( card.title == title ) 
                newCardArray.push(card);
        })
    })
    return newCardArray
}

// @Return: Array 
function sortByDate() {
    let newCardArray = []
    let dates = []
    cards.forEach(card => {
        dates.push( card.last_updated )
    })

    dates.sort((a, b) => a - b);

    dates.forEach(date => {
        cards.forEach(card => {
            if ( card.last_updated == date ) 
                newCardArray.push( card )
        })
    })
    return newCardArray
}