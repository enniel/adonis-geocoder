'use strict'

/**
 * adonis-geocoder
 * Copyright(c) 2017 Evgeny Razumov
 * MIT Licensed
 */

const ServiceProvider = require('adonis-fold').ServiceProvider

class GeocoderProvider extends ServiceProvider {
  * register () {
    this.app.bind('Adonis/Addons/Geocoder', function (app) {
      const Config = app.use('Adonis/Src/Config')
      const Geocoder = require('../src/Geocoder')
      return new Geocoder(Config.get('geocoder'))
    })
  }
}

module.exports = GeocoderProvider
