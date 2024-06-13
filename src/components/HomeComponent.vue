<template>
<div>
  <!-- <h1>Name: {{getData().name}}</h1>
<h1>Email: {{getData().email}}</h1>
<h1>Mobile: {{mobile}}</h1> -->
  <!-- <h1 v-on:mousemove="getConsole()">Name: {{name}}</h1>
<button v-on:click="getData('Button 1 Click')">click Me!</button>
<button v-on:dblclick="getData('Button 2 Click')">click Me!</button>
<h2>{{count}}</h2> -->

  <!-- Two way bainding -->
  <input type="text" placeholder="Enter Email" v-model="email"/>
  <br /><br />
  <input type="password" placeholder="Enter Password" v-model="password" />
  <br /><br />
  <button type="button" v-on:click="getData()">Get Value</button>
  <!-- <h2>{{count}}</h2> -->
</div>
</template>

<script>
export default ({
  name: 'HomeComponent',
  data() {
    return {
      email:null,
      password:null,
      // name: 'Prem Singh ',
      // count: 10,
      // email: "prem.kachhawa@gmail.com",
      // mobile: "9179797720",
      // getName:function(){
      //   return this.name;
      // }
    }
  },
  methods: {
    getData(){
      console.log("Value:", this.email, this.password)
    }
    // getName(name) {
    //   return name
    // },
    // getData() {
    //   this.count=this.count+1
    //   alert(this.count)
    //   // return {
    //   //   name: this.name,
    //   //   email: this.email,
    //   // }
    // },
    // getConsole() {
    //   console.log('console')
    // }
  },
})
</script>

<style scoped >

</style>
