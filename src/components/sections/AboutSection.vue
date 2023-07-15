<template>
  <section class="about">
    <div class="info">
      <div class="info-left">
        <div>
          <p>
            <span>Скало<b>Клуб</b></span> - это городские продлёнки для детей <b>от 6 до 14 лет</b>.
            В летние смены мы организуем два отряда 6-8 лет и 9-14 лет. Режим работы клуба
            <b>с 8:30 до 19:00</b> по будним дням в школьные каникулы.
            <span>Скало<b>Клуб</b></span> подходит детям с разным уровнем физической подготовки.
            Быть скалолазом необязательно - мы всё рассказываем и показываем на смене.
          </p>
        </div>
        <div class="btns">
          <button class="glow-on-hover">Список документов</button>
          <button class="glow-on-hover">Оставить заявку</button>
        </div>
      </div>
      <div class="info-right">
        <h2>Что такое <span>Скало<b>Клуб</b>?</span></h2>
        <p>
          Это счастливые дети на каникулах, которые занимаются скалолазанием в кругу своих
          сверстников, в компании классных вожатых. В СкалоКлубе мы учимся мечтать и воплощать свои
          мечты в жизнь, узнаем как устроен окружающий мир, учимся общаться и дружить, даем волю
          своим творческим способностям, пускаемся в приключения по интересным местам города. Наши
          родители спокойны и уверены, что мы проводим время круто и полезно.
        </p>
        <img src="images/logo/logo.png" alt="logo" />
      </div>
    </div>
    <div class="advantages">
      <div>
        <img src="../../../public/images/icons/sport1.svg" alt="icon" />
        <h3>СПОРТ</h3>
        <p>
          Ежедневные занятия скалолазанием. А также на сменах батуты, веревочный парк, стрельба из
          лука, курс по узлам и установке палаток.
        </p>
      </div>
      <div>
        <img src="../../../public/images/icons/sport2.svg" alt="icon" />
        <h3>ТВОРЧЕСТВО</h3>
        <p>
          Творческая сторона каждой смены - дети рисуют, лепят, клеят, поют, танцуют,
          экспериментируют и ставят спектакли!
        </p>
      </div>
      <div>
        <img src="../../../public/images/icons/sport3.svg" alt="icon" />
        <h3>ЗАБОТА</h3>
        <p>
          Двое вожатых на группу 10-15 детей. Трехразовое питание - завтрак, обед и полдник.
          Прогулки и игры на свежем воздухе каждый день.
        </p>
      </div>
      <div>
        <img src="../../../public/images/icons/sport4.svg" alt="icon" />
        <h3>ПОСТОЯНСТВО</h3>
        <p>
          Работаем круглый год во все школьные каникулы (летом, осенью, зимой и весной). Вы будете
          успевать на работу вовремя! Возможно удобное посещение лагеря с 8:00 до 20:00.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/variables';
  .about {
    width: 100%;
    background: no-repeat center/cover url('../../../public/images//background/about.jpg');
    position: relative;
    overflow: hidden;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    clip-path: polygon(0 68px, 100% 0, 100% 100%, 0 100%);
    .info {
      display: flex;
      margin-top: 150px;
      width: 85%;
      .info-left {
        color: rgb(38, 67, 70);
        z-index: 1;
        width: 40%;
        margin-right: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        div:first-of-type {
          background-color: rgba(194, 255, 255, 0.8);
          padding: 30px;
          border-radius: 20px;

          p {
            text-align: center;
            font-size: 18px;
            font-weight: 500;
            line-height: 2rem;
            span {
              font-size: 18px;
              font-weight: 700;
              b {
                font-size: 18px;
                font-weight: 700;
                color: $orange-color;
              }
            }
          }
        }
        .btns {
          display: flex;
          justify-content: space-between;
          button {
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 215px;
            height: 46px;
            font-size: 36px;
            font-weight: 700;
            color: $white-color;
            font-family: 'Amatic SC', cursive;
            border-radius: 20px;
            background-color: #2b7b74;
            border: none;
            box-shadow: var(--shd, 0 1px 4px rgba(0, 0, 0, 0.6));
            &:first-of-type {
              background-color: $orange-color;
              font-size: 34px;
            }
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
      }
    }
    .info-right {
      color: rgb(38, 67, 70);
      background-color: rgba(194, 255, 255, 0.8);
      z-index: 1;
      width: 60%;
      text-align: center;
      padding: 30px;
      border-radius: 20px;

      h2 {
        font-size: 40px;
        font-family: 'Rubic-light', sans-serif;
        text-shadow: rgba(0, 0, 0, 0.4) 0px 4px 5px;
        span {
          font-family: 'Rubic', sans-serif;
          font-size: 40px;
          font-weight: 600;
          b {
            font-family: 'Rubic', sans-serif;
            font-size: 40px;
            font-weight: 600;
            color: $orange-color;
          }
        }
      }
      p {
        font-size: 18px;
        font-weight: 500;
        line-height: 2rem;
        margin-top: 30px;
      }
      img {
        margin-top: 30px;
        width: 100px;
      }
    }
    .advantages {
      margin-top: 300px;
      height: 350px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      width: 100%;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
        img {
          width: 30%;
        }
        h3 {
          margin-top: 20px;
          font-size: 25px;
          font-weight: 500;
          color: $white-color;
        }
        p {
          margin: 10px 40px 50px;
          font-size: 16px;
          color: $white-color;
          font-weight: 500;
          text-align: center;
        }
        &:nth-of-type(1) {
          background-color: rgb(13, 33, 35);
        }
        &:nth-of-type(2) {
          background-color: rgb(44 111 118);
        }
        &:nth-of-type(3) {
          background-color: rgb(84 182 192);
          h3 {
            color: #0d2123;
          }
          p {
            color: #0d2123;
          }
        }
        &:nth-of-type(4) {
          background-color: #c2ffff;
          h3 {
            color: #0d2123;
          }
          p {
            color: #0d2123;
          }
        }
      }
    }
  }

  @media (max-width: 1400px) {
    .about {
      .info {
        flex-direction: column-reverse;
        align-items: center;
        gap: 50px;

        .info-left {
          margin-right: 0;
          width: 500px;
        }
        .info-right {
          width: 700px;
        }
      }
    }
  }

  @media (max-width: 900px) {
    .about {
      clip-path: none;
      margin-top: 0;
      .info {
        margin-top: 50px;
        .info-left {
          width: 90vw;
          align-items: center;
          .btns {
            button {
              &:last-of-type {
                display: none;
              }
            }
          }
        }
        .info-right {
          width: 90vw;
        }
      }
    }
  }
</style>
