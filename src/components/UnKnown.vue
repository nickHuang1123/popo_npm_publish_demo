<template>
  <div class="unknown-area">
    <el-col
      :span="6"
      class="unknown-style"
      :class="{
        'close': edit
      }"
    >
      <el-avatar :size="form.size" :src="logo" />
      <h3>- {{ form.text }} -</h3>
      <el-button v-show="!edit" round @click="edit = !edit">
        編輯
      </el-button>
    </el-col>
    <el-col v-if="edit" :span="4" style="width: 200px;">
      <el-form>
        <el-form-item label="修改圖片大小：">
          <el-slider
            v-model="form.size"
            :min="100"
            :max="500"
            :marks="[100, 200, 300, 400, 500]"
            :step="10"
          />
        </el-form-item>
        <el-form-item label="修改文字：">
          <el-input
            v-model="form.text"
            placeholder="請輸入文字"
          />
        </el-form-item>
      </el-form>

      <el-button round @click="edit = !edit">
        確定
      </el-button>
    </el-col>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import logo from '../assets/img/logo.jpg';

const form = ref({
  size: 250,
  text: '真不敢相信你竟然裝了這個東西！',
})
const edit  = ref(false);

</script>

<style lang="scss">
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-200px);
  }
  60% {
    transform: translateY(-100px);
  }
}
.unknown-area {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99vw;
  height: 90%;
  z-index: 999;
  .unknown-style {
    animation: bounce 2s infinite;
    text-align: center;
    &.close {
      animation-play-state: paused;
    }
    &:hover {
      animation-play-state: paused;
      scale: 1.1;
    }
    .el-avatar {
      box-shadow: 3px 3px 10px #d4d4d4;
    }
  }
}
</style>