
export const create = ({ body }, res, next) =>
  res.status(201).json(body)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  res.status(200).json([])

export const show = ({ params }, res, next) =>
  res.status(200).json({})
