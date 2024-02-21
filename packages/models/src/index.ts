export function someSharedLogicMethod() {
  return getTotal() + 42;
}

function getTotal() {
  return 100;
}

export function process(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
