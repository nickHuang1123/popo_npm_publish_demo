import { withInstall } from './utils/withInstall';
import button from './components/SButton.vue';
import input from './components/SInput.vue';

const SButton = withInstall(button);
const SInput = withInstall(input);

export {
  SButton,
  SInput
}

export default [
  SButton,
  SInput
]