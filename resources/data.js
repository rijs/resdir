module.exports = {
  name: 'data'
, body: String
, headers: { loaded: loaded }
}

function loaded(ripple) {
  ripple.loadedResdir = arguments
}                                                                                                                                