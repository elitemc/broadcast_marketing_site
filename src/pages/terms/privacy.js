import React, {useEffect} from 'react';
function Privacy() {
  useEffect(() => {
    window.location.href = 'http://bms.yingliboke.cn/terms/privacy';
  }, []);
  return <h1></h1>;
}
export default Privacy;
