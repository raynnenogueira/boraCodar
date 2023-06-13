IMask(document.querySelector('#cvv'), {
    mask: '000' // so vai aceitar tres numeros no campo
})

IMask(document.querySelector('#number'), {
    mask: '0000 0000 0000 0000' // quantidade de numeros no campo
})

IMask(document.querySelector('#validity'), {
    mask: 'MM{/}YY', // vai formatar automaticamente com o /
    blocks: {
        MM: {
            mask: IMask.MaskedRange, // vai determinar que va de tanto a tanto
            from: 1, // vai do mes 1
            to: 12, // ate o mes 12
        },

        YY: {
            mask: '00' // aceitar dois numeros
        }
    }
})