const images = key => {
  const values = {
    default: require('./lazy100px.png'),
  };

  return values[key] || values.default;
};

export default images;
