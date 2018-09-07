<template>
  <div  class="pg-index">
    <div class="index-container">
      <p>一个瞎整的 UI 组件库</p>
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
#app,
.pg-index {
  width: 100vw;
  height: 100vh;
  background: #fff;
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
      color: #8994c6;
      font-size: 32px;
    }
  }
  .separate-panel {
    height: 30vh;
    position: relative;
    .about {
      position: absolute;
      width: 100%;
      height: 200px;
      top: 45px;
      z-index: 9;
      background: #fff;
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
      }

      a:hover {
        transform: perspective(500px) rotateY(15deg);
        text-shadow: -6px 3px 2px rgba(0, 0, 0, 0.3);
        box-shadow: -1px 0 0 3px rgba(0, 0, 0, 0.1);
      }

      a::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, transparent, white, transparent);
        left: 0;
        left: -100%;
        transition: 0.5s;
      }

      a:hover::before {
        left: 100%;
      }
    }
  }
  .separate-panel:after {
    content: "";
    display: block;
    position: absolute;
    top: -80px;
    width: 100%;
    height: 250px;
    background: #fff;
    box-shadow: 0 -4px 30px 0 #dfe1e6;
    transform: skewY(-4deg);
  }
}

.monster {
  width: 100%;
  height: 212px;
  position: absolute;
  bottom: 80px;
  overflow: hidden;
  transform: skewY(-4deg);
}

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
