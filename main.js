var app = {
  view: 'catalog',
  catalog: {
    items: [
      {
        itemId: 1,
        name: 'Black Beauty',
        brand: 'Ludwig',
        price: 749.99,
        description: 'A snare drum for people with too many drumsticks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/ubY0QA'
      },
      {
        itemId: 2,
        name: 'Darbuka',
        brand: 'Vatan',
        price: 79.99,
        description: 'A hand drum for people who like belly dancing.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Turkey',
        imageUrl: 'https://sc01.alicdn.com/kf/HTB1zlUxLpXXXXa.XVXXq6xXFXXXl/Arabic-Egyptian-Drum-Darbuka.jpg_350x350.jpg'
      },
      {
        itemId: 3,
        name: 'Djembe',
        brand: 'Remo',
        price: 49.99,
        description: 'A hand drum for people with dreadlocks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'West Africa',
        imageUrl: 'https://goo.gl/iKtU8x'
      },
      {
        itemId: 4,
        name: 'Hi-Hats',
        brand: 'Paiste',
        price: 400,
        description: 'A set of hats for people who spare no expense.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Switzerland',
        imageUrl: 'https://goo.gl/LV9l8O'
      },
      {
        itemId: 5,
        name: 'Giant Step',
        brand: 'Sonor',
        price: 599,
        description: 'A pedal for metal drummers with only one foot.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Germany',
        imageUrl: 'https://goo.gl/zsFo1q'
      },
      {
        itemId: 6,
        name: 'Travis Barker Signature',
        brand: 'Zildjian',
        price: 24.99,
        description: 'A set of drumsticks from the 90s.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/Cro3tL'
      },
      {
        itemId: 7,
        name: 'Bodhran',
        brand: 'Meinl',
        price: 129.99,
        description: 'A frame drum for people who like to jig.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Ireland',
        imageUrl: 'https://goo.gl/YNb74O'
      },
      {
        itemId: 8,
        name: 'TR-09',
        brand: 'Roland',
        price: 399,
        description: 'A drum machine for people with no desk space.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Japan',
        imageUrl: 'https://goo.gl/gJYUxz'
      }
    ]
  },
  details: {
    item: null
  },
  cart: [
  ]
}

// Function rendering one catalog item
function renderItem(item) {
  var $item = document.createElement('div')
  $item.classList.add('card', 'text-center', 'p-5')
  $item.setAttribute('data-item-id', item.itemId)
  $item.setAttribute('style', 'width: 15rem')
  $item.setAttribute('style', 'height: 25rem')
  var $img = document.createElement('img')
  $img.classList.add('card-img-top')
  $img.setAttribute('src', item.imageUrl)
  var $itemBody = document.createElement('div')
  $itemBody.classList.add('card-body')
  var $name = document.createElement('h5')
  $name.classList.add('card-title')
  $name.textContent = item.name
  var $brand = document.createElement('h6')
  $brand.classList.add('card-subtitle')
  $brand.textContent = item.brand
  var $price = document.createElement('h6')
  $price.classList.add('card-text')
  $price.textContent = '$' + item.price
  $item.appendChild($img)
  $item.appendChild($itemBody)
  $itemBody.appendChild($name)
  $itemBody.appendChild($brand)
  $itemBody.appendChild($price)
  return $item
}

// Function rendering entire catalog
function renderCatalog(catalog) {
  var $container = document.createElement('div')
  $container.classList.add('container')
  var $heading = document.createElement('h1')
  $heading.textContent = 'Jamazon'
  $heading.classList.add('text-center', 'p-5', 'text-uppercase')
  var $row = document.createElement('div')
  $row.classList.add('row')
  $container.appendChild($heading)
  $container.appendChild($row)

  for (var i = 0; i < catalog.length; i++) {
    var $col = document.createElement('div')
    $col.classList.add('col-6', 'col-sm-3')
    var $item = renderItem(catalog[i])
    $col.appendChild($item)
    $row.appendChild($col)
  }
  return $container
}

// Function rendering cart item count
function renderCartCount(cart) {
  var $count = document.createElement('div')
  $count.classList.add('number-of-cart-items', 'float-right', 'p-4')
  $count.textContent = 'Cart ( ' + cart.length + ' )'
  return $count
}

// Function returning a cart item
function renderCartItem(item) {
  var $container = document.createElement('div')
  $container.classList.add('d-flex', 'w-100', 'justify-content-between')
  var $img = document.createElement('img')
  $img.setAttribute('src', item.imageUrl)
  $img.classList.add('float-left')
  var $name = document.createElement('h3')
  $name.classList.add('float-right')
  $name.textContent = item.name
  var $brand = document.createElement('h4')
  $brand.classList.add('float-right')
  $brand.textContent = item.brand
  var $price = document.createElement('h5')
  $price.classList.add('float-right')
  $price.textContent = item.price
  $container.appendChild($img)
  $container.appendChild($name)
  $container.appendChild($brand)
  $container.appendChild($price)
  return $container
}

