<template>
  <div class="toasts">
    <div class="toast toast_success" v-for="toast in successMessage.list">
      <app-icon icon="check-circle" />
      <span>{{ toast }}</span>
    </div>
    <div class="toast toast_error" v-for="toast in errorMessage.list">
      <app-icon icon="alert-circle" />
      <span>{{ toast }}</span>
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon';

const DELAY = 5000;

export default {
  name: 'AppToast',

  components: { AppIcon },

  data() {
    return {
      successMessage: {
        open: false,
        list: []
      },
      errorMessage: {
        open: false,
        list: []
      }
    }
  },

  methods: {
    error(message) {
      this.errorMessage.open = true
      this.errorMessage.list.push(message)
      setTimeout(() => {
        this.errorMessage.open = false
        this.errorMessage.list.shift()
      }, DELAY)
    },

    success(message) {
      this.successMessage.open = true
      this.successMessage.list.push(message)
      setTimeout(() => {
        this.successMessage.open = false
        this.successMessage.list.shift()
      }, DELAY)
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast > .icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
