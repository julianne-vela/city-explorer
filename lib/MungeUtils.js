function mungeLocation(response) {
    const targetLocation = response[0];
    const formattedLocation = {
        formatted_query: targetLocation.display_name,
        latitude: targetLocation.lat,
        longitude: targetLocation.lon,
    };
    return formattedLocation;
}

function mungeWeather(response) {
    const targetData = response.data;
    const formattedResponse = targetData.map(object => {
        return {
            forecast: object.weather.description,
            time: object.datetime,
        };
    });
    return formattedResponse;
}

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
    mungeLocation,
    mungeWeather,
    mungeReviews,
};