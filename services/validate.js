const RunSchemas = (schema) => async (value) => {
  const result = await schema.validateAsync(value);
  return result;
};

module.exports = { RunSchemas };