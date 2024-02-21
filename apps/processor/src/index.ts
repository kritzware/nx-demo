import { process } from '@curve/models';

async function main() {
  console.log('running processor workers');
  await process();
  console.log('finished all jobs');
}

main();
