<template>
    <article class="col-6 col-s-9" id="content">
  
      <div id="root">
        <h1 v-html="$t('tasklist.tasklist')"></h1>
        <div class="form">
          <input type="text" :placeholder="$t('tasklist.placeholder')" v-model="MakerListElement.taskContent">
          <button @click="addTaskToList"><i class="fas fa-plus"></i></button> 
        </div>
        <div v-if="errorContent" class="error" v-html="$t('tasklist.error')"></div>
        <ul>
          <li :id='element.id' v-for="element in taskList">
            <input v-if="!element.isEditing" type="checkbox" v-model="element.finish" @click="changeFinishStatus(element.id)">
  
            <span v-if="!element.isEditing">
              <p v-if="element.finish">
                <s>{{ element.taskContent }}</s>
              </p>
              <p v-else>{{ element.taskContent }}</p>
            </span>
  
            <input v-else name="InputTask" type="text" v-model="element.taskContent" @blur="stopTaskEditing(element)"
              @keyup.enter="stopTaskEditing(element)">
            <div class="buttons">
              <button v-if="!element.isEditing" @click="startTaskEditing(element)">&#9998;</button>
              <button v-else @click="stopTaskEditing(element)">&#10004;</button>
              <button v-if="!element.isEditing" @click="deleteTask(element.id)">&#10006;</button>
              <button v-else @click="stopTaskEditing(element)">&#10006;</button>
            </div>
          </li>
        </ul>
      </div>
    </article>
  </template>
  



  <script>
  import axios from 'axios';
  import Tr from "@/i18n/translation";

  
  export default {
    name: 'LaskList',
    data() {
      return {
        currentInputTaskContent: '',
        errorContent: '',
        taskList: [],
        TransferListElement: {
          taskContent: '',
          finish: '',
        },
        MakerListElement: {
          taskContent: ''
        }
      }
    },
    methods: {
  
      addTask: function (MakerListElement) {
        axios.post("https://loremipsum-api.onrender.com/taskList", MakerListElement)
          .then(response => {
            if (response.status === 200) {
              this.getTaskList();
            }
          })
      },
  
      updateTask: function (ListElement) {
        axios.put(`https://loremipsum-api.onrender.com/taskList/${ListElement.id}`, ListElement)
          .then(response => {
            if (response.status === 200) {
              this.getTaskList();
            }
          })
      },
  
      deleteTask: function (taskID) {
        axios.delete(`https://loremipsum-api.onrender.com/taskList/${taskID}`)
          .then(response => {
            if (response.status === 200) {
              this.getTaskList();
            }
          })
      },
  
      getTaskList: function () {
        axios.get("https://loremipsum-api.onrender.com/taskList")
          .then(response => {
            if (response.status === 200) {
              let restAPIDate = response.data;
              this.taskList = restAPIDate.map((toDoElement) => {
                return {
                  ...toDoElement, 
                  isEditing: false
                }
              })
            }
          })
      },
  
      addTaskToList: function () {
        this.MakerListElement.taskContent = this.MakerListElement.taskContent.trim()
        if (this.MakerListElement.taskContent !== '') {
          this.errorContent = ""
          this.addTask(this.MakerListElement)
          this.MakerListElement.taskContent = ''
        } else {
          this.errorContent = "tasklist.error"
        }
      },
  
      changeFinishStatus: function (taskID) {
        this.taskList = this.taskList.map((taskElement) => {
          if (taskElement.id !== taskID) {
            return { ...taskElement }
          }
          return {
              ...taskElement,
              finish: !taskElement.finish
            }
        })
        const ChangedTask = this.taskList.filter(taskElement => (taskElement.id === taskID))
        this.updateTask(Object.assign(this.TransferListElement, ChangedTask[0]))
      },
  
      stopTaskEditing: function (element) {
        element.isEditing = false
  
        if (element.taskContent === '' || element.taskContent === this.currentInputTaskContent) {
          element.taskContent = this.currentInputTaskContent
        } else {
          const ChangedElement = this.taskList.filter(toDoElement => (toDoElement.id === element.id))
          this.updateTask(Object.assign(this.TransferListElement, ChangedElement[0]))
        }
      },
  
      startTaskEditing: function (element) {
        this.currentInputTaskContent = element.taskContent
        element.isEditing = true;
  
        this.$nextTick(() => {
          const inputElement = document.querySelector('input[name="InputTask"]');
          if (inputElement) {
            inputElement.focus();
          }
        });
      },
    },
    mounted() {
      this.getTaskList()
    },
    setup() {
    return { Tr }
  }
};
  
  </script>
  
  <style scoped>
