<template>
  <section class="navigation">
    <div class="pictures">
      <img src="/images/nav/pic.svg" alt="paint" />
      <img src="images/logo/logo.png" alt="logo" />
    </div>
    <ul>
      <li v-for="nav in navigation" :key="nav.text">
        <img :src="nav.url" :alt="nav.text" />
        <span v-if="nav.span">Скало<b>Клуб</b></span>
        {{ nav.text }}
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        navigation: [
          {
            url: '/images/nav/nav1.webp',
            text: 'что это?',
            span: true,
          },
          {
            url: '/images/nav/nav2.webp',
            text: 'Расписание смен',
          },
          {
            url: '/images/nav/nav3.webp',
            text: 'Где проходят смены',
          },
          {
            url: '/images/nav/nav4.webp',
            text: 'Стоимость посещения',
          },
          {
            url: '/images/nav/nav5.webp',
            text: 'Отзывы родителей',
          },
          {
            url: '/images/nav/nav6.webp',
            text: 'Частые вопросы',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/variables';
  .navigation {
    padding-bottom: 50px;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 68px), 0 100%);

    .pictures {
      margin: 0 auto;
      display: flex;
      width: 85%;
      justify-content: space-between;
      align-items: end;
      img {
        &:first-of-type {
          width: 60%;
        }
        &:last-of-type {
          width: 25vw;
        }
      }
    }
    ul {
      margin: 90px auto 50px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      width: 85%;
      height: 44vw;
      list-style: none;
      li {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        color: $white-color;
        font-size: 4vw;
        text-shadow: rgba(0, 0, 0, 0.4) 0px 4px 5px;
        position: relative;
        background-color: rgba(0, 0, 0, 0.5);
        overflow: hidden;
        transition: all 0.3s ease-in;
        cursor: pointer;

        img {
          position: absolute;
          z-index: -1;
          width: 100%;
        }

        span {
          font-size: 4vw;
          font-weight: 500;
          transition: all 0.3s ease-in;
          b {
            font-size: 4vw;
            font-weight: 500;
            color: $orange-color;
            transition: all 0.3s ease-in;
          }
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.7);
          font-size: 3.8vw;
          span {
            font-size: 3.8vw;
            b {
              font-size: 3.8vw;
            }
          }
        }
      }
    }
  }

  @media (min-width: 2000px) {
    .navigation {
      ul {
        margin-top: 50px;
        width: 1700px;
        height: 880px;
        li {
          font-size: 80px;
          span {
            font-size: 80px;

            b {
              font-size: 80px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .navigation {
      clip-path: none;
    }
  }

  @media (max-width: 900px) {
    .navigation {
      padding-bottom: 0;
      clip-path: none;
      .pictures {
        display: none;
      }
      ul {
        margin-top: 20px;
        width: 95vw;
        height: 95vw;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 5px;
        li {
          font-size: 24px;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          span {
            font-size: 24px;
            b {
              font-size: 24px;
            }
          }
          &:hover {
            font-size: 24px;
            span {
              font-size: 24px;
              b {
                font-size: 24px;
              }
            }
          }
        }
      }
    }
  }
</style>
