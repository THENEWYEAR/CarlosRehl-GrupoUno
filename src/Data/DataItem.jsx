export const products = [
    {
        id: 1,
        name: 'RAM DDR4 8GB',
        price: 25000,
        despcription: 'Memoria RAM DDR4 8GB 3200MT/s Kingston Fury Beast RGB, CL16, DIMM, 1.35V',
        stock: 15,
        img:'https://media.spdigital.cl/thumbnails/products/icpdcgvy_b02983d1_thumbnail_512.jpg',
        categoria: 'Ram'

    },
    {
        id: 2,
        name: 'RAM Kingston Fury Beast',
        price: 35000,
        despcription: 'Memoria RAM Kingston Fury Beast RGB de 16GB (DDR4, 3733MHz, CL19, DIMM)',
        stock: 20,
        img: 'https://www.winpy.cl/files/w24684_kingston_fury_beast_rgb_2.jpg',
        categoria: 'Ram'

    },
    {
        id: 3,
        name: 'RAM 32GB DDR4',
        price: 40000,
        despcription: 'Memoria RAM 32GB DDR4 3200MT/S CL16 Kingston Fury Beast Black',
        stock: 7,
        img: 'https://centrale.cl/wp-content/uploads/Kingston-32Gb-3200Mt-S-DDR4-Cl16-Dimm-Fury-Beast-Negro-KF432C16BB-32.webp',
        categoria: 'Ram'

    },
    {
        id: 4,
        name: 'RAM 64GB DDR4',
        price: 45000,
        despcription: 'Memoria RAM 64GB DDR4 3200MHz DIMM CL22 ECC REG 1.2V 288p - Kingston Server Prem',
        stock: 20,
        img: 'https://res.cloudinary.com/djx6viedj/image/upload/t_trimmed_square_512/jn0c9gl8viektt8uheqfro16qfzs?_a=BACCd2Ev',
        categoria: 'Ram'

    },
    {
        id: 5,
        name: 'Western Digital 500GB Blue',
        price: 42000,
        despcription: 'Disco Duro Western Digital 500GB Blue 7200RPM 32MB 3.5IN',
        stock: 24,
        img: 'https://cdn3.spider.cl/5495-large_default/disco-duro-western-digital-500gb-blue-7200rpm-32mb-35in.jpg',
        categoria: 'Discos'
    },
    {
        id: 6,
        name: 'Disco Duro 1Tb',
        price: 75000,
        despcription: 'Disco Duro 1Tb Western Digital Purple Dahua',
        stock: 9,
        img: 'https://www.pcplay.cl/img/productos/2655/5f204382f9344b73a122f8aa.jpg?date=',
        categoria: 'Discos'
    },
    {
        id: 7,
        name: 'EVGA 500W',
        price: 120000,
        despcription: 'Fuente de Poder EVGA 500W W1 Certificada 80+ White Plus',
        stock: 6,
        img: 'https://cdn1.spider.cl/11276-large_default/fuente-de-poder-evga-500w-w1-certificada-80-white-plus.jpg',
        categoria: 'Fuentes'
    },
    {
        id: 8,
        name: 'Noga ATX-800',
        price: 300000,
        despcription: 'Fuente de poder para PC Noga ATX-800 800W negra 220V',
        stock: 9,
        img: 'https://http2.mlstatic.com/D_NQ_NP_937606-MLA74806234425_022024-O.webp',
        categoria: 'Fuentes'
    },
];




export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const filterProductsByCategory = (categoria) => {
    return products.filter(product => product.categoria === categoria);
};