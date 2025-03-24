
import { JSX, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginComponent from '../../pages/login';



const UserLoginTemplate = () => {
  const location = useLocation();
  const [renderComponent, setRenderComponent] = useState<JSX.Element>(<></>);
  
  useEffect(() => {
    if (location.pathname === '/login') {
      setRenderComponent(<LoginComponent />);
    }
  }, [location.pathname]);
  
  return <>{renderComponent}</>;
}

export default UserLoginTemplate
