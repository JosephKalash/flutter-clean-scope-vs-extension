import * as changeCase from "change-case";

export function getRepositoryTemplate(
  name: string,
  isEmptyPackage: boolean
): string {
  return getBaseRepositoryTemplate(name);
}

function getBaseRepositoryTemplate(name: string): string {
  const pascalCaseName = changeCase.pascalCase(name.toLowerCase());
  //   const snakeCaseName = changeCase.snakeCase(name.toLowerCase());
  return `import 'package:dartz/dartz.dart';
  
  abstract class I${pascalCaseName}Repository {
    Future<Either<Failure,List<${name}>>> get${name}();
  }`;
}
