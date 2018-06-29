import numeral from 'numeral'

export const moneyLabel = (value) => {
    return numeral(value).format('$0,0.00');
}
