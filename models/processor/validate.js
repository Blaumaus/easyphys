export default function validate (data) {
  let isValid = true

  data.given.forEach(item => {
    if (!Number(item.value)) {
      isValid = false
    }
  })

  return isValid
}

