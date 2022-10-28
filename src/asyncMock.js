const products = [

    { 
        id: '1', 
        name: 'Termotanque 65lt', 
        price: 8000, 
        category: 'termotanque', 
        img:'https://images.fravega.com/f1000/444cd6b8ad98b2af18d53de5cf0918af.jpg', 
        stock: 10, 
        description:'Termotanque a gas de 65 litros.'
    },
    { 
        id: '2', 
        name: 'Calefactor 5000 kcal', 
        price: 6000, 
        category: 'calefactor', 
        img:'https://images.fravega.com/f1000/c7b6be1545b364f6d9f60b3f643a1856.jpg', 
        stock: 5, 
        description:'Calefactor 5000 calorías con salida al exterior.'
    },
    { 
        id: '3', 
        name: 'Calefactor 3000 kcal Sin Salida', 
        price: 3000, 
        category: 'calefactor', 
        img:'https://images.fravega.com/f500/3858ffb21c2010197aa77e58f981349f.jpg', 
        stock: 11, 
        description:'Calefactor 3000 calorías sin salida al exterior.'
    },
    { 
        id: '4', 
        name: 'Perilla Cocina', 
        price: 500, 
        category: 'cocina', 
        img:'https://www.deplano.com.ar/11968-large_default/perilla-domec-p-coc-mod-96-2-cpo-blanco-256-bco-2.jpg', 
        stock: 35, 
        description:'Perilla para cocina estándar.'
    },
    { 
        id: '5', 
        name: 'Cocina Blanca', 
        price: 5000, 
        category: 'cocina', 
        img:'https://aurora.vteximg.com.br/arquivos/ids/155559-1000-1000/7795473033091.jpg', 
        stock: 8, 
        description:'Cocina color blanco, 4 hornallas y horno.'
    },
    { 
        id: '6', 
        name: 'Termocupla Calefactor', 
        price: 1500, 
        category: 'calefactor', 
        img:'https://www.refrigeracionmitre.com.ar/img/articulos/TR0011_1.jpg', 
        stock: 25, 
        description:'Termocupla para calefactor.'
    }
]

export const getProducts = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            resolve(products.find(product => product.id === id) )
        }, 2000)
    })
}

