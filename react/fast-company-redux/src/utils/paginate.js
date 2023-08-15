export function paginate(items, page, pageSize) {
  const startIndex = (page - 1) * pageSize;
  return [...items].splice(startIndex, pageSize);
}
