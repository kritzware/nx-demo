import { Statement } from '@curve/models';

async function main() {
  console.log('running processor workers');

  const statement = new Statement();
  await statement.process();

  console.log('finished all jobs');
}

main();
