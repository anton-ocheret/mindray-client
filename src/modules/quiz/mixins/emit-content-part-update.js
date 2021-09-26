export default {
  methods: {
    emitContentPartUpdate(payload) {
      this.$root.$emit('content-part:updated', payload);
    },
  },
};
