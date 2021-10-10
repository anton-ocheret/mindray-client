<template>
  <div class="quiz flex-center">
    <div class="quiz-step">
      <div class="wrapper flex-center">
        <div class="wrapper-content text-center">
          <h1 class="heading text-center">
            <span class="app-heading-text--lg">
              Ваша заявка №{{ getApplicationNumber() }} передана в отдел, ожидайте звонка от специалиста
            </span>
            <span class="app-heading-sub app-sub-heading-text--lg">
              Я могу быть еще чем-то полезен?
            </span>
          </h1>
          <div class="buttons-content">
            <base-button
              class="button app-text app-text--lg"
              @click="handleYes"
            >
              Да
            </base-button>

            <base-button
              class="button app-text app-text--lg"
              @click="handleNo"
            >
              Нет
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getApplicationNumber } from '@shared/store/utils';
  import { ROUTE_NAMES } from '@shared/constants';
  import { global } from '@shared/mixins/store';
  import BaseButton from '@shared/components/base/button';
  
  export default {
    name: 'quiz-step-last',
    components: {
      BaseButton,
    },
    mixins: [global],
    methods: {
      getApplicationNumber,
      handleYes() {
        this.$router.replace({ name: ROUTE_NAMES.QUIZ });
      },
      handleNo() {
        this.$router.replace({ name: ROUTE_NAMES.QUIZ_AUTOREPLY });
      },
    },
    mounted() {
      this.quizSendResults({ applicationNumber: getApplicationNumber(), quizId: this.quizId });
    },
    beforeRouteEnter(_, from, next) {
      next(!from.name ? { name: ROUTE_NAMES.QUIZ } : undefined);
    },
  };
</script>

<style lang="scss" scoped>
  .quiz {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    padding: 130px $padding-mobile-x;

    @media(min-width: $sm) {
      padding: 140px $padding-desktop-x;
    }
  }

  .quiz-step {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    flex-grow: 1;
    position: relative;
    max-width: 1340px;
    z-index: 2;


    @media(min-width: $md) {
      max-width: 990px;
    }

    @media(min-width: $lg) {
      width: calc(100% - 350px);
    }
  }

  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .wrapper-content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .flex-center {
    justify-content: center;
  }

  .heading {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    @media(min-width: $md) {
      margin-bottom: 20px;
    }
  }
  .app-heading-sub {
    margin-top: 20px;
    @media(min-width: $md) {
      margin-top: 25px;
    }
  }
  .app-heading-sup {
    color: $cornflower-blue;
    margin-bottom: 5px;
    @media(min-width: $md) {
      margin-top: 10;
    }
  }
  .buttons-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .button {
    margin: 7px;
    min-width: 100%;

    @media(min-width: $sm) {
      margin: 10px;
      min-width: 0;
    }
  }
</style>
