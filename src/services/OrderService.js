export const fetchFields = async client => await (await fetch(`${ApiUrl}/api/order/custom_order/${client}`)).json()
export const makeOrderRequest = async (formData, client) => await (await fetch(`${ApiUrl}/api/order/order_request/${client}`, {
  body: formData,
  method: 'POST'
})).json()