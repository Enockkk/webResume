<template>
  <div id="app">
    <!-- <div class="test">
      <div class="box">1</div>
      <div class="box2">2</div>
      <div class="box">3</div>
    </div>
    <div class="test2">
      <ul>
        <li><span>ceshkkkkkkki</span> <input type="text" /></li>
        <li><span>ceshi</span> <input type="text" /></li>
        <li><span>ceshi</span> <input type="text" /></li>
        <li><span>ceshi</span> <input type="text" /></li>
      </ul>
    </div> -->
    <router-view />
  </div>
</template>
<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/*
.test{
  width: 280px;
  height: 60px;
  margin: 20px;
  padding: 0;
  border: 1px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box{
  width: 50px;
  height: 50px;
  background-color: bisque;
  margin: 10px;
}
.box2{
  width: 50px;
  height: 50px;
  background-color: #000000;
}

.test2{
  width: 500px;
}
.test2 ul{
  width: 100%;
}
.test2 ul li{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
*/
</style>
