<template>
  <div  class="pg-index">
    <div class="index-container">
      <!-- <img src="../assets/img/logo.png"> -->
      <p>一款抄袭的前端 UI 组件库</p>
    </div>
    <div class="separate-panel">
      <div class="about">
        <router-link :to="{name: 'giud'}">开始使用</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        height: document.documentElement.clientHeight
      }
    }
  }
</script>
<style type="text/less" lang="less">
  .pg-index {
    .index-container {
      width: 960px;
      margin: 0 auto;
      text-align: center;
      padding: 100px 0;
      p{
        margin-top: 56px;
        color: #8994C6;
        font-size: 32px;
      }
    }
    .separate-panel{
      position: relative;
      .about{
        position: absolute;
        width: 100%;
        height: 200px;
        top: 20px;
        z-index: 9;
        background: #fff;
        text-align: center;
        a {
				background: linear-gradient(to right, #00AEFF, #3369E7);
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
				border: 1px solid #3369E7;
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
            content: '';
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
    .separate-panel:after{
      content: '';
      display: block;
      position: absolute;
      top: -80px;
      width: 100%;
      height: 250px;
      background: #fff;
      box-shadow: 0 -4px 30px 0 #DFE1E6;
      transform: skewY(-4deg);
    }
  }
</style>
