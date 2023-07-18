<template>
  <header class="header">
    <div class="headerContainer" v-if="mobileVersion">
      <div class="headerInfo">
        <h1>СКАЛО<span>КЛУБ</span></h1>
        <h2>ЛУЧШЕ, ЧЕМ ПРОСТО ГОРОДСКОЙ ЛАГЕРЬ</h2>
        <div class="icons">
          <img src="../../../public/images/icons/telegram.png" alt="telegram" />
          <img src="../../../public//images/icons/whatsapp.png" alt="whatsapp" />
          <img src="../../../public//images/icons/youtube.png" alt="youtube" />
          <img src="../../../public//images/icons/instagram.png" alt="instagram" />
          <img src="../../../public//images/icons/vk.png" alt="vk" />
        </div>
        <div class="phone">
          <span>+7 (499) 704-36-35</span>
        </div>
        <button class="glow-on-hover">Оставить заявку</button>
        <a href="#" class="arrow-container">
          <div class="arrow"></div>
          <div class="arrow"></div>
          <div class="arrow"></div>
        </a>
      </div>
      <div class="kidsImgBox">
        <img class="kids" src="../../../public/images/kids_main.png" alt="kids" />
        <p>СКАЛОЛАЗАНИЕ НА КАНИКУЛАХ В МОСКВЕ</p>
      </div>
    </div>
    <div class="headerContainer_mobile" v-if="!mobileVersion">
      <div class="headerInfo">
        <div class="icons">
          <img src="../../../public/images/icons/telegram.png" alt="telegram" />
          <img src="../../../public/images/icons/whatsapp.png" alt="whatsapp" />
          <img src="../../../public/images/icons/youtube.png" alt="youtube" />
          <img src="../../../public/images/icons/instagram.png" alt="instagram" />
          <img src="../../../public/images/icons/vk.png" alt="vk" />
        </div>
        <img src="../../../public/images/logo/logo.png" alt="logo" class="logo" />
        <div class="kidsImgBox">
          <img class="kids" src="../../../public/images/kids_main.png" alt="kids" />
          <p>СКАЛОЛАЗАНИЕ НА КАНИКУЛАХ В МОСКВЕ</p>
        </div>
        <div>
          <h1>СКАЛО<span>КЛУБ</span></h1>
          <h2>ЛУЧШЕ, ЧЕМ ПРОСТО ГОРОДСКОЙ ЛАГЕРЬ</h2>
        </div>
        <div class="mainBtnMobile">
          <button class="mainBtn" @click.prevent>
            <span>Оставить <br />заявку</span>
            <v-icon left size="x-large" style="margin-left: 10px"
              >mdi-checkbox-marked-outline</v-icon
            >
          </button>
          <button class="mainBtn">
            <span>Заказать <br />звонок</span>
            <v-icon left size="x-large" style="margin-left: 10px">mdi-phone</v-icon>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        mobileVersion: false,
      };
    },
    mounted() {
      this.checkWindowSize();
      window.addEventListener('resize', this.checkWindowSize);
    },
    methods: {
      checkWindowSize() {
        this.mobileVersion = window.innerWidth >= 900;
      },
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkWindowSize);
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/variables';

  .header {
    width: 100vw;
    max-width: 2000px;
    background: linear-gradient(180deg, #3896a0 40.73672294616699%, #264346 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 68px), 0% 100%);
    padding-bottom: 10%;
    margin: 0 auto;
    background-attachment: fixed;
    position: relative;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 7px; /* Высота тени */
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
    }

    &::before {
      bottom: 34px;
      transform: rotate(-2.7deg);
    }
    .headerContainer {
      margin-top: 50px;
      display: grid;
      grid-template-columns: 4fr 6fr;
      justify-content: space-between;
      width: 85%;

      .headerInfo {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        .icons {
          margin-top: 30px;
          display: flex;
          gap: 10px;
          align-items: center;
          img {
            width: 3vw;
            transition: transform 0.2s ease-in-out;
            cursor: pointer;
            &:hover {
              transform: translateY(-5px) rotate(20deg);
            }
          }
        }

        .phone {
          margin-top: 30px;
          width: 250px;
          height: 45px;
          border: 1px solid $white-color;
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: $white-color;

          span {
            font-size: 24px;
            font-weight: 200;
          }
        }

        h1 {
          font-weight: 500;
          font-size: 5vw;
          text-shadow: rgba(0, 0, 0, 0.4) 0px 4px 5px;
          color: $white-color;

          span {
            font-weight: 500;
            font-size: 5vw;
            color: $orange-color;
          }
        }
        h2 {
          margin-top: 10px;
          font-family: 'Amatic SC', cursive;
          font-size: 2.5vw;
          color: $white-color;
        }
        button {
          margin-top: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 215px;
          height: 46px;
          font-size: 36px;
          color: $white-color;
          font-family: 'Amatic SC', cursive;
          border-radius: 20px;
          background-color: #2b7b74;
          border: none;
          box-shadow: var(--shd, 0 1px 4px rgba(0, 0, 0, 0.6));
        }
        .glow-on-hover {
          cursor: pointer;
          position: relative;
        }
        .glow-on-hover:hover {
          color: #a5d9d4;
          background-color: #1a4f4b;
        }

        .glow-on-hover:before {
          content: '';
          background: linear-gradient(
            45deg,
            #f3e16e,
            #fffb00,
            #48ff00,
            #00ffd5,
            #054e19,
            #4da154,
            #51e41c,
            #9cdf1f
          );
          position: absolute;
          top: 0;
          left: 0;
          background-size: 400%;
          z-index: -1;
          filter: blur(10px);
          width: calc(99%);
          height: calc(100% + 1px);
          animation: glowing 20s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          border-radius: 20px;
        }

        .glow-on-hover:active {
          color: $orange-color;
        }

        .glow-on-hover:active:after {
          background: transparent;
        }

        .glow-on-hover:hover:before {
          opacity: 1;
        }

        .glow-on-hover:after {
          z-index: -1;
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background: #2b7b74;
          left: 0;
          top: 0;
        }
      }
      .arrow-container {
        margin-top: 50px;
        width: 100px;
        height: 100px;
        position: absolute;
        top: 30vw;
        left: 50%;
        transform: translate(-50%, -50%) rotateZ(0deg);
        &:hover {
          cursor: pointer;
          .arrow {
            top: 50%;
            &:before {
              transform: translate(-50%, -50%) rotateZ(-30deg);
            }
            &:after {
              transform: translate(-50%, -50%) rotateZ(30deg);
            }
          }
        }
      }
      .arrow {
        position: absolute;
        left: 50%;
        transition: all 0.4s ease;
        &:before,
        &:after {
          transition: all 0.4s ease;
          content: '';
          display: block;
          position: absolute;
          transform-origin: bottom right;
          background: $white-color;
          width: 2px;
          height: 50px;
          border-radius: 10px;
          transform: translate(-50%, -50%) rotateZ(-45deg);
        }
        &:after {
          transform-origin: bottom left;
          transform: translate(-50%, -50%) rotateZ(45deg);
        }
        @for $i from 1 through 3 {
          &:nth-child(#{$i}) {
            opacity: 0.3 * $i;
            top: 15 + (100% * $i/5);
          }
        }
      }
      .kidsImgBox {
        position: relative;
        transform: rotate(-2deg);

        .kids {
          width: 100%;
        }
        p {
          position: absolute;
          bottom: 10%;
          left: 6%;
          transform: rotate(-2deg);
          font-family: 'Amatic SC', cursive;
          font-size: 4.2vw;
          color: $white-color;
          text-shadow: rgba(255, 255, 255, 0.6) 1px 1px 1px, rgba(0, 0, 0, 0.6) -1px -1px 1px;
        }
      }
    }
    .headerContainer_mobile {
      background: rgb(56, 150, 160, 0.8);
      height: 73vh;
      margin-top: 13vh;
      border-radius: 15px;
      .logo {
        width: 10vh;
        margin-top: 3vh;
      }
      .headerInfo {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;

        .icons {
          background: rgb(56, 150, 160, 0.8);
          width: 98vw;
          display: flex;
          gap: 5vw;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 1vw;
          height: 12vh;
          border-radius: 15px;
          z-index: 100;
          img {
            width: 8vh;
          }
        }
        h1 {
          margin-top: 0;
          font-weight: 500;
          font-size: 8vh;
          text-shadow: rgba(0, 0, 0, 0.4) 0px 4px 5px;
          color: $white-color;

          span {
            font-weight: 500;
            font-size: 8vh;
            color: $orange-color;
          }
        }
        h2 {
          margin-top: 0;
          font-family: 'Amatic SC', cursive;
          font-size: 4.7vh;
          color: $white-color;
        }

        .phone {
          margin-top: 30px;
          width: 250px;
          height: 45px;
          border: 1px solid $white-color;
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: $white-color;

          span {
            font-size: 24px;
            font-weight: 200;
          }
        }
        .kidsImgBox {
          position: relative;
          transform: rotate(-2deg);
          width: 90vw;
          max-width: 54vh;
          margin-top: -2vh;

          .kids {
            width: 100%;
          }
          p {
            position: absolute;
            bottom: 11%;
            left: 6%;
            transform: rotate(-2deg);
            font-family: 'Amatic SC', cursive;
            font-size: 4.4vh;
            color: $white-color;
            text-shadow: rgba(255, 255, 255, 0.6) 1px 1px 1px, rgba(0, 0, 0, 0.6) -1px -1px 1px;
          }
        }
      }
    }
    .mainBtnMobile {
      position: fixed;
      bottom: 0;
      width: 100vw;
      height: 12vh;
      max-height: 80px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      box-shadow: rgba(0, 0, 0, 0.4) 6px 0px 10px;
      z-index: 10;
      .mainBtn {
        background-color: #2b7b74;
        border: none;
        color: $white-color;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(19, 106, 165);
        text-shadow: rgba(255, 255, 255, 0.6) 1px 1px 1px, rgba(0, 0, 0, 0.6) -1px -1px 1px;
        span {
          font-size: 22px;
        }
        &:first-of-type {
          background-color: rgb(243 172 65);
        }
      }
    }
  }
  @media (min-width: 2000px) {
    .header {
      .headerContainer {
        .headerInfo {
          h1 {
            font-size: 100px;
            span {
              font-size: 100px;
            }
          }
          h2 {
            font-size: 50px;
          }
          .arrow-container {
            top: 600px;
          }
          .icons {
            img {
              width: 60px;
            }
          }
        }
        .kidsImgBox {
          p {
            font-size: 84px;
          }
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .arrow-container {
      display: none;
    }
  }

  @media (max-width: 900px) {
    .header {
      width: 98vw;
      background: none;
      display: block;
      position: relative;
      clip-path: none;
      padding-bottom: 10%;
      margin: 1vw auto 0;
      background-attachment: none;
      border-radius: 3vw;
      .headerContainer {
        display: none;
      }
    }
  }

  @media (max-width: 500px) {
    .header {
      .headerContainer_mobile {
        .headerInfo {
          justify-content: space-around;
          height: 95%;
          h1 {
            font-size: 14vw;
            span {
              font-size: 14vw;
            }
          }
          h2 {
            font-size: 8vw;
          }
          .kidsImgBox {
            p {
              font-size: 7.4vw;
            }
          }
          .icons {
            img {
              width: 12vw;
            }
          }
        }
      }
    }
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
</style>
