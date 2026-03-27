import { allLanguages, alltools } from "../data/sz/tools";

export function getMemberLanguages(names: string[]) {
  return names.map(
    (n) => allLanguages.find((l) => l.name === n) ?? { name: n, icon: "" }
  );
}

export function getMemberTools(names: string[]) {
  return names.map(
    (n) => alltools.find((t) => t.name === n) ?? { name: n, icon: "", category: "" }
  );
}