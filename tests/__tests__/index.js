import { add } from '../../index';
const  variable = 1;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;

test('Parse add', async() => {
  let data = add( variable );
  expect(data).toEqual('3');
});
