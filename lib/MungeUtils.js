function mungeReviews(response) {
    const targetData = response.businesses;
    const formattedResponse = targetData.map(object => {
        return {
            name: object.name,
            image_url: object.image_url,
            price: object.price,
            rating: object.rating,
            url: object.url,
        };
    });
    return formattedResponse;
}


module.exports = {
    mungeReviews,
};