<template>
  <div class="column items-center">
    <div class="row items-end">
      <div class="col-4" style="color: white">
        <q-icon
          left
          @click="confirm = true"
          style="font-size: 3em"
          name="arrow_back"
        />
      </div>
      <div class="text1 col-8">รายละเอียด</div>
      <div class="col" style="color: white">
        <q-icon
          right
          @click="this.$router.push('/scan_box')"
          style="font-size: 3em"
          name="qr_code_scanner"
        />
      </div>
    </div>
    <q-card class="bg-#0D47A1 items-center" style="width: 380px">
      <div class="column items-center">
        <div class="q-ma-sm text">Partner_ID: 123456</div>
        <div class="q-ma-sm text">ชื่อลูกค้า: ห้างทอง เพชรบูรพา ชลบุรี</div>
        <div class="q-ma-sm text">รูท: รับหน้าร้าน</div>
        <div class="q-pt-md">
          <q-card class="bg-blue-10" style="width: 350px">
            <div class="q-pb-sm q-pt-sm row items-end">
              <div class="q-pl-sm col-6 row justify-start text-white">
                จำนวนสินค้าทั้งหมด:
              </div>
              <div class="col-3 row justify-center bg-white">
                <q-input outlined dense></q-input>
              </div>
              <div class="col-3">
                <div class="row justify-center text-white">กล่อง</div>
              </div>
            </div>
            <div class="q-pb-sm q-pt-sm row items-end">
              <div class="q-pl-sm col-6 row justify-start text-white">
                ทองใหม่:
              </div>
              <div class="col-3 row justify-center bg-white">
                <q-input outlined dense></q-input>
              </div>
              <div class="col-3">
                <div class="row justify-center text-white">กล่อง</div>
              </div>
            </div>
            <div class="q-pb-sm q-pt-sm row items-end">
              <div class="q-pl-sm col-6 row justify-start text-white">
                งานซ่อม:
              </div>
              <div class="col-3 row justify-center bg-white">
                <q-input outlined dense></q-input>
              </div>
              <div class="col-3">
                <div class="row justify-center text-white">กล่อง</div>
              </div>
            </div>
            <div class="q-pb-sm q-pt-sm row items-end">
              <div class="q-pl-sm col-6 row justify-start text-white">
                คงเหลือ:
              </div>
              <div class="col-3 row justify-center bg-white">
                <q-input outlined dense></q-input>
              </div>
              <div class="col-3">
                <div class="row justify-center text-white">กล่อง</div>
              </div>
            </div>
          </q-card>
        </div>

        <div class="q-pt-md">
          <ProductCard class="q-pb-md" v-for="n in 2" :key="n" />
        </div>
      </div>
      <q-card-actions class="q-px-lg">
        <q-btn
          unelevated
          size="lg"
          color="blue-10"
          @click="this.$router.push('/scan_bar')"
          class="full-width text-white"
          label="กลับสู่หนา้หลัก"
        />
      </q-card-actions>
    </q-card>
    <q-dialog v-model="confirm" persistent>
      <div class="row items-end">
        <q-card style="width: 350px; max-width: 80vw">
          <q-card-section class="row items-center">
            <div class="col-12 row justify-center">
              <span class="q-ml-sm text-blue-10"
                >คุณต้องการกลับสู่หน้าหลักหรือไม่ <br />
                คุณยังมีรายการคงค้างอยู่</span
              >
            </div>
          </q-card-section>

          <div class="col-12 row justify-center">
            <q-img
              src="https://img.freepik.com/free-vector/delivery-box-icon-shipping-cardboard-package-isometric-icon-isolated-white-background_53562-14563.jpg?w=2000"
              style="width: 100px; height: 100px"
            />
          </div>

          <q-card-actions align="center">
            <q-btn
              color="green"
              style="width: 100px; height: 50px"
              @click="this.$router.push('/scan_box')"
              v-close-popup
              ><div class="button">ใช่</div></q-btn
            >
            <q-btn color="red" style="width: 100px; height: 50px" v-close-popup
              ><div class="button">ไม่ใช่</div></q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "AboutView",
  components: { ProductCard },
  setup() {
    return {
      confirm: ref(false),

      address: ref(""),
    };
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  background: #0d47a1;
  height: 100%;
}
.text1 {
  font-size: 24px;
  color: white;
}
.button {
  font-size: 25px;
  color: white;
}
.text {
  font-size: 22px;
}
</style>
