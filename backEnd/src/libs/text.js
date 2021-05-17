exports.reverse = (_text) => {
  if (_text && _text.length > 0) {
    try {
      const arrayText = Array.from(_text).reverse().join('')
      return {
        status: 0,
        data: {
          text: arrayText,
          palindrome: _text.toLowerCase() === arrayText.toLowerCase()
        }
      }
    } catch (_error) {
      console.log(_error)
      return { status: 99, data: { error: _error } }
    }
  } else {
    return {
      status: 99,
      data: {
        error: 'no text'
      }
    }
  }
}
