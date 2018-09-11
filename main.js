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

function renderItem(item) {
  var $item = document.createElement('div')
  $item.classList.add('card', 'text-center', 'p-5')
  $item.setAttribute('data-item-id', item.itemId)
  $item.setAttribute('style', 'width: 50rem')
  $item.setAttribute('style', 'height: 20rem')
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

function renderCartCount(item) {
  var $cartCount = document.querySelector('.cart-count')
  var $number = document.createElement('span')
  $number.textContent = item.length
  var $bracketOpen = document.createTextNode('Cart (')
  var $bracketClose = document.createTextNode(')')
  $cartCount.innerHTML = ''
  $cartCount.appendChild($bracketOpen)
  $cartCount.appendChild($number)
  $cartCount.appendChild($bracketClose)
}

function renderCartItem(item) {
  var $item = document.createElement('div')
  $item.classList.add('my-auto', 'd-inline-flex')
  var $img = document.createElement('img')
  $img.classList.add('img-wrapper', 'p-3')
  $img.setAttribute('src', item.imageUrl)
  $img.setAttribute('style', 'width: 20rem')
  $img.setAttribute('style', 'height: 20rem')
  var $name = document.createElement('h3')
  $name.classList.add('text-left', 'p-2', 'col', 'align-self-center')
  $name.textContent = item.name
  var $brand = document.createElement('h4')
  $brand.classList.add('text-left', 'p-2', 'col', 'align-self-center')
  $brand.textContent = item.brand
  var $price = document.createElement('h5')
  $price.classList.add('text-left', 'p-2', 'col', 'align-self-center')
  $price.textContent = '$' + item.price
  $item.appendChild($img)
  $item.appendChild($name)
  $item.appendChild($brand)
  $item.appendChild($price)
  return $item
}

function renderAllCartItems(cart) {
  var $container = document.createElement('div')
  $container.classList.add('container', 'text-center')
  var $heading = document.createElement('h1')
  $heading.classList.add('text-center', 'p-5', 'text-uppercase')
  $heading.textContent = 'Shopping Cart'
  var $cart = document.createElement('div')
  $cart.classList.add('m-3', 'row-justify-content-center')
  $container.appendChild($heading)
  $container.appendChild($cart)

  for (var i = 0; i < cart.length; i++) {
    var cartItem = renderCartItem(cart[i])
    $cart.appendChild(cartItem)
  }

  var count = document.createElement('div')
  count.classList.add('align-self-end', 'text-right')
  count.textContent = cart.length + ' Item(s)'
  $container.appendChild(count)

  var total = document.createElement('div')
  total.classList.add('align-self-end', 'text-right')
  total.textContent = 'Total: $' + parseFloat(totalPrice(cart)).toFixed(2)
  console.log(total)
  $container.appendChild(total)

  var button = document.createElement('button')
  button.classList.add('btn', 'btn-outline-dark', 'center-block', 'm-3')
  button.setAttribute('id', 'shop-button')
  button.textContent = 'Continue Shopping'
  $container.appendChild(button)

  var checkout = document.createElement('button')
  checkout.classList.add('btn', 'btn-outline-dark', 'center-block', 'm-3')
  checkout.setAttribute('id', 'checkout-button')
  checkout.textContent = 'Checkout'
  $container.appendChild(checkout)
  return $container
}

function totalPrice(item) {
  var total = 0
  for (var i = 0; i < item.length; i++) {
    var itemPrice = item[i].price
    total += itemPrice
  }
  return total
}

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

var $detailView = document.querySelector('[data-view="details"]')
$detailView.addEventListener('click', function (event) {
  if (event.target.getAttribute('id') === 'add-button') {
    var item = app.details.item
    app.cart.push(item)
    app.view = 'details'
    renderApp(app)
  }
  if (event.target.getAttribute('id') === 'back-button') {
    app.view = 'catalog'
    renderApp(app)
  }
})

var $cartView = document.querySelector('[data-view="cart"]')
$cartView.addEventListener('click', function (event) {
  if (event.target.getAttribute('id') === 'shop-button') {
    app.view = 'catalog'
    renderApp(app)
  }
  if (event.target.getAttribute('id') === 'checkout-button') {
    app.view = 'checkout'
    renderApp(app)
  }
})

function renderItemObject(itemId, catalogItems) {
  for (var i = 0; i < catalogItems.length; i++) {
    var item = catalogItems[i]
    if (itemId === item.itemId) {
      return item
    }
  }
}

function renderDetails(catalogItem) {
  var $container = document.createElement('div')
  $container.classList.add('m-3', 'row')
  var $img = document.createElement('img')
  $img.classList.add('img-wrapper', 'p-5')
  $img.setAttribute('src', catalogItem.imageUrl)
  $img.setAttribute('style', 'width: 40rem')
  $img.setAttribute('style', 'height: 50rem')
  var $itemBody = document.createElement('div')
  $itemBody.classList.add('col', 'my-auto')
  var $name = document.createElement('h5')
  $name.classList.add('mt-5', 'text-left')
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
  var $add = document.createElement('button')
  $add.classList.add('btn', 'btn-outline-primary', 'float-right', 'mr-3', 'd-inline-flex')
  $add.setAttribute('id', 'add-button')
  $add.textContent = 'Add'
  var $back = document.createElement('button')
  $back.classList.add('btn', 'btn-outline-secondary', 'float-right', 'mr-3', 'd-inline-flex')
  $back.setAttribute('id', 'back-button')
  $back.textContent = 'Back'
  $container.appendChild($img)
  $container.appendChild($itemBody)
  $itemBody.appendChild($name)
  $itemBody.appendChild($brand)
  $itemBody.appendChild($origin)
  $itemBody.appendChild($description)
  $itemBody.appendChild($details)
  $itemBody.appendChild($price)
  $itemBody.appendChild($back)
  $itemBody.appendChild($add)
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

function changeClass() {
  var $cartView = document.querySelector('[data-view="cart"]')
  $cartView.classList.remove('hidden')
  app.view = 'cart'
  renderApp(app)
}

changeClass()

function renderApp(app) {
  var $view = document.querySelector('[data-view="' + app.view + '"]')
  if (app.view === 'catalog') {
    $view.innerHTML = ''
    $view.appendChild(renderCatalog(app.catalog.items))
  }
  if (app.view === 'details') {
    $view.innerHTML = ''
    $view.appendChild(renderDetails(app.details.item))
  }
  if (app.view === 'cart') {
    $view.innerHTML = ''
    $view.appendChild(renderAllCartItems(app.cart))
  }
  showView(app.view)
  renderCartCount(app.cart)
}

renderApp(app)
