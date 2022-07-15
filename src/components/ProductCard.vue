<template>
  <div class="column items-center">
    <div class="row items-end">
      <q-card class="column" style="width: 350px">
        <div style="height: 28px" class="row bg-blue-10">
          <div class="col-6 q-pl-sm column items-start text-white">
            ออเดอร์: DO2206682
          </div>
          <div class="col-6 q-pr-sm column items-end text-white">ทองใหม่</div>
        </div>
        <div class="q-pl-sm text-grey-6">วันที่ 22/06/2022</div>
        <div class="column">
          <div style="height: 25px" v-for="n in 3" :key="n">
            <div class="row">
              <div class="col-6 q-pl-sm column items-start textorder">
                ออเดอร์: DO2206682
              </div>
              <div class="col-6 q-pr-sm column items-end">
                <div class="textorder3" v-if="true">23/06/2022 15:30</div>
                <div class="textorder2" v-if="false">ยังไม่รับสินค้า</div>
              </div>
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
};
</script>

<style lang="scss" scoped>
.textorder {
  font-size: 16px;
  font-weight: bold;
  color: #707070;
}
.textorder2 {
  font-size: 16px;
  font-weight: bold;
  color: red;
}
.textorder3 {
  font-size: 16px;
  font-weight: bold;
  color: green;
}
</style>
