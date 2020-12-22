import React from 'react'
import { InputTestContainer } from '../../Container/InputTestContainer'
import { InputRender } from '../../Model/Input.model';

export const InputTestWebView: React.FC = () => {
    return (
        <>
            <InputTestContainer render={
                (inputRenderProps:InputRender) => {
                    console.log("Data in present",inputRenderProps);
                    
                    return (
                        <>
                            <div>
                                <p>Input Text view Web</p>
                            </div>
                        </>
                    )
                }
            } />
        </>
    )
}
