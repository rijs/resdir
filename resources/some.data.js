module.exports = {
  name: 'data'
, body: String
, headers: { loaded }
}

function loaded(ripple) {
  console.log("loaded")
  ripple.loadedResdir = arguments
}                                   