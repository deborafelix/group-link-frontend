export const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day > 10 ? day : '0'+day} - ${month > 10 ? month : '0'+month} - ${year}`;
}