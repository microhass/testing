it('Capitalizes first letter', () => {
  expect(capitalize('batool')).toBe('Batool');
});

function capitalize(str) {
  return str.charAt(0).toUpperCase().concat(str.slice(1));
}
