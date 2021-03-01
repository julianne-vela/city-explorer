const {
    mungeLocation,
    mungeWeather,
    mungeReviews
} = require('../lib/MungeUtils.js');

const locationData = require('../lib/geojson.js');
const weatherData = require('../lib/weather.js');
const reviewData = require('../lib/reviews.js');

test('returns the location name, lat, and lon of the first item in the data', () => {
    const expectation = {
        formatted_query: 'Portland, Multnomah County, Oregon, USA',
        latitude: '45.5202471',
        longitude: '-122.6741949',
    };

    const actual = mungeLocation(locationData);
    expect(actual).toEqual(expectation);
});

test('returns an array of forecasts and times from the data', () => {
    const expectation = [
        {
            forecast: 'Scattered clouds',
            time: '2020-05-05'
        },
        {
            forecast: 'Light snow',
            time: '2020-05-06',
        },
        {
            forecast: 'Few clouds',
            time: '2020-05-07'
        },
    ];

    const actual = mungeWeather(weatherData);

    expect(actual).toEqual(expectation);
});

test('returns an array of objects with name, image_url, price, rating, and URL from the data', () => {
    const expectation = [
        {
            'name': 'Tony\'s Crab Shack',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/7fdSVpu4YlEzUdZmG7qq3w/o.jpg',
            'price': '$$',
            'rating': 4,
            'url': 'https://www.yelp.com/biz/tonys-crab-shack-bandon-2?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Face Rock Creamery',
            'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/IZyNYbvutH3xvwwZuw8Y5A/o.jpg',
            'price': '$',
            'rating': 4,
            'url': 'https://www.yelp.com/biz/face-rock-creamery-bandon?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Alloro Wine Bar and Restaurant',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/nSCiUfrJ12MQzSOie9mOJg/o.jpg',
            'price': '$$',
            'rating': 4.5,
            'url': 'https://www.yelp.com/biz/alloro-wine-bar-and-restaurant-bandon-4?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Wilsons Market',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/AgNwQ9F8bnThWKppel_fQQ/o.jpg',
            'price': '$',
            'rating': 5,
            'url': 'https://www.yelp.com/biz/wilsons-market-bandon?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Bandon Fish Market',
            'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/WM-5mV_N5jKjSC0jkDbOcg/o.jpg',
            'price': '$$',
            'rating': 4,
            'url': 'https://www.yelp.com/biz/bandon-fish-market-bandon?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Edgewaters',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/7wwl-TUi9QiN_VicsE0cjA/o.jpg',
            'price': '$$',
            'rating': 4,
            'url': 'https://www.yelp.com/biz/edgewaters-bandon?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Bandon Coffee Cafe',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/uI2wu-23KxqS-Fr5Zg02ag/o.jpg',
            'price': '$',
            'rating': 4.5,
            'url': 'https://www.yelp.com/biz/bandon-coffee-cafe-bandon?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Pablo\'s Corner',
            'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/tCZKoCRbH3uTdAxBGO0ihg/o.jpg',
            'rating': 5,
            'url': 'https://www.yelp.com/biz/pablos-corner-bandon?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Pastries & Pizza',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/ZjCWv57H_qjWnpLjCVDYJQ/o.jpg',
            'price': '$$',
            'rating': 4.5,
            'url': 'https://www.yelp.com/biz/pastries-and-pizza-bandon-4?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Coastal Mist Fine Chocolates and Desserts',
            'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/dyexHxizQVwxWQE9rTgcYQ/o.jpg',
            'price': '$$',
            'rating': 4.5,
            'url': 'https://www.yelp.com/biz/coastal-mist-bandon?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'The Loft Restaurant & Bar',
            'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/zP2y9DYffZQRxMe3KMaGfA/o.jpg',
            'price': '$$$',
            'rating': 4.5,
            'url': 'https://www.yelp.com/biz/the-loft-restaurant-and-bar-bandon?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Angelo\'s Italy',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/NPlnR2gAiN3efl9E9_KkVw/o.jpg',
            'price': '$$',
            'rating': 4,
            'url': 'https://www.yelp.com/biz/angelos-italy-bandon?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Bandon Brewing Company',
            'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/KmUXHYFC6KPvLGkMPAiYUA/o.jpg',
            'price': '$$',
            'rating': 3.5,
            'url': 'https://www.yelp.com/biz/bandon-brewing-company-bandon-2?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Broken Anchor Bar & Grill',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/U7hG8L2Np3H17fQRdMUABw/o.jpg',
            'price': '$$',
            'rating': 4,
            'url': 'https://www.yelp.com/biz/broken-anchor-bar-and-grill-bandon-2?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'The Rolling Pin Bake and Brew',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/LttevJL6zFAAeW1fjDzoBQ/o.jpg',
            'price': '$',
            'rating': 4.5,
            'url': 'https://www.yelp.com/biz/the-rolling-pin-bake-and-brew-bandon?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'The Wheelhouse & Crowsnest',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/hSGnbU6zBrYm1EfAiTPq5A/o.jpg',
            'price': '$$',
            'rating': 3.5,
            'url': 'https://www.yelp.com/biz/the-wheelhouse-and-crowsnest-bandon-3?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Foley\'s Irish Pub',
            'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/j9uv8zMbVxq3p9UrukUlqQ/o.jpg',
            'price': '$$',
            'rating': 3.5,
            'url': 'https://www.yelp.com/biz/foleys-irish-pub-bandon?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Bandon Baking Company',
            'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/eDbFj5wu-vqwXFaSVTjgPA/o.jpg',
            'price': '$',
            'rating': 4,
            'url': 'https://www.yelp.com/biz/bandon-baking-company-bandon?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Lord Bennett\'s Restaurant',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/Imb6oetpOr-49Y4mwetW8Q/o.jpg',
            'price': '$$$',
            'rating': 4,
            'url': 'https://www.yelp.com/biz/lord-bennetts-restaurant-bandon?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        },
        {
            'name': 'Shoestring Cafe',
            'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/LQysMvzifLWDct3PBl3RIw/o.jpg',
            'rating': 5,
            'url': 'https://www.yelp.com/biz/shoestring-cafe-bandon?adjust_creative=jjkVMHWW6SjsmKwpg3bLgQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jjkVMHWW6SjsmKwpg3bLgQ'
        }
    ];

    const actual = mungeReviews(reviewData);

    expect(actual).toEqual(expectation);
});

