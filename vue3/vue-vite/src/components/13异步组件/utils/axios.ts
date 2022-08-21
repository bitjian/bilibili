type Name = {
  name: string
}

const axios = function (url: string): Promise<Name[]> {
  return new Promise((resolve) => {
    const xhr: XMLHttpRequest = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        setTimeout(() => {
          resolve(JSON.parse(xhr.responseText))
        }, 2000)
      }
    }

    xhr.send(null)
  })
}

export default axios

// export axios
