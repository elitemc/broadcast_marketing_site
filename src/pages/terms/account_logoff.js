import React, {useEffect} from 'react';
function Account_logoff() {
  useEffect(() => {
    window.location.href = 'http://bms.yingliboke.cn/terms/account_logoff';
  }, []);
  return <h1></h1>;
}
export default Account_logoff;