#root {
  padding-bottom: 30px;
}

.form {
  margin-top: 20px;
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;
}

.form input {
  width: 80%;
  height: 50px;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.error {
  width: 100%;
  text-align: center;
  color: red;
  text-transform: uppercase;
  margin-bottom: 20px;
}

[type="text"],
button {
  display: inline-block;
  padding: .5rem 1rem;
  font-size: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

button {
  cursor: pointer;
  background-color: #2f3b4c;
  color: white;
  margin: 0 .5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.2s;
}

button:hover {
  opacity: 0.9;
}

[type="text"] {
  width: 100%;
}

[type="text"]:active,
[type="text"]:focus {
  outline: 0;
  border: 2px solid #1c242e;
}

[type="checkbox"] {
  margin-right: 1rem;
  width: 20px;
  height: 20px;
}

h1 {
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  width: 90%;
  left: 50%;
  position: relative;
  transform: translate(-50%);
  color: #000000;
}

ul {
  padding: 0;
}

.todo-list p {
  font-weight: 900;
  text-align: center;
}

li:last-child {
  margin-bottom: 0;
}

li {
  display: flex;
  align-items: center;
  padding: 2px;
  padding-left: 10px;
  padding-right: 15px;
  margin-bottom: 1rem;
  width: 80%;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  justify-content: center;
}

span p {
  margin: 0;
  padding: 10px;
}

li span {
  display: inline-block;
  flex: auto;
  min-width: 50px;
  word-wrap: break-word;
  border-radius: 4px;
  border: 2px solid transparent;
  justify-self: left;
}

li span:focus {
  outline: 0;
  border: 2px solid #1c242e;
}

li button {
  width: 100%;
}

@media only screen and (max-width:420px) {
.buttons {
  display: flex;
  flex-direction: column;

}
li button:last-child{
    margin-top: 5px;
}

li {
    padding-top: 5px;
    padding-bottom: 5px;
}
li span{
    width: 100%;
}

}
</style>



<style scoped>
#root {
  padding-bottom: 30px;
}

.form {
  margin-top: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;
}

.form input {
  flex: 1;
  height: 40px;
  padding: 0 10px;
  border: 2px solid #2f3b4c;
  border-radius: 4px;
  font-size: 16px;
}

.form button {
  background-color: #2f3b4c;
  color: white;
  border: none;
  padding: 11px;
  margin-left: 10px;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
}

.error {
  width: 100%;
  text-align: center;
  color: red;
  text-transform: uppercase;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #2f3b4c;
  border-radius: 4px;
  background-color: #e1e6ed;
}

li input[type="checkbox"] {
  margin-right: 10px;
}

li span {
  flex-grow: 1;
}

li p {
  margin: 0;
}

li input[type="text"] {
  flex-grow: 1;
  height: 30px;
  padding: 0 5px;
  border: 2px solid #2f3b4c;
  border-radius: 4px;
  font-size: 14px;
}

li button {
  background-color: #2f3b4c;
  color: white;
  border: none;
  padding-left:10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-left: 5px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

li button:first-child{
  margin-left: 20x;
}



.buttons:first-child {
  margin-left: 0;
}

li button:last-child {
  margin-right: 0;
}

h1 {
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  color: #000000;
}

@media only screen and (max-width:420px) {
.buttons {
  display: flex;
  flex-direction: column;

}
li button:last-child{
    margin-top: 5px;
}

li {
    padding-top: 5px;
    padding-bottom: 5px;
}
li span{
    width: 100%;
}

}
</style>

