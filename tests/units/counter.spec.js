import Counter from '@components/_common/counter';
import { mount } from '@vue/test-utils';

describe('couner', () => {
	const wrapper = mounter(Counter);
	it(wrapper.vm.data.count).to.be.equal(0);
});
