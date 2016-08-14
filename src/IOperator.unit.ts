import { validateOperator } from './IOperator';
import test from 'ava';

test('validates date ranges', t => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  t.throws(() => {
    validateOperator({
      $gte: tomorrow,
      $lte: today,
    });
  }, /Invalid range/);
});
