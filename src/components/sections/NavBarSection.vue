<template>
  <section class="navigation">
    <img src="images/logo/logo.png" alt="logo" class="logo" />
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
  import { gsap } from 'gsap';

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
    mounted() {
      window.addEventListener('load', () => {
        const logo = this.$el.querySelector('.logo');

        gsap.set(logo, { x: -logo.offsetWidth, y: -260, rotation: 0 });

        // Анимация движения вправо и вращения как колесо
        gsap.to(logo, {
          x: '+=90vw',
          y: '-=50',
          rotation: '-365', // Добавляем 360 градусов вращения (полный оборот)
          repeat: 0,
          yoyo: false,
          duration: 2,
          ease: 'ease-in',
        });

        gsap.to(logo, {
          y: '+=100px', // Используем 30% вместо '+=300'
          repeat: 0,
          delay: 2.2,
          duration: 1,
          ease: 'bounce.out',
        });
      });
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/variables';
  .navigation {
    height: 80vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;

    .logo {
      width: 8vw;
      position: absolute;
    }
    ul {
      margin-left: 10vw;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 1vw;
      width: 60%;
      height: 31vw;
      list-style: none;
      transform: rotate(-3deg);
      li {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        color: $white-color;
        font-size: 2.7vw;
        text-shadow: rgba(0, 0, 0, 0.4) 0px 4px 5px;
        position: relative;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 1vw;
        overflow: hidden;
        transition: all 0.3s ease-in;
        cursor: pointer;

        img {
          position: absolute;
          z-index: -1;
          width: 100%;
        }

        span {
          font-size: 2.7vw;
          font-weight: 500;
          transition: all 0.3s ease-in;
          b {
            font-size: 2.7vw;
            font-weight: 500;
            color: $orange-color;
            transition: all 0.3s ease-in;
          }
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.7);
          font-size: 2.6vw;
          span {
            font-size: 2.6vw;
            b {
              font-size: 2.6vw;
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
