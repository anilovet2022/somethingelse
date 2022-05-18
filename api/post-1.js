exports.handler = async event => {
  if (event.queryStringParameters.fbclid) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: 'https://theancientzen.com/humans-are-aliens-according-to-an-expert-and-we-were-brought-to-earth-hundreds-of-thousands-of-years-ago/'
      }
    }
  }
}
