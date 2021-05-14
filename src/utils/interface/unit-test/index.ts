/**
 * Unit Testing Fixture Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.01
 */
export interface IUnitTestingFixture<INPUT, OUTPUT> {
  input: INPUT[];
  output: OUTPUT[];
}
