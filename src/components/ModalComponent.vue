<template>
  <transition name="">
    <div class="fm-wrapper" v-if="isModalVisible">
      <div class="backdrop"></div>
      <div class="fm-content2 modal2">
        <div class="fm-content-wrapper p-8">
          <div class="nowrap w-full bg-white h-full">

            <header class="flex items-top font-semibold text-lg text-blue-500 heading mb-8">
              <slot name="header2"> </slot>
            </header>

            <div class="nowrap flex-1 items-stretch flex-col">
              <div class="flex-1">
                <section class="modal-body2">
                  <slot name="body2"> </slot>
                </section>
              </div>

              <footer class="flex justify-between pt-6">
                <slot name="footer2"> </slot>
              </footer>

            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalComponent",
  props: ["isModalVisible"],
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    },
    
  },
  //     mounted() {
  //         this.isModalVisible = true;

  // }
};
</script>

<style scoped>

.nowrap {
  display: flex;
  flex-flow: column nowrap;
}
.backdrop {
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    position: absolute;
    width: 100%;
    right: 0;
}

.modal2 {
background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    display: flex;
    width: 30%;
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
}

.modal-header2,
.modal-footer2 {
  display: flex;
}

.modal-header2 {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer2 {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.btn-close2 {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green2 {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>