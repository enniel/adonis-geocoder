'use strict'

/**
 * adonis-geocoder
 * Copyright(c) 2017 Evgeny Razumov
 * MIT Licensed
 */

const Env = use('Env')

module.exports = {
  provider: 'google',
  apiKey: Env.get('GMAPS_API_KEY')
}
