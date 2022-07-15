<template>
  <div class="column items-center">
    <div>
      <h5 style="color: white">เข้าสู่ระบบ</h5>
    </div>
    <q-card class="bg-#0D47A1 items-center" style="width: 300px">
      <div class="column items-center">
        <q-form class="q-px-sm q-pt-xl">
          <q-input
            ref="username"
            square
            clearable
            v-model="username"
            type="username"
            lazy-rules
            :rules="[this.required, this.short]"
            label="Username"
          >
            <template v-slot:prepend>
              <q-icon name="account_circle" />
            </template>
          </q-input>
          <q-input
            ref="password"
            square
            clearable
            v-model="password"
            type="password"
            lazy-rules
            :rules="[this.required, this.short]"
            label="Password"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
        </q-form>
        <q-card-actions class="q-px-lg">
          <q-btn
            unelevated
            size="lg"
            color="blue-10"
            @click="this.$router.push('/scan_bar')"
            class="full-width text-white"
            label="เข้าสู่ระบบ"
          />
        </q-card-actions>
        <q-card-actions class="text-center q-pa-sm">
          <p class="text-blue-10">ลืมรหัสผ่าน ?</p>
        </q-card-actions>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      username: null,
      password: null,
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
