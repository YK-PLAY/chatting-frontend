import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import './LoginPage.scss'
import PhoneInput from 'react-phone-number-input'

function LoginPage() {
    const [value, setValue] = useState();
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
                            <button>Login</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            
        </div>
        
    );
}

export default LoginPage;