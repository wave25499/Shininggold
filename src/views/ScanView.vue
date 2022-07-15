<template>
  <div class="column items-center">
    <div>
      <h5 style="color: white">สแกนคิวอาร์โค้ดตัดเบิกรายการ</h5>
    </div>
    <q-card class="bg-#0D47A1 items-center" style="width: 350px">
      <div class="column items-center">
        <h6 class="text-grey-6 q-ma-sm">ห้างทอง เพชรบูรพา 0/10 กล่อง</h6>
        <q-btn
          class="bg-blue-10 text-white"
          @click="this.$router.push('/scan_bar2')"
          >เปลี่ยนโหมด</q-btn
        >
        <q-dialog v-model="confirm" persistent>
          <div class="row items-end">
            <q-card style="width: 350px; max-width: 80vw">
              <q-card-section class="row items-center">
                <div class="col-12 row justify-center">
                  <span class="q-ml-sm text-blue-10"
                    >คุณต้องการตัดเบิกสินค้าออเดอร์ <br />
                    กล่อง BO000001 หรือไม่</span
                  >
                </div>
              </q-card-section>

              <div class="col-12 row justify-center">
                <q-img
                  src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-cartoon-box-png-download-image_1170524.jpg"
                  style="width: 100px; height: 100px"
                />
              </div>

              <q-card-actions align="center">
                <q-btn
                  color="green"
                  style="width: 100px; height: 50px"
                  v-close-popup
                  ><div class="button">ยืนยัน</div></q-btn
                >
                <q-btn
                  color="red"
                  style="width: 100px; height: 50px"
                  v-close-popup
                  ><div class="button">ยกเลิก</div></q-btn
                >
              </q-card-actions>
            </q-card>
          </div>
        </q-dialog>
        <div class="q-pt-md">
          <q-card
            style="width: 200px; height: 200px"
            class="bg-grey"
            @click="confirm = true"
          ></q-card>
        </div>
        <div class="q-ma-sm"></div>
      </div>
    </q-card>
    <q-card-actions class="q-px-lg">
      <q-btn
        unelevated
        size="lg"
        color="white"
        @click="this.$router.push('/about')"
        class="full-width text-blue-10"
        label="ดูรายการทั้งหมด"
      />
    </q-card-actions>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ScanView",
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
.button {
  font-size: 25;
  color: white;
}
</style>
