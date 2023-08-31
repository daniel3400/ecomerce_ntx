export default{
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'imagen',
            title: 'Imagen',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        },
        {
            name: 'productos',
            title: 'Productos',
            type: 'string',
        },
        {
            name: 'descripcion',
            title: 'Descripcion',
            type: 'string',
        },
        {
            name: 'smallText',
            title: 'SmallText',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'MidText',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'LargeText1',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'LargeText2',
            type: 'string',
        },
        {
            name: 'descuento',
            title: 'Descuento',
            type: 'string',
        },
        {
            name: 'tiempoVenta',
            title: 'TiempoVenta',
            type: 'string',
        },
    ],
};