import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      cardStyle: {
        top: '0px'
      }
    }
  },
  mounted() {
    // this.$parent?.$on('tableHeightChanged', (height: number) => {
    //   this.cardStyle.top = height + 10 + 'px'
    // })
  }
})