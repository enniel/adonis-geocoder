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

You can grab the sample configuration from [examples/geocoder.js](https://github.com/enniel/adonis-geocoder/blob/master/examples/geocoder.js).

## Usage example

```js
const res = yield Geocoder.geocode('29 champs elysée paris')

// output :
[{
  latitude: 48.8698679,
  longitude: 2.3072976,
  country: 'France',
  countryCode: 'FR',
  city: 'Paris',
  zipcode: '75008',
  streetName: 'Champs-Élysées',
  streetNumber: '29',
  administrativeLevels: {
    level1long: 'Île-de-France',
    level1short: 'IDF',
    level2long: 'Paris',
    level2short: '75'
  },
  provider: 'google'
}]
```

For more information see [node-geocoder](https://github.com/nchaulet/node-geocoder).

## Credits

- [Evgeni Razumov](https://github.com/enniel)

## Support

Having trouble? [Open an issue](https://github.com/enniel/adonis-geocoder/issues/new)!

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
