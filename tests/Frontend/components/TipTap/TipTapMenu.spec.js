import { mount } from '@vue/test-utils';
import { createContainer, createLocalVue } from '../../helper';
import { BootstrapVue } from 'bootstrap-vue';
import TipTapMenu from '../../../../resources/js/components/TipTap/TipTapMenu.vue';
import TipTapImage from '../../../../resources/js/components/TipTap/TipTapImage.vue';
import TipTapLink from '../../../../resources/js/components/TipTap/TipTapLink.vue';
import TipTapSource from '../../../../resources/js/components/TipTap/TipTapSource.vue';
import TipTapEditor from '../../../../resources/js/components/TipTap/TipTapEditor.js';
import { expect, it } from 'vitest';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('TipTap Menu', () => {
  it('Initalizing editor with value and emit content on change', async () => {
    const view = mount(TipTapMenu, {
      localVue,
      mocks: {
        $t: (key, values) => key + (values !== undefined ? ':' + JSON.stringify(values) : '')
      },
      stubs: {
        TipTapLink: true,
        TipTapImage: true,
        TipTapSource: true
      },
      attachTo: createContainer(),
      propsData: {
        editor: TipTapEditor('<p>Test</p>', () => {})
      }
    });

    await view.vm.$nextTick();

    // Check if link extension is mounted and has the correct content
    const link = view.findComponent(TipTapLink);
    expect(link.exists()).toBe(true);
    expect(link.props('editor').getHTML()).toBe('<p>Test</p>');

    // Check if image extension is mounted and has the correct content
    const image = view.findComponent(TipTapImage);
    expect(image.exists()).toBe(true);
    expect(image.props('editor').getHTML()).toBe('<p>Test</p>');

    // Check if source code editor is mounted and has the correct content
    const source = view.findComponent(TipTapSource);
    expect(source.exists()).toBe(true);
    expect(source.props('editor').getHTML()).toBe('<p>Test</p>');

    view.destroy();
  });
});
