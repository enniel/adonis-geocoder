'use strict'

/**
 * adonis-geocoder
 * Copyright(c) 2017 Evgeny Razumov
 * MIT Licensed
 */

require('harmony-reflect')
const geocoder = require('node-geocoder')

class Geocoder {
  constructor (config) {
    this.geocoder = geocoder(config)
    return new Proxy(this, {
      get (target, name) {
        return target.geocoder[name]
      }
    })
  }
}

module.exports = Geocoder
