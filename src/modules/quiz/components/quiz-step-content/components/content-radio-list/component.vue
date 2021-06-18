<template>
  <div class="radio-list">Radio list</div>
</template>

<script>
  export default {
    name: 'radio-list',
    props: {
      content: {
        type: Object,
        required: true,
      },
    },
  };
</script>
