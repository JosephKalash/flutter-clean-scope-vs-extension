import * as changeCase from "change-case";

export function getUseCaseTemplate(name: string): string {
    return getDefaultUseCaseTemplate(name);
}

function getDefaultUseCaseTemplate(name: string): string {
  const pascalCaseName = changeCase.pascalCase(name.toLowerCase());
  const snakeCaseName = changeCase.snakeCase(name.toLowerCase());
  return `import 'package:dartz/dartz.dart';

import '../repositories/i${snakeCaseName}_repository.dart';

class UseCase {
  UseCase(this.repository);

  final I${pascalCaseName}Repository repository;

  Future<Either<Failure, List<${name}>>> call() async {
    return repository.get${name}s();
  }
}`;
}
