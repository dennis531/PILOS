import { mount } from '@vue/test-utils';
import { BAlert, BButton } from 'bootstrap-vue';
import BrowserNotification from '../../../../resources/js/components/Room/BrowserNotification.vue';
import VueRouter from 'vue-router';
import { createContainer, createLocalVue } from '../../helper';
import { PiniaVuePlugin } from 'pinia';
import { useSettingsStore } from '../../../../resources/js/stores/settings';
import { createTestingPinia } from '@pinia/testing';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(PiniaVuePlugin);

const i18nDateMock = (date, format) => {
  return new Date(date).toLocaleString('en-US', { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false });
};

describe('Browser Notification', () => {
  it('show enable button if permission is granted', async () => {
    const NotificationFake = class {
      static permission = 'granted';
    };

    window.Notification = global.Notification = NotificationFake;

    const view = mount(BrowserNotification, {
      localVue,
      mocks: {
        $t: (key) => key
      },
      propsData: {
        running: false,
        name: 'test'
      },
      attachTo: createContainer()
    });

    await view.vm.$nextTick();
    expect(view.findComponent(BButton).exists()).toBeTruthy();
    view.destroy();
    delete window.Notification;
    delete global.Notification;
  });

  it('show enable button if permission is denied', async () => {
    const NotificationFake = class {
      static permission = 'denied';
    };

    window.Notification = global.Notification = NotificationFake;

    const view = mount(BrowserNotification, {
      localVue,
      mocks: {
        $t: (key) => key
      },
      propsData: {
        running: false,
        name: 'test'
      },
      attachTo: createContainer()
    });

    await view.vm.$nextTick();

    expect(view.findComponent(BButton).exists()).toBeTruthy();
    view.destroy();
    delete window.Notification;
    delete global.Notification;
  });

  it('show enable button if permission is missing', async () => {
    const constructorSpy = vi.fn();
    const closeSpy = vi.fn();

    const NotificationFake = class {
      constructor () {
        constructorSpy();
      }

      close () {
        closeSpy();
      }

      static permission = 'default';
    };

    window.Notification = global.Notification = NotificationFake;

    expect(constructorSpy).toBeCalledTimes(0);
    expect(closeSpy).toBeCalledTimes(0);

    const view = mount(BrowserNotification, {
      localVue,
      mocks: {
        $t: (key) => key
      },
      propsData: {
        running: false,
        name: 'test'
      },
      attachTo: createContainer()
    });

    await view.vm.$nextTick();

    expect(view.findComponent(BButton).exists()).toBeTruthy();
    expect(constructorSpy).toBeCalledTimes(1);
    expect(closeSpy).toBeCalledTimes(1);
    view.destroy();
    delete window.Notification;
    delete global.Notification;
  });

  it('hide enable button if not supported by browser', async () => {
    const view = mount(BrowserNotification, {
      localVue,
      mocks: {
        $t: (key) => key
      },
      propsData: {
        running: false,
        name: 'test'
      },
      attachTo: createContainer()
    });

    await view.vm.$nextTick();
    expect(view.findComponent(BButton).exists()).toBeFalsy();
    view.destroy();
  });
  it('show enable button if not fully supported', async () => {
    const NotificationFake = class {
      constructor () {
        throw new TypeError('test');
      }

      static permission = 'default';
    };

    window.Notification = global.Notification = NotificationFake;

    const view = mount(BrowserNotification, {
      localVue,
      mocks: {
        $t: (key) => key
      },
      propsData: {
        running: false,
        name: 'test'
      },
      attachTo: createContainer()
    });

    await view.vm.$nextTick();
    expect(view.findComponent(BButton).exists()).toBeFalsy();
    view.destroy();
    delete window.Notification;
    delete global.Notification;
  });

  it('enable notifications wih granted permission', async () => {
    const NotificationFake = class {
      static permission = 'granted';
    };

    window.Notification = global.Notification = NotificationFake;

    const view = mount(BrowserNotification, {
      localVue,
      mocks: {
        $t: (key) => key
      },
      propsData: {
        running: false,
        name: 'test'
      },
      attachTo: createContainer()
    });

    await view.vm.$nextTick();

    expect(view.findComponent(BButton).exists()).toBeTruthy();
    expect(view.findComponent(BAlert).exists()).toBeFalsy();
    await view.findComponent(BButton).trigger('click');
    expect(view.findComponent(BButton).exists()).toBeFalsy();
    expect(view.findComponent(BAlert).exists()).toBeTruthy();

    view.destroy();
    delete window.Notification;
    delete global.Notification;
  });
  it('enable notifications wih denied permission', async () => {
    const NotificationFake = class {
      static permission = 'denied';
    };

    const toastErrorSpy = vi.fn();

    window.Notification = global.Notification = NotificationFake;

    const view = mount(BrowserNotification, {
      localVue,
      mocks: {
        $t: (key) => key,
        toastError: toastErrorSpy
      },
      propsData: {
        running: false,
        name: 'test'
      },
      attachTo: createContainer()
    });

    await view.vm.$nextTick();
    expect(view.findComponent(BButton).exists()).toBeTruthy();
    expect(view.findComponent(BAlert).exists()).toBeFalsy();
    await view.findComponent(BButton).trigger('click');
    expect(view.findComponent(BButton).exists()).toBeTruthy();
    expect(view.findComponent(BAlert).exists()).toBeFalsy();
    expect(toastErrorSpy).toBeCalledTimes(1);
    expect(toastErrorSpy.mock.calls[0][0]).toEqual('rooms.notification.denied');

    view.destroy();
    delete window.Notification;
    delete global.Notification;
  });
  it('enable notifications wih default permission, but granted on request', async () => {
    const constructorSpy = vi.fn();

    const NotificationFake = class {
      constructor () {
        constructorSpy();
      }

      close () {
      }

      static permission = 'default';
      static requestPermission () {
        return new Promise(function (resolve, reject) {
          resolve('granted');
        });
      }
    };

    window.Notification = global.Notification = NotificationFake;

    const view = mount(BrowserNotification, {
      localVue,
      mocks: {
        $t: (key) => key
      },
      propsData: {
        running: false,
        name: 'test'
      },
      attachTo: createContainer()
    });

    await view.vm.$nextTick();
    expect(constructorSpy).toBeCalledTimes(1);
    expect(view.findComponent(BButton).exists()).toBeTruthy();
    expect(view.findComponent(BAlert).exists()).toBeFalsy();
    await view.findComponent(BButton).trigger('click');
    expect(view.findComponent(BButton).exists()).toBeFalsy();
    expect(view.findComponent(BAlert).exists()).toBeTruthy();

    view.destroy();
    delete window.Notification;
    delete global.Notification;
  }
  );
  it('enable notifications wih default permission, but denied on request', async () => {
    const constructorSpy = vi.fn();
    const NotificationFake = class {
      constructor () {
        constructorSpy();
      }

      close () {
      }

      static permission = 'default';
      static requestPermission () {
        return new Promise(function (resolve, reject) {
          resolve('denied');
        });
      }
    };

    window.Notification = global.Notification = NotificationFake;

    const toastErrorSpy = vi.fn();

    const view = mount(BrowserNotification, {
      localVue,
      mocks: {
        $t: (key) => key,
        toastError: toastErrorSpy
      },
      propsData: {
        running: false,
        name: 'test'
      },
      attachTo: createContainer()
    });

    await view.vm.$nextTick();
    expect(constructorSpy).toBeCalledTimes(1);

    expect(view.findComponent(BButton).exists()).toBeTruthy();
    expect(view.findComponent(BAlert).exists()).toBeFalsy();
    await view.findComponent(BButton).trigger('click');
    expect(view.findComponent(BButton).exists()).toBeTruthy();
    expect(view.findComponent(BAlert).exists()).toBeFalsy();

    expect(toastErrorSpy).toBeCalledTimes(1);
    expect(toastErrorSpy.mock.calls[0][0]).toEqual('rooms.notification.denied');

    view.destroy();
    delete window.Notification;
    delete global.Notification;
  });

  it('change status from not running to running', async () => {
    const constructorSpy = vi.fn();
    const closeSpy = vi.fn();
    const focusSpy = vi.fn();
    vi.useFakeTimers().setSystemTime(new Date('2017-01-01'));

    const NotificationFake = class {
      constructor (title, options = {}) {
        constructorSpy(title, options);
      }

      close () {
        closeSpy();
      }

      addEventListener (event, fnc) {
        this.clickFunction = fnc;
      }

      triggerClick () {
        this.clickFunction();
      }

      static permission = 'granted';
    };

    window.Notification = global.Notification = NotificationFake;
    window.focus = focusSpy;

    const view = mount(BrowserNotification, {
      localVue,
      mocks: {
        $t: (key, values) => key + (values !== undefined ? ':' + JSON.stringify(values) : ''),
        $d: i18nDateMock
      },
      propsData: {
        running: false,
        name: 'test'
      },
      attachTo: createContainer(),
      pinia: createTestingPinia()
    });

    useSettingsStore().settings = { favicon: 'favicon.ico' };

    await view.vm.$nextTick();
    await view.findComponent(BButton).trigger('click');
    await view.setProps({ running: true });

    expect(constructorSpy).toBeCalledTimes(1);
    expect(constructorSpy.mock.calls[0][0]).toEqual('test');
    expect(constructorSpy.mock.calls[0][1]).toEqual({ body: 'rooms.notification.body:{"time":"01/01/2017, 01:00"}', icon: 'favicon.ico' });

    await view.setProps({ running: false });
    expect(closeSpy).toBeCalledTimes(1);

    await view.setProps({ running: true });
    expect(constructorSpy).toBeCalledTimes(2);

    view.vm.$data.notification.triggerClick();
    expect(closeSpy).toBeCalledTimes(2);
    expect(focusSpy).toBeCalledTimes(1);

    view.destroy();
    delete window.Notification;
    delete global.Notification;
    delete window.focus;

    vi.useRealTimers();
  });
  it('change status from not running to running with error', async () => {
    const toastErrorSpy = vi.fn();

    const NotificationFake = class {
      constructor (title, options = {}) {
        throw new TypeError('test');
      }

      static permission = 'granted';
    };

    window.Notification = global.Notification = NotificationFake;

    const view = mount(BrowserNotification, {
      localVue,
      mocks: {
        $t: (key, values) => key + (values !== undefined ? ':' + JSON.stringify(values) : ''),
        $d: i18nDateMock,
        toastError: toastErrorSpy
      },
      propsData: {
        running: false,
        name: 'test'
      },
      attachTo: createContainer()
    });

    await view.vm.$nextTick();
    await view.findComponent(BButton).trigger('click');
    await view.setProps({ running: true });

    expect(view.findComponent(BButton).exists()).toBeFalsy();

    expect(toastErrorSpy).toBeCalledTimes(1);
    expect(toastErrorSpy.mock.calls[0][0]).toEqual('rooms.notification.browser_support');

    view.destroy();
    delete window.Notification;
    delete global.Notification;
  });
});
