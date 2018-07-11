const typeChecker = (type: string, defaultValue: any, fieldName: string) => (val: any) => {
  if (type === "array" && !Array.isArray(val)) {
    console.warn(`Expected ${fieldName} to be array but got ${typeof val}`);
    return defaultValue;
  }

  if (type === "array" && Array.isArray(val)) return val;

  if (type === "object" && Array.isArray(val)) {
    console.warn(`Expected ${fieldName} to be object but got array`);
    return defaultValue;
  }

  if (typeof val !== type && Array.isArray(val)) {
    console.warn(`Expected ${fieldName} to be ${type} but got array`);
    return defaultValue;
  }

  if (typeof val !== type) {
    console.warn(`Expected ${fieldName} to be ${type} but got ${typeof val}`);
    return defaultValue;
  }

  return val;
};

export default typeChecker;
