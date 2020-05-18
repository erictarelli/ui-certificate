const service = {
  "exams": [
    {
      "NumberQuestion": "Question 1",
      "Model": "Volume A",
      "Introductions": {
        "1": "You have a webpage that includes the following markup:",
        "2": "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<script src=\"jquery.js\"></script>\n\t\t<script></script>\n\t</head>\n\t<body>\n\t\t<div id=\"Div1\"></div>\n\t\t<span id=\"Span1\"></span>\n\t</body>\n</html>",
        "3": "When the page is loaded, the SPAN element must be moved as follows:",
        "4": "<div id=\"Div1\"><span id=\"Span1\"></span></div>",
        "5": "You need to move the SPAN element and preserve any event handlers attached to the SPAN which code segment should you use?"
      },
      "Options": {
        "A": "document.getElementById(\"Div1\").appendChild(document.getElementById(\"Span1\"))",
        "B": "var moveElement = document.getElementById(\"Div1\").moveElement.parentNode.appendChild(moveElement);",
        "C": "document.getElementById(\"Span1\").appendChild(document.getElementById(\"Div1\")",
        "D": "var moveElement = document.getElementById(\"Span1\"); moveElement.parentNode.appendChild(moveElement)"
      },
      "TypeOption": "radio",
      "Results": [
        1
      ]
    },
    {
      "Model": "Volume A",
      "NumberQuestion": "Question 2",
      "Introductions": {
        "1": "You are developing a customer web form that includes the following HTML.",
        "2": "<input id=\"txtValue\" type=\"text\">",
        "3": "A customer must enter a valid age in the text box prior to submitting the form.",
        "4": "You need to add validation to the control",
        "5": "Which code segment should you use?"
      },
      "Options": {
        "A": "function validate() {\n\tvar value=$(\"txtValue\").text();\n\tvar regex = /^[\d\,.]*$/;\n\tif(!regex.test(value) || name == \"\")\n\t\talert(\"please enter valid value\");\n\treturn;\n}",
        "B": "function validate() {\n\tvar value=$(\"txtValue\").text();\n\tvar regex = /^[\d\,.]*$/;\n\tif(!regex.test(value) || name == \"\")\n\t\talert(\"please enter valid value\");\n\treturn;\n}",
        "C": "function validate() {\n\tvar value=$(\"txtValue\").text();\n\tvar regex = /^[\d\,.]*$/;\n\tif(!regex.test(value) || name == \"\")\n\t\talert(\"please enter valid value\");\n\treturn;\n}",
        "D": "function validate() {\n\tvar value=$(\"txtValue\").text();\n\tvar regex = /^[\d\,.]*$/;\n\tif(!regex.test(value) || name == \"\")\n\t\talert(\"please enter valid value\");\n\treturn;\n}",
      },
      "TypeOption": "radio",
      "Results": [
        1
      ]
    }
  ]
}

Vue.component('custom-input', {
  props:[
    '_option_key',
    '_option_value',
    '_type'
  ],
  template: `
    <div>
     <input :type="_type" name="_type">
     <label>{{_option_key}} - <pre class="text-primary">{{_option_value}}</pre></label>
    </div>
  `
})

Vue.component('custom-p', {
  props:['_item'],
  methods: {
    isHTML: function (text) {
      return /</.test(text)
    }
  },
  template: `
    <div>
     <p v-if="isHTML(_item)"><pre class="text-primary">{{_item}}</pre><p/>
     <p v-if="!isHTML(_item)" class="text-justify">{{_item}}<p/>
    </div>
  `
})

new Vue({
  el:"main",
  data:{
    listExam:service.exams
  }
})

