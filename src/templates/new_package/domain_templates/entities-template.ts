import * as changeCase from "change-case";

export function getEntityTemplate(name: string): string {
    return getDefaultEntityTemplate(name);
}

function getDefaultEntityTemplate(name: string): string {
  
  return `class ${name} {
  ${name}();
}`;
}
