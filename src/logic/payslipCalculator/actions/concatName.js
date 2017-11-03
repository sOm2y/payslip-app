//@flow

function concatName({ firstname, lastname }: NameInput): string {
  return `${firstname} ${lastname}`;
}

export default concatName;
