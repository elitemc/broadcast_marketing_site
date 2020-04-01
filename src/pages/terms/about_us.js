import React, {useEffect} from 'react';
function AboutUs() {
  useEffect(() => {
    window.location.href = 'http://bms.yingliboke.cn/terms/about_us';
  }, []);
  return <h1></h1>;
}
export default AboutUs;