// Function rendering all cart items
function renderAllItems(items) {
  var $container = document.createElement('div')
  $container.classList.add('container')
  var $list = document.createElement('div')
  $list.classList.add('list-group')
  var $heading = document.createElement('h1')
  $heading.classList.add('text-center', 'p-5', 'text-uppercase')
  $heading.textContent = 'Shopping Cart'
  $container.appendChild($list)
  $container.appendChild($heading)

  for (var i = 0; i < items.length; i++) {
    var item = renderCartItem(items[i])
    var count = document.createElement('h5')
    count.textContent = items.length + ' Items'
    var total = document.createElement('h5')
    total.textContent += '$' + items.price
    var $itemList = document.createElement('div')
    $itemList.classList.add('list-group-item', 'flex-column', 'align-items-start')
    $itemList.appendChild(item)
    $list.appendChild($itemList)
    $container.appendChild(count)
    $container.appendChild(total)
  }
  return $container
}

renderAllItems()

// Click Event Listener from catalog to details page
var $catalogView = document.querySelector('[data-view="catalog"]')
$catalogView.addEventListener('click', function (event) {
  var $item = event.target.closest('[data-item-id]')
  if (!$item) return
  var number = $item.getAttribute('data-item-id')
  var numberId = Number(number)
  var clickedItem = renderItemObject(numberId, app.catalog.items)
  app.view = 'details'
  app.details.item = clickedItem
  renderApp(app)
  renderDetails(app)
})

// Click Event Listener for add button
var $detailView = document.querySelector('[data-view="details"]')
$detailView.addEventListener('click', function (event) {
  if (event.target.getAttribute('id') === 'addButton') {
    var item = app.details.item
    app.cart.push(item)
    app.view = 'cart'
    renderCartCount(app.cart)
    renderApp(app)
  }
})

// Click Event Listener for back button
var $cartView = document.querySelector('[data-view="cart"]')
$cartView.addEventListener('click', function (event) {
  if (event.target.getAttribute('id') === 'backButton') {
    app.view = 'catalog'
    renderApp(app)
  }
})

// Function returning item Object with matching itemId
function renderItemObject(itemId, catalogItems) {
  for (var i = 0; i < catalogItems.length; i++) {
    var item = catalogItems[i]
    if (itemId === item.itemId) {
      return item
    }
  }
}

// Function rendering all details of one catalog item
function renderDetails(catalogItem) {
  var $container = document.createElement('div')
  $container.classList.add('align-self-center', 'm-3')
  var $img = document.createElement('img')
  $img.classList.add('float-left')
  $img.setAttribute('src', catalogItem.imageUrl)
  $img.setAttribute('style', 'width: 30rem')
  $img.setAttribute('style', 'height: 30rem')
  $img.classList.add('align-self-center')
  var $itemBody = document.createElement('div')
  $itemBody.classList.add('float-right')
  var $name = document.createElement('h5')
  $name.classList.add('mt-5')
  $name.textContent = catalogItem.name
  var $brand = document.createElement('h6')
  $brand.classList.add('text-left')
  $brand.textContent = catalogItem.brand
  var $description = document.createElement('p')
  $description.classList.add('text-left')
  $description.textContent = catalogItem.description
  var $details = document.createElement('p')
  $details.classList.add('text-left')
  $details.textContent = catalogItem.details
  var $origin = document.createElement('p')
  $origin.classList.add('text-left')
  $origin.textContent = catalogItem.origin
  var $price = document.createElement('h6')
  $price.classList.add('text-left')
  $price.textContent = '$' + catalogItem.price
  var $addButton = document.createElement('button')
  $addButton.classList.add('btn', 'btn-outline-primary', 'float-right', 'mr-3', 'd-inline-flex')
  $addButton.setAttribute('id', 'addButton')
  $addButton.textContent = 'Add'
  var $backButton = document.createElement('button')
  $backButton.classList.add('btn', 'btn-outline-secondary', 'float-right', 'mr-3', 'd-inline-flex')
  $backButton.setAttribute('id', 'backButton')
  $backButton.textContent = 'Back'
  $container.appendChild($img)
  $container.appendChild($itemBody)
  $itemBody.appendChild($name)
  $itemBody.appendChild($brand)
  $itemBody.appendChild($origin)
  $itemBody.appendChild($description)
  $itemBody.appendChild($details)
  $itemBody.appendChild($price)
  $itemBody.appendChild($backButton)
  $itemBody.appendChild($addButton)
  return $container
}

function showView(view) {
  var $views = document.querySelectorAll('[data-view]')
  for (var i = 0; i < $views.length; i++) {
    var $view = $views[i]
    if ($view.getAttribute('data-view') === view) {
      $view.classList.remove('hidden')
    }
    else {
      $view.classList.add('hidden')
    }
  }
}

function renderApp(app) {
  var $view = document.querySelector('[data-view="' + app.view + '"]')
  if (app.view === 'catalog') {
    $view.innerHTML = ''
    $view.appendChild(renderCartCount(app.cart))
    $view.appendChild(renderCatalog(app.catalog.items))
  }
  if (app.view === 'details' || app.view === 'cart') {
    $view.innerHTML = ''
    $view.appendChild(renderCartCount(app.cart))
    $view.appendChild(renderDetails(app.details.item))
  }
  showView(app.view)
}

renderApp(app)
