/**
 * Promise
 */
{
  // ES5 回调
  let ajax = function(callback) {
    console.log('执行1');
    setTimeout(function() {
      callback && callback.call()
    }, 2000);
  }
  ajax(function() {
    console.log('timeout1');
  })
}

{
  // ES6
  let ajax = function() {
    console.log('执行2');
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve();
      }, 2000);
    })
  }
  ajax().then(() => {
    console.log('promise', 'timeout2');
  })
}

{
  // 多个回调
  let ajax = function() {
    console.log('执行3');
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve();
      }, 2000);
    })
  }
  ajax()
  .then(() => {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve();
      }, 2000);
    })
  })
  .then(() => {
    console.log('timeout3');
  })
}

{
  // then中catch的使用
  let ajax = function(num) {
    console.log('执行4');
    return new Promise(function(resolve, reject) {
      if(num > 5) {
        resolve();
      }
      else {
        throw new Error('出错了')
      }
    })
  }

  ajax(6).then(() => {
    console.log('log', 6);
  }).catch((err) => {
    console.log('catch', err);
  })

  ajax(3).then(() => {
    console.log('log', 3);
  }).catch((err) => {
    console.log('catch', err);
  })
}

{
  // 所有图片加载完再添加到页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;
      img.onload = () => {
        resolve(img);
      }
      img.onerror = (err) => {
        reject(err);
      }
    })
  }

  function showImgs(imgs) {
    imgs.forEach((img) => {
      document.body.appendChild(img);
    });
  }

  Promise.all([
    loadImg('http://120.25.243.145:8024/shen/pictures/slider/slide1-rev2.jpg'),
    loadImg('http://120.25.243.145:8024/shen/plugin/zhuce/images/lunboAd/01.jpg'),
    loadImg('http://120.25.243.145:8024/shen/plugin/zhuce/images/lunboAd/02.jpg')
  ]).then(showImgs)
}

{
  // 多张图片来自不同服务器，有一张图片加载完就添加到页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;
      img.onload = () => {
        resolve(img);
      }
      img.onerror = (err) => {
        reject(err);
      }
    })
  }

  function showImgs(img) {
    let p = document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p);
  }

  Promise.race([
    loadImg('http://120.25.243.145:8024/shen/pictures/slider/slide1-rev2.jpg'),
    loadImg('http://120.25.243.145:8024/shen/plugin/zhuce/images/lunboAd/01.jpg'),
    loadImg('http://120.25.243.145:8024/shen/plugin/zhuce/images/lunboAd/02.jpg')
  ]).then(showImgs)
}