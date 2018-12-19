import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import LoginForm from "@/components/Auth/LoginForm.vue";

describe("LoginForm.vue", () => {

  let wrapper;

  beforeEach(() => {
      const localVue = createLocalVue()
      localVue.use(Vuetify)

      wrapper = mount(LoginForm, {
        localVue: localVue
    })
  })

  it("renders", () => {
    
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.response).toBe('{"email":"","password":""}')
    //expect(wrapper.contains('button')).toBe(true)
  });
});
