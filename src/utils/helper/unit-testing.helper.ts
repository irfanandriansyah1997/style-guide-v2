import { IUnitTestingFixture } from '@/interface/unit-test';

/**
 * Helper Fixture Unit Testing
 * @param {UnitTestingFixtureInterface<input, output>} param - fixture variable
 * @return {void}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.01
 */
export function doTestFixture<INPUT, OUTPUT>(
  param: IUnitTestingFixture<INPUT, OUTPUT>,
  fn: (input: INPUT, output: OUTPUT) => void
): void {
  const { input, output } = param;

  input.forEach((item: INPUT, index: number): void => {
    fn(item, output[index]);
  });
}
