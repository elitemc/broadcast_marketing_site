(function(window, document) {
  function createHttpRequest() {
    if (window.ActiveXObject) {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } else if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    }
  }
  function AliLogTracker(host, project, logstore) {
    this.uri_ =
      'http://' +
      project +
      '.' +
      host +
      '/logstores/' +
      logstore +
      '/track?APIVersion=0.6.0';
    this.params_ = new Array();
    this.httpRequest_ = createHttpRequest();
  }
  AliLogTracker.prototype = {
    push: function(key, value) {
      if (!key || !value) {
        return;
      }
      this.params_.push(key);
      this.params_.push(value);
    },
    logger: function() {
      var url = this.uri_;
      var k = 0;
      while (this.params_.length > 0) {
        if (k % 2 == 0) {
          url += '&' + encodeURIComponent(this.params_.shift());
        } else {
          url += '=' + encodeURIComponent(this.params_.shift());
        }
        ++k;
      }
      try {
        this.httpRequest_.open('GET', url, false);
        this.httpRequest_.send(null);
      } catch (ex) {
        if (
          window &&
          window.console &&
          typeof window.console.log === 'function'
        ) {
          console.log(
            'Failed to log to ali log service because of this exception:\n' +
              ex,
          );
          console.log('Failed log data:', url);
        }
      }
    },
  };
  window.Tracker = AliLogTracker;

  const SLS = new AliLogTracker(
    'cn-shenzhen.log.aliyuncs.com',
    'yingliboke',
    'test',
  );

  SLS.fillZero = num => (num < 10 ? `0${num}` : num);
  SLS.pushLog = function(data = {}) {
    let now = new Date();
    Object.assign(data, {
      user: 0,
      'user-agent': navigator.userAgent,
      asctime: `${this.fillZero(now.getFullYear())}-${this.fillZero(
        now.getMonth() + 1,
      )}-${this.fillZero(now.getDate())} ${this.fillZero(
        now.getHours(),
      )}:${this.fillZero(now.getMinutes())}:${this.fillZero(
        now.getSeconds(),
      )},${(now.getMilliseconds() + '').padStart(3, 0)}`,
      platform: 'MKT',
      level: data.level || 'ERROR',
      //此处写固定且动态的参数
    });

    // DEBUG
    // let str = '';
    Object.entries(data).forEach(([key, value]) => {
      // str +=
      //   (/method|payload|url/.test(key) ? `request-${key}` : key) +
      //   '=' +
      //   value +
      //   '&';
      this.push(
        /method|payload|url/.test(key) ? `${key}` : key,
        key === 'payload' ? JSON.stringify(value) : value,
      );
    });
    this.logger();
    // console.log('测试提交的log', str);
  };

  // 防止 对象 被修改，对 sls 进行冻结
  window.sls = Object.freeze(SLS);

  // 页面奔溃上传
  window.onerror = function(
    errorMessage,
    scriptURI,
    lineNumber,
    columnNumber,
    errorObj,
  ) {
    let errDetail = `
  错误信息：${errorMessage}
  出错文件：${scriptURI}
  lineNumber:${lineNumber}
  出错列号：${columnNumber}
  错误详情：${errorObj}
  报错路径：${window.location.href}`;
    // 日志上报，此时无法得知请求的路由，方法和参数，因此如果页面在奔溃时机的情况下我们只需要上传 message 即可，但是数据越详细越好
    console.log(errDetail);
    this.sls.pushLog({
      message: errDetail,
    });
  };
})(window, document);
