import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import AlertInfo from '../components/AlertInfo';
import { message} from 'antd';
import LayoutPage from '../UI/LayoutPage';


const HomePage: React.FC=()=>{
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();
    const warning = () => {
        messageApi.open({
          type: 'warning',
          content: 'This is a warning message',
        });
      };

    useEffect(()=>{
        console.log('run effect');
        if (!localStorage.getItem('account')){
            // warning()
            // window.alert('請先登入')
            // navigate('/login');
        }
    }, [])
   
    return <div>
        < LayoutPage /> 
    </div>
}

export default HomePage;