import * as changeCase from "change-case";

export function getDomainTemplate(
  name: string,
  isEmptyProject: boolean
): string {
  return getBaseDomainTemplate(name);
}

function getBaseDomainTemplate(name: string): string {
  const pascalCaseName = changeCase.pascalCase(name.toLowerCase());
  const snakeCaseName = changeCase.snakeCase(name.toLowerCase());
  return `// Export Entities
// TODO: Export entities
export 'entities/${pascalCaseName}_entity.dart';
// Export Repositories
export 'repositories/i${snakeCaseName}_repository.dart';

// Export Use Cases
export 'usecases/get${snakeCaseName}.dart';
`;
}
