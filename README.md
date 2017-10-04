# Adonis Geocoder

## Installation

1. Add package:

```bash
$ npm i adonis-geocoder --save
```
or

```bash
$ yarn add adonis-geocoder
```

2. Register providers inside the your bootstrap/app.js file.

```js
const providers = [
  ...
  'adonis-geocoder/providers/GeocoderProvider',
  ...
]
```

3. Config

Copy configuration from [examples/config.js](https://github.com/enniel/adonis-geocoder/blob/master/examples/examples.js) to `config/geocoder.js`.

## Usage example

```js
const res = await Geocoder.geocode('29 champs elysée paris')

// output :
[ { formattedAddress: '29 Av. des Champs-Élysées, 75008 Paris, France',
    latitude: 48.869384,
    longitude: 2.3071868,
    extra:
     { googlePlaceId: 'ChIJ4e9zicRv5kcRi_EQo6FKduM',
       confidence: 1,
       premise: null,
       subpremise: null,
       neighborhood: 'Paris',
       establishment: null },
    administrativeLevels:
     { level2long: 'Paris',
       level2short: 'Paris',
       level1long: 'Île-de-France',
       level1short: 'Île-de-France' },
    streetNumber: '29',
    streetName: 'Avenue des Champs-Élysées',
    city: 'Paris',
    country: 'France',
    countryCode: 'FR',
    zipcode: '75008',
    provider: 'google' } ]
```

For more information see [node-geocoder](https://github.com/nchaulet/node-geocoder).

## Credits

- [Evgeni Razumov](https://github.com/enniel)

## Support

Having trouble? [Open an issue](https://github.com/enniel/adonis-geocoder/issues/new)!

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
