import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import './LoginPage.scss'
import PhoneInput from 'react-phone-number-input'

function LoginPage({history}) {
    const [value, setValue] = useState();

    const loginOnClick = () => {
        alert('My phone is ' + value)
        history.push('/');
    };

    return (
        <div className = 'loginDiv'>
            <table>
                <tbody>
                    <tr>
                        <div>LoginPage</div>
                    </tr>
                    <tr>
                        <td>
                            <PhoneInput defaultCountry = 'KR' placeholder = 'Enter phone number' value = {value} onChange = {setValue} />
                        </td>
                        <td>
                            <button onClick = {loginOnClick}>Login</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    );
}

export default LoginPage;