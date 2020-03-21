myStorage = window.localStorage

listItem = []

listContainer = document.getElementById('list-container')
addElementButton = document.getElementById('add-element')

addElementButton.addEventListener('click', () => {
    form = document.getElementById('form-container')
    form.innerHTML = `
        <form id='addElementForm' onsubmit='doSomething()' method='POST'>
        <fieldset class="form-group">
            <div class="row">
                <label class="col-form-label col-sm-2 pt-0">Image</label>
                <div class="col-sm-10">
                    <div class="form-check">
                    <input class="form-check-input inline" type="radio" name="gridRadios" id="gridRadios1" value="../img/list_images/list_img_01.jpg" checked>
                    <label class="form-check-label inline" for="gridRadios1">
                        <img src="../img/list_images/list_img_01.jpg" class='card-header col-lg-3'>
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input inline" type="radio" name="gridRadios" id="gridRadios2" value="../img/list_images/list_img_02.jpg">
                    <label class="form-check-label inline" for="gridRadios2">
                        <img src="../img/list_images/list_img_02.jpg" class='card-header col-lg-3'>
                    </label>
                    </div>
                    <div class="form-check disabled">
                    <input class="form-check-input inline" type="radio" name="gridRadios" id="gridRadios3" value="../img/list_images/list_img_03.jpg">
                    <label class="form-check-label inline" for="gridRadios3">
                        <img src="../img/list_images/list_img_03.jpg" class='card-header col-lg-3'>
                    </label>
                </div>
            </div>
            </div>
        </fieldset>
        <div class="form-group">
        <label for="name">Name: </label>
        <input type="text" class="form-control" id="name" placeholder="John/Jane Doe...">
        </div>
        <div class="form-group">
        <label for="description">Description: </label>
        <input type="text" class="form-control" id="description" placeholder="Description...">
        </div>
        <div type="submit" class="btn btn-primary" id='submitButton'>Submit</div>
        </form>`
    createFormListener()
})

function doSomething() {
    console.log('clicked doSomething()')
}

function createFormListener() {
    console.log('created Form Listener')
    submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('click', () => {
        radio1  = document.getElementById('gridRadios1')
        radio2  = document.getElementById('gridRadios2') 
        radio3  = document.getElementById('gridRadios3')

        if (radio1.checked) file = radio1.value
        if (radio2.checked) file = radio2.value
        if (radio3.checked) file = radio3.value

        name    = document.getElementById('name').value
        desc    = document.getElementById('description').value

        listItem.push({
            'name'  : name,
            'desc'  : desc,
            'file'  : file
        })
        myStorage.setItem('listItem', JSON.stringify(listItem))
        reloadHTML()
    })
}

function reloadHTML() {
    arr = JSON.parse(myStorage.getItem('listItem'))
    element = arr[arr.length - 1]
    cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

    imgContainer = document.createElement('img')
    imgContainer.classList.add('card-header')
    imgContainer.classList.add('col-lg-12')
    imgContainer.src = element.file
    imgContainer.setAttribute('alt', 'There is supposed to be an image here')

    cardBodyDiv = document.createElement('div')
    cardBodyDiv.classList.add('card-body')

    descriptionText = document.createTextNode(element.desc)

    cardBodyDiv.appendChild(descriptionText)

    cardFooter = document.createElement('div')
    cardFooter.classList.add('card-footer')

    authorText = document.createTextNode('Created by: ' + element.name)
    cardFooter.appendChild(authorText)

    cardDiv.appendChild(imgContainer)
    cardDiv.appendChild(cardBodyDiv)
    cardDiv.appendChild(cardFooter)

    listContainer.appendChild(cardDiv)

}

listContainer.innerHTML = `
    <div class="card">
    <img src="../img/list_images/list_img_01.jpg" class='card-header col-lg-12' alt="There is supposed to be an image here">
    <div class="card-body">Powerlines and communication lines enable us to become more connected as a society and bridge the gap 
        between borders.
    </div>
    <div class="card-footer">Created by: Sheldon</div>
    </div>
    <div class="card">
    <img src="../img/list_images/list_img_02.jpg" class='card-header col-lg-12' alt="There is supposed to be an image here">
    <div class="card-body">
        Aliens lie somewhere between fact and fiction. You could think of them as a placeholder for explainations that we don't have yet.
    </div>
    <div class="card-footer">Created by: Sheldon</div>
    </div>
    <div class="card">
    <img src="../img/list_images/list_img_03.jpg" class='card-header col-lg-12' alt="There is supposed to be an image here">
    <div class="card-body">I have an idea, why don't we all try to encourage others with constructive feedback instead 
        of always attacking people to progress our own agendas. Imaging how much more successful this world would be.</div>
    <div class="card-footer">Created by: Sheldon</div>
    </div>
    <div class="card">
    <img src="../img/list_images/list_img_04.jpg" class='card-header col-lg-12' alt="There is supposed to be an image here">
    <div class="card-body">
        There's something truly beautiful about purple storms.
    </div>
    <div class="card-footer">Created by: Sheldon</div>
    </div>
    <div class="card">
    <img src="../img/list_images/list_img_05.jpg" class='card-header col-lg-12' alt="There is supposed to be an image here">
    <div class="card-body">
        Computer chips are the future of all things progressive in technology. However, innovation away from these marvels should
        not be feared. The future is unkown, and we should all be ready to embrace whatever change comes our way.
    </div>
    <div class="card-footer">Created by: Sheldon</div>
    </div>
    <div class="card">
    <img src="../img/list_images/lilst_img_06.jpg" class='card-header col-lg-12' alt="There is supposed to be an image here">
    <div class="card-body">
        “You won’t ever know if what you did personally helped … When the best way to save lives is to prevent a disease 
        rather than treat it, success often looks like an overreaction.”
    </div>
    <div class="card-footer">Created by: Sheldon</div>
    </div>`