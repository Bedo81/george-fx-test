const filterCurrencies = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postCurrency = post.currency.toLowerCase();
        const postName = post.nameI18N && post.nameI18N.toLowerCase();
        return (postName && postName.includes(query.toLowerCase())) || postCurrency.includes(query.toLowerCase());
    });
};

export default filterCurrencies;
