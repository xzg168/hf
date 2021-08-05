<template>
  <div class="home">
    <a-button type="primary" @click="click('#e4393c')">默认</a-button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      color: "",
    };
  },
  methods: {
    click(color) {
      this.color = color;
      this.huan();
    },
    huan() {
      window.less
        .modifyVars({
          "@primary-color": this.color,
          "@link-color": this.color,
        })
        .then(() => {
          console.log("成功");
        })
        .catch((error) => {
          alert("失败");
          console.log(error);
        });
    },
  },
};
</script>
