const service = {
  name: ["Eric", "Patricia", "Florencia"],
};
const test = {
  teacher: ["Eric", "Delia", "Indiana"],
  result: [false, true, true],
};

Vue.component('my-li', {
  props: ['_name', '_id'],
  template: `
        <li :id="_id" v-on:click="deleteName(_id)">{{_name}}</li>
    `,
  methods: {
    deleteName: function (index) {
      console.log(index);
      var liToDelete = document.getElementById(index);
      liToDelete.parentElement.removeChild(liToDelete);
    },
  },
});
Vue.component('my-button', {
  props: ['_show'],
  template: `
    <div>
        <input type="button" value="End" v-on:click="getResult">
    </div>
    `,
  methods: {
    getResult: function () {
      var listInput = document.getElementsByClassName("test");
      var show = false;

      for (let index = 0; index < listInput.length; index++) {
        var element = listInput[index];

        if (element.checked === vm.listResult[index]) {
          show = true;
        } else {
          show = false;
          break;
        }
      }

      vm.showResult = show;
    },
  },
});
Vue.component('my-input', {
  props: ['_teacher', '_id'],
  template: `
    <div>
        <input type="checkbox" :id="_id" :name="_id" class="test">
        <label>{{_teacher}}</label>           
    </div>        
    `,
});
var vm = new Vue({
  el: 'main',
  data: {
    listNames: service.name,
    listTeacher: test.teacher,
    listResult: test.result,
    showResult: ''
  },
});
