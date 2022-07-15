<template>
  <div class="column items-center">
    <div>
      <h5 style="color: white">สแกนคิวอาร์โค้ดลูกค้ารับสินค้า</h5>
    </div>
    <q-card class="bg-#0D47A1 items-center" style="width: 350px">
      <div class="column items-center">
        <h6 class="text-grey-6 q-ma-sm">สแกนคิวอาร์โค้ด</h6>
        <q-btn
          class="bg-blue-10 text-white"
          @click="this.$router.push('/scan_bar2')"
          >เปลี่ยนโหมด</q-btn
        >
        <div class="q-pt-md">
          <q-card
            style="width: 200px; height: 200px"
            class="bg-grey"
            @click="this.$router.push('/about')"
          ></q-card>
        </div>
        <div class="q-ma-sm">
          <h6 class="text-grey-6 q-ma-sm">กำลังสแกน....</h6>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    return {
      confirm: ref(false),

      address: ref(""),
    };
  },
};
</script>

<style>
html,
body {
  background: #0d47a1;
  height: 100%;
}
</style>
