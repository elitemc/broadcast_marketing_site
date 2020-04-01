import React, {useEffect} from 'react';
function UserAgreement() {
  useEffect(() => {
    window.location.href = 'http://bms.yingliboke.cn/terms/user_agreement';
  }, []);
  return <h1></h1>;
}
export default UserAgreement;
