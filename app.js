const companiesPromise = axios.get('https://acme-users-api-rev.herokuapp.com/api/companies')
const productPromise = axios.get('https://acme-users-api-rev.herokuapp.com/api/products')
const promiseAll = Promise.all([companiesPromise, productPromise])


const productLink = document.querySelector('.products')
productLink.addEventListener('click', (ev) => {
    ev.preventDefault()
    promiseAll
    .then( res => {
    console.log(res)
    const products = res[1]
    render(products.data)
})

})

const companies = document.querySelector('.companies')
companies.addEventListener('click', (ev) => {
    ev.preventDefault()
    promiseAll
    .then( res => {
    console.log(res)
    const companies = res[0]
    render(companies.data)
})

})





const render = (productOrCompanyData) => {
    const tableHeader = document.querySelector('.header')
    const tableContent = document.querySelector('tbody')
    tableHeader.innerHTML = ''
    tableContent.innerHTML = ''

    let headers = Object.keys(productOrCompanyData[0])

    const mappedHeaders = headers.map(header => `<th>${header}</th>`).join('')
    
    tableHeader.innerHTML = mappedHeaders
    
    //  productOrCompanyData.map(x => {
    //     //console.log(x.id)
        
    //     `<td>${x.id}</td>
    //     <td>${x.name}</td>
    //     <td>${x.description}</td>
    //     <td>${x.suggestedPrice}</td>
    //     <td>${x.createdAt}</td>
    //     <td>${x.updatedAt}</td>`
    // }).join('')

    
    console.log(tableContent)
    tableContent.innerHTML = tableContent.innerHTML + productOrCompanyData.map(x => {
        //console.log(x.id)
        return `
        <tr>
        <td>${x.id}</td>
        <td>${x.name}</td>
        <td>${x.description}</td>
        <td>${x.suggestedPrice}</td>
        <td>${x.createdAt}</td>
        <td>${x.updatedAt}</td>
        </tr>`
    }).join('')

    console.log(productOrCompanyData)


}





promiseAll
    .then( res => {
    console.log(res)
    const companies = res[0]
    const products = res[1]
    render(companies.data)
})

    



