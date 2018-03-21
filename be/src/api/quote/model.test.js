import { Quote } from '.'

let quote

beforeEach(async () => {
  quote = await Quote.create({ email: 'test', zipCode: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = quote.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(quote.id)
    expect(view.email).toBe(quote.email)
    expect(view.zipCode).toBe(quote.zipCode)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = quote.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(quote.id)
    expect(view.email).toBe(quote.email)
    expect(view.zipCode).toBe(quote.zipCode)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
