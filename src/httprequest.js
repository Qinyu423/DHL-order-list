
export function getParcels() {
  return fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840')
    .then(data => data.json())
}