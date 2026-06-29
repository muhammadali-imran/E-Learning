export async function paginate(model, options = {}) {
  const { page = 1, pageSize = 10, where = {}, include = [], order } = options;
  const limit = pageSize;
  const offset = (page - 1) * limit;

  const { count, rows } = await model.findAndCountAll({
    where,
    include,
    limit,
    offset,
    order,
    distinct: true,
  });

  const next = offset + limit < count ? page + 1 : null;

  return {
    results: rows,
    count,
    next,
  };
}