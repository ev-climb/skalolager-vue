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
    <div class="advantages"></div>
    <svg class="section-divider" viewBox="0 0 1920 60" aria-hidden="true">
      <path
        data-theme="softSecondary"
        fill="#c2ffff"
        d="M0,80.75H1920V45.833H1742.083a80.491,80.491,0,0,1,12.863-1.55c5.2-.26,17.24-.3,24.153-.24,26.69.222,54.377,1.094,79.341.96,19.287-.1,37.1-.372,53.573-.788L1920,44V34.078l-6.614.216-9.221.256c-6.252.147-12.7.249-19.265.32-13.132.14-26.739.15-40.206.125-26.935-.052-53.313-.247-74.22.168-14.367-1.4-32.582-.756-48.293-1.92-10.145.509-20.876.936-24.149,2.4-16.09-.266-37.611,2.532-50.019.479V34.684c-10.959-2.291-33.371-1.869-48.292-3.84-15.861-.512-26.214,1.347-39.671,1.92-7.032.178-5.941-.773-13.8-.481-40.751-.071-41.131,5.477-62.087,8.16-4.569-5.691-47.085-5.126-77.622-5.04-2.333-4.154-22.643-5.808-50.015-6.479-4.677-2.069-17.763-2.969-22.423-5.04-4.7-.175-3.474.477-6.9.479-11.485-2.964-40.092-2.449-63.813-3.36-23.312.6-29.4,3.589-55.195,3.841-8.3-3.783-56.5-4.561-84.513-3.361-.316-1.857-5.682-3.862-20.7-4.8-2.193-.137-6.78.122-10.352,0-16.331-.564-22.974-3.145-39.671-1.441-22.812-1.938-73.831-3.919-98.311-.719-4.315-2.2-15.369-3.462-20.7-5.521-23.122-.714-41.26-2.815-65.54-2.64-13.5,1-29.918,1.6-39.671,3.12.27,1.317-1.305,2.38-6.9,2.88-35.562-1.333-83.117-2.545-93.139,2.88-14.338-.314-8.341,2.2-22.423,1.92-5.17-.16-2.615-1.4-6.9-1.68-36.327-1.894-80.653-1.762-100.041,2.161-12.433-1.631-21.648-3.708-36.221-5.04-13.359.1-36.33-.325-48.293-1.2-32.483.6-42.463,4.331-53.471,7.92-25.227-.147-43.752,2.274-58.641,4.321-11.966-1.189-27.56-.426-39.67-1.441-19.514,1.284-40.772,2.328-53.468,4.561C301.584,31.04,294,33.888,283.7,37.8c-15.047-.774-19.865-3.5-36.221-4.321-10.453-.522-37.12-1.01-48.3-.959-10.184.046-17.188,1.062-27.595.719-18.244,2.022-31.516,4.736-46.57,7.2-3.726,2.091-9.8,3.854-17.5,5.39H4.061c-.734-1.281-1.512-2.592-2.344-3.949-.546-.09-1.13-.175-1.717-.26Z" />
    </svg>
  </section>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/variables';
  .about {
    width: 100%;
    padding-bottom: 100px;
    background: no-repeat center/cover url('../../../public/images//background/about.jpg');
    position: relative;
    overflow: hidden;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    .info {
      display: flex;
      margin-top: 100px;
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
  }
  .section-divider {
    display: block;
    position: absolute;
    left: 0;
    top: -1px;
    width: 100%;
    height: auto;
    rotate: 180deg;
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
      .info {
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
