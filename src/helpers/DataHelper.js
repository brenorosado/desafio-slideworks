export const formatData = (input) => {
    const options = { day: 'numeric', month: 'short',year: 'numeric'}
    const date = new Date(input).toLocaleDateString('pt-BR', options);
    const day = date.split(' ')[0];
    const month = date.split(' ')[2];
    const year = date.split(' ')[4];
    const fomatedMonth = month.charAt(0).toUpperCase() + month.slice(1);

    return `${day} ${fomatedMonth} ${year}`;
};