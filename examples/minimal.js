'use strict'

/**
 * adonis-geocoder
 * Copyright(c) 2017 Evgeny Razumov
 * MIT Licensed
 */

const _ = require('lodash')
const path = require('path')
const { ioc, registrar, resolver } = require('@adonisjs/fold')

const Config = {
  get (key) {
    return _.get(this, key)
  },

  get geocoder () {
    return require('./config')
  },

  merge (key, defaultValues, customizer) {
    const value = this.get(key, {})
    return _.mergeWith(defaultValues, value, customizer)
  }
}

const Helpers = {
  appRoot () {
    return __dirname
  }
}

const run = async () => {
  // minimal bootstrap
  resolver
    .appNamespace('App')
  registrar
    .providers([
      '@adonisjs/framework/providers/AppProvider',
      path.join(__dirname, '../providers/GeocoderProvider')
    ])
    .register()
  ioc.bind('Adonis/Src/Config', function () {
    return Config
  })
  ioc.bind('Adonis/Src/Helpers', function () {
    return Helpers
  })
  await registrar.boot()
  // usage example
  const Geocoder = use('Geocoder')
  const res = await Geocoder.geocode('29 champs elysée paris')
  console.log(res)
}

run().catch(console.error)
