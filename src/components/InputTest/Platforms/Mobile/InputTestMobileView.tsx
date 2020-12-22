import React from 'react'
import { InputTestContainer } from '../../Container/InputTestContainer';
import { InputRender } from '../../Model/Input.model';

const InputTestMobileView: React.FC = () => {
    return (
        <>
            <InputTestContainer render={
                (inputRenderProps: InputRender) => {
                    console.log("Data in present mobile", inputRenderProps);

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

export default InputTestMobileView
