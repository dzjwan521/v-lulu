<template>
  <div  class="pg-index">
    <div class="index-container">
      <p>
          <a href="https://www.zhangxinxu.com/sp/lulu/mockup/"  class="logo-a">
            <h1 class="logo">lulu for vue</h1></a> for vue 👿
      </p>
        <div class="monster">
            <span class="body"></span>
            <span class="eyes"></span>
            </div>
        </div>
    <div class="separate-panel">
      <div class="about">
        <router-link :to="{name: 'giud'}">开始使用</router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                height: document.documentElement.clientHeight
            }
        }
    }
</script>
<style type="text/less" lang="less">
.pg-index {
  width: 100vw;
  height: calc(100vh - 80px);
  background: #f7f9fa;
  .index-container {
    margin: 0 auto;
    text-align: center;
    position: relative;
    width: 100vw;
    height: calc(70vh - 80px);
    // background: rgb(247, 244, 70);
    p {
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translateX(-50%);
      height: 45px;
      color: #8994c6;
      font-size: 32px;
      .logo-a {
        .logo {
          display: inline-block;
          vertical-align: middle;
          width: 84px;
          height: 45px;
          line-height: 45px;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI3IiBoZWlnaHQ9Ijk4IiB2aWV3Qm94PSIwIDAgMjI3IDk4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiMyNDg2RkYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTU2Ljk0NCA4My40MzVjMCAyLjEzLTEuOTUgMy44NjQtNC4zNDQgMy44NjQtMi40IDAtNC4zNDgtMS43MzQtNC4zNDgtMy44NjRWMEgzNi43MjR2ODMuNDM1YzAgNy43OSA3LjEwOCAxNC4xMDkgMTUuODc2IDE0LjEwOSA4Ljc2NSAwIDE1Ljg3LTYuMzE4IDE1Ljg3LTE0LjExVjBINTYuOTQ0djgzLjQzNXpNMTM4LjI2MiA4My40MzVjMCAyLjEzLTEuOTUgMy44NjQtNC4zNDUgMy44NjQtMi40IDAtNC4zNDctMS43MzQtNC4zNDctMy44NjRWMEgxMTguMDR2ODMuNDM1YzAgNy43OSA3LjEwOCAxNC4xMDkgMTUuODc2IDE0LjEwOSA4Ljc2NSAwIDE1Ljg3LTYuMzE4IDE1Ljg3LTE0LjExVjBoLTExLjUyNXY4My40MzV6TTE5Ni45NTYgODMuNDM1YzAgMi4xMy0xLjk1IDMuODY0LTQuMzQ1IDMuODY0LTIuNCAwLTQuMzQ3LTEuNzM0LTQuMzQ3LTMuODY0VjBoLTExLjUyOHY4My40MzVjMCA3Ljc5IDcuMTA3IDE0LjEwOSAxNS44NzUgMTQuMTA5IDguNzY2IDAgMTUuODctNi4zMTggMTUuODctMTQuMTFWMGgtMTEuNTI1djgzLjQzNXpNMTAuNDkzIDgzLjk0YzAgMy4xMSAxLjc0OCA0LjY2NCA1LjI0NiA0LjY2NGgxMy4xMTZ2OS4zMjdIMTAuNDkzQzIuNjIzIDk3LjkzIDAgOTMuMjY3IDAgODguNjA0VjBoMTAuNDkzdjgzLjk0ek05MS44MSA4My45NGMwIDMuMTEgMS43NDkgNC42NjQgNS4yNDYgNC42NjRoMTMuMTE2djkuMzI3SDkxLjgxYy03Ljg3IDAtMTAuNDkzLTQuNjY0LTEwLjQ5My05LjMyN1YwSDkxLjgxdjgzLjk0ek0yMTYuMDgzIDBoMTAuNDkydjk3LjkzaC0xMC40OTJWMHoiLz48L2c+PC9zdmc+);
          background-repeat: no-repeat;
          background-size: 100%;
          text-indent: -99em;
          overflow: hidden;
        }
      }
    }

    .monster {
      width: 100%;
      height: 212px;
      position: absolute;
      bottom: 80px;
      overflow: hidden;
      transform: skewY(-4deg);

      .body {
        width: 32vh;
        height: 32vh;
        background-color: #f4615c;
        border-radius: 43% 40% 43% 40%;
        position: absolute;
        bottom: calc(-1 * 32vh / 2 - 4vh);
        left: -2vh;
        animation: wander 5s linear infinite alternate, wave 3s linear infinite,
          bounce 1s infinite alternate;
      }

      .eyes {
        width: 24vh;
        height: 5vh;
        position: absolute;
        bottom: 2vh;
        left: calc(32vh - 24vh - 2vh);
        animation: wander 5s linear infinite alternate;
      }

      .eyes::before,
      .eyes::after {
        content: "";
        position: absolute;
        width: 5vh;
        height: 5vh;
        border: 1.25vh solid white;
        box-sizing: border-box;
        border-radius: 50%;
        animation: blink 3s infinite linear;
      }

      .eyes::before {
        left: 4vh;
      }

      .eyes::after {
        right: 4vh;
      }
    }
  }
  .separate-panel {
    height: 30vh;
    background: rgb(80, 99, 117);
    z-index: 100;
    position: relative;
    background-size: 100%;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: -80px;
      width: 100%;
      height: 200px;
      // box-shadow: 0 -4px 30px 0 #dfe1e6;
      background: rgb(80, 99, 117);
      transform: skewY(-4deg);
    }
    .about {
      position: absolute;
      width: 100%;
      top: 45px;
      height: 130px;
      z-index: 100;
      background: rgb(80, 99, 117);
      text-align: center;
      a {
        background: linear-gradient(to right, #01cf97, #00a579);
        color: white;
        display: inline-block;
        margin: 0 35px;
        --width: 250px;
        --height: calc(var(--width) / 3);
        width: var(--width);
        height: var(--height);
        text-align: center;
        line-height: var(--height);
        font-size: calc(var(--height) / 2.5);
        font-family: sans-serif;
        letter-spacing: 0.2em;
        border: 1px solid #04fcba;
        border-radius: 2em;
        transform: perspective(500px) rotateY(-15deg);
        text-shadow: 6px 3px 2px rgba(0, 0, 0, 0.3);
        box-shadow: 1px 0 0 3px rgba(0, 0, 0, 0.1);
        position: relative;
        transition: 0.5s;
        overflow: hidden;
        &:hover {
          transform: perspective(500px) rotateY(15deg);
          text-shadow: -6px 3px 2px rgba(0, 0, 0, 0.3);
          box-shadow: -1px 0 0 3px rgba(0, 0, 0, 0.1);
        }

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            white,
            transparent
          );
          left: 0;
          left: -100%;
          transition: 0.5s;
        }

        &:hover::before {
          left: 100%;
        }
      }
    }
  }
}

@keyframes bounce {
  to {
    bottom: calc(-1 * 32vh / 2 - 2vh);
  }
}

@keyframes wave {
  to {
    transform: rotate(360deg);
  }
}

@keyframes wander {
  to {
    left: calc(100% - 32vh + 2vh);
  }
}

@keyframes blink {
  0%,
  4%,
  10%,
  34%,
  40%,
  100% {
    transform: scaleY(1);
  }

  7%,
  37% {
    transform: scaleY(0);
  }
}
</style>
