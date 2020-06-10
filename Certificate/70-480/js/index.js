const service = {
  exams: [
    {
      NumberQuestion: "Question 1",
      Model: "Volume A",
      Introductions: {
        "1": "You have a webpage that includes the following markup:",
        "2":
          '<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<script src="jquery.js"></script>\n\t\t<script></script>\n\t</head>\n\t<body>\n\t\t<div id="Div1"></div>\n\t\t<span id="Span1"></span>\n\t</body>\n</html>',
        "3":
          "When the page is loaded, the SPAN element must be moved as follows:",
        "4": '<div id="Div1"><span id="Span1"></span></div>',
        "5":
          "You need to move the SPAN element and preserve any event handlers attached to the SPAN which code segment should you use?",
      },
      Options: {
        A:
          'document.getElementById("Div1").appendChild(document.getElementById("Span1"))',
        B:
          'var moveElement = document.getElementById("Div1").moveElement.parentNode.appendChild(moveElement);',
        C:
          'document.getElementById("Span1").appendChild(document.getElementById("Div1")',
        D:
          'var moveElement = document.getElementById("Span1"); moveElement.parentNode.appendChild(moveElement)',
      },
      TypeOption: "radio",
      Results: [false, true, false, false],
      ID: "Q1VA",
    },
    {
      Model: "Volume A",
      NumberQuestion: "Question 2",
      Introductions: {
        "1":
          "You are developing a customer web form that includes the following HTML.",
        "2": '<input id="txtValue" type="text">',
        "3":
          "A customer must enter a valid age in the text box prior to submitting the form.",
        "4": "You need to add validation to the control",
        "5": "Which code segment should you use?",
      },
      Options: {
        A:
          'function validate() {\n\tvar value = $("txtValue").text();\n\tvar regex = /^[d,.]*$/;\n\tif (!regex.test(value) || name == "")\n\t\talert("please enter valid value");\n\treturn;\n}',
        B:
          'function validate() {\n\tvar name = $("txtValue").val();\n\tif (name == null || name == "")\n\t\talert("please enter valid value");\n\treturn;\n}',
        C:
          'function validate() {\n\tvar name = $("txtValue").text();\n\tif (name == null || name == "")\n\t\talert("please enter valid value");\n\treturn;\n}',
        D:
          '\tfunction validate() {\n\t\tvar value = $("txtValue").val();\n\t\tvar regex = /^[d,.]*$/;\n\t\tif (!regex.test(value) || value == "")\n\t\t\talert("please enter valid value");\n\t\treturn;\n\t}\n\treturn emailPattern.test(userinput);\n}',
      },
      TypeOption: "checkbox",
      Results: [false, true, false, true],
      ID: "Q2VA",
    },
    {
      Model: "Volume A",
      NumberQuestion: "Question 3",
      Introductions: {
        "1":
          "You are developing a customer contact form that will be displayed on a page of a company's website. The page collects information about the customer.",
        "2":
          "If a customer enters a value before submitting the form, it must be a valid email address",
        "3": "You need to ensure that the data validation requirement is met",
        "4": "What should you use?",
      },
      Options: {
        A: '<input name ="email" type="url"/>',
        B: '<input name ="email" type="text" required="required"/>',
        C: '<<input name ="email" type="text"/>',
        D: '<input name ="email" type="email"/>',
      },
      TypeOption: "radio",
      Results: [false, true, false, false],
      ID: "Q3VA",
    },
    {
      Model: "Volume A",
      NumberQuestion: "Question 4",
      Introductions: {
        "1":
          "You are developing a form that captures a user's email address by using HTML5 and jQuery \nThe form must capture the email address and return it as a query string parameter. The query string parameter must display the @ symbol that is used in the email address.\nYou need to implement this functionality.\nHow should you develop the form? (To answer, drag the appropriate code segment to the correct targe or targets in the answer area. Each code segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.)\nSelect and Place:",
      },
      Options: {
        A: '<input name ="email" type="url"/>',
        B: '<input name ="email" type="text" required="required"/>',
        C: '<<input name ="email" type="text"/>',
        D: '<input name ="email" type="email"/>',
      },
      TypeOption: "radio",
      Results: [false, true, false, false],
      ID: "Q4VA",
    },
  ],
};

Vue.component("div-result-test", {
  props: ["_list_result"],
  methods: {
    getCorrectItems: function () {

      var result = this.$props._list_result.filter(function (item) {
        return item === true;
      }).length;

      return result;
    },
    getTotal: function () {
      return this.$props._list_result.length;
    },
    getClassAlert:function(){

      if(this.getCorrectItems() < (this.getTotal()*0.7))
        return "alert alert-danger"
      return "alert alert-success"
    }    
  },
  template: `
  <div>
    <div :class="[getClassAlert()]" role="alert">
      <h4 class="alert-heading">Well done!</h4>
      <p>You pass the exam with {{getCorrectItems()}}/{{getTotal()}} </p>
      <hr>
      <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
  </div>
  `,
});

Vue.component("button-end-test", {
  template: `
  <div>
    <input type="button" value="Finalizar" v-on:click="evaluar">
  </div>
  `,
  methods: {
    evaluar: function () {
      var listExam = global_vm.listExam;
      var listResult = [];
      for (let i = 0; i < listExam.length; i++) {
        var id = listExam[i].ID;
        var classOption = document.getElementsByClassName(id);
        var cortarCicloFor = false;
        for (let j = 0; j < classOption.length; j++) {
          const element = classOption[j].getElementsByTagName("INPUT");

          switch (element[0].type) {
            case "radio": //quiere decir que es unica respuesta valida
              if (!(element[0].checked === listExam[i].Results[j]))
                cortarCicloFor = true;
              break;

            case "checkbox": //quiere decir que es unica respuesta valida
              if (!(element[0].checked === listExam[i].Results[j]))
                cortarCicloFor = true;
              break;

            default:
              break;
          }
          if (cortarCicloFor) break;
        }

        listResult[i] = !cortarCicloFor;
      }

      global_vm.listResult = listResult;
      global_vm.isTestCompleted = true;
    },
  },
});

Vue.component("custom-input", {
  props: ["_option_key", "_option_value", "_type", "_index_exam"],
  template: `
    <div class="row">
     <input class="w-1" :type="_type" :name="_index_exam">
     <label class="col">{{_option_key}}. <pre class="text-primary">{{_option_value}}</pre></label>
    </div>
  `,
});

Vue.component("custom-p", {
  props: ["_item"],
  methods: {
    isHTML: function (text) {
      return /(\<\w*)((\s\/\>)|(.*\<\/\w*\>))/.test(text);
    },
  },
  template: `
    <div>
     <p v-if="isHTML(_item)"><pre class="text-primary">{{_item}}</pre><p/>
     <p v-if="!isHTML(_item)" class="text-justify">{{_item}}<p/>
    </div>
  `,
});

var global_vm = new Vue({
  el: "main",
  data: {
    listExam: service.exams,
    listResult: [],
    isTestCompleted: false,
  },
});
