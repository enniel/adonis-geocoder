'use strict'

const Env = use('Env')

module.exports = {
  provider: 'google',
  apiKey: Env.get('GMAPS_API_KEY')
}
