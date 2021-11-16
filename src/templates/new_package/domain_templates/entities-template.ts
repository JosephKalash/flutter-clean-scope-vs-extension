import * as changeCase from "change-case";

export function getUseCaseTemplate(name: string): string {
    return getDefaultUseCaseTemplate(name);
}

function getDefaultUseCaseTemplate(name: string): string {
  
  return `class ${name} {
  ${name}();
}`;
}
