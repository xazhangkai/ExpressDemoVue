import { shallowMount } from '@vue/test-utils';
import Login from '@/views/login/index.vue';

describe('Login.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Login, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
