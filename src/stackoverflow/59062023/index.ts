export function main() {
  const blob = new Blob(["testing"], { type: "application/pdf" });
  console.log(blob);
}
