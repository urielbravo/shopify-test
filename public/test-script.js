const header = $('header.site-header').parent()

const makeHeader = data => {
    header.prepend(`<div>${data}</div>`).css({ 'background-color': 'orange', 'text-align': 'center' })

}

const body = $('body')

body.css({
    'position': 'relative'
})

const shop = Shopify.shop

const makeApp = products => {
    const bestSellerContainer = $(
        `<div>
            <h3>Our Best Sellers </h3>
        </div>`
    )
    .css({
        'position': 'fixed',
        'background-color': '#ffffff',
        'border': '1px solid black',
        'bottom': '80px',
        'right': '25px',
        'height': '400px',
        'width': '350px',
        'display': 'none'
    })

    const bestSellerButton = $('<img />').attr('src', 'https://cdn.shopify.com/s/files/1/0325/3174/2765/files/bestseller-button-trans.png?v=1584741923')
        .css({
            'position': 'fixed',
            'width': '150px',
            'bottom': '20px',
            'right': '20px',
            // 'cursor': 'pointer'
        })

        body.append(bestSellerButton)
        body.append(bestSellerContainer)

        bestSellerButton.click(() => {
            bestSellerContainer.slideToggle()
        })
}


fetch('https://cors-anywhere.herokuapp.com/https://035b70d9.ngrok.io/api/products?shop=sample-app-store3.myshopify.com')
    .then(res => res.json())
    .then(data => {
        makeApp(data.data)
        console.log(data)
    })
    .catch(error => console.log(error))