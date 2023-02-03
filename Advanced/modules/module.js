// inline
/*
export function formatCurrency(code, currency, amount) {
    ...
}
*/

function formatCurrency (code, currency, amount) {
    return new Intl.NumberFormat(code, {
        style: 'currency',
        currency: currency
    }).format(amount);
}

export default formatCurrency;