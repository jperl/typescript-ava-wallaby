interface IOperator {
  $gte?: Date;
  $lte?: Date;
}

export default IOperator;

export function validateOperator(operator: IOperator): boolean {
  if (operator.$gte > operator.$lte) {
    throw new Error('Invalid range. $gte is greater than $lte');
  }

  return true;
}
