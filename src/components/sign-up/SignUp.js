import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SignUpCard from './SignUpCard';
import { UserAuth } from '../../context/AuthContext'

export default function SignUp() {
    var [inputFields, setInputFields] = useState({
        name: "",
        email: "",
        password: "",
        confirmedPassword: "",
        gender: "Male",
        dob: ""
    });
    var [error, setError] = useState();
    var { createUser } = UserAuth()
    const navigate = useNavigate();

    function nameChange(val) {
        setInputFields(prev => {
            return {
                ...prev,
                name: val
            }
        })
    }
    function emailChange(val) {
        setInputFields(prev => {
            return {
                ...prev,
                email: val
            }
        })
    }
    function passwordChange(val) {
        setInputFields(prev => {
            return {
                ...prev,
                password: val
            }
        })
    }
    function c_PasswordChange(val) {
        setInputFields(prev => {
            return {
                ...prev,
                confirmedPassword: val
            }
        })
    }
    function genderChange(val) {
        setInputFields(prev => {
            return {
                ...prev,
                gender: val
            }
        })
    }
    function DOBChange(val) {
        setInputFields(prev => {
            return {
                ...prev,
                dob: val
            }
        })
    }
    function resetFields() {
        setInputFields({
            name: "",
            email: "",
            password: "",
            confirmedPassword: "",
            gender: "Male",
            dob: ""
        })
    }

    async function checkPasswords() {
        if (inputFields.password !== inputFields.confirmedPassword) {
            console.log("Passwords don't match...");
        }
    }

    useEffect(() => {
        if (inputFields.password && inputFields.confirmedPassword) {
            checkPasswords();
        }
    }, [inputFields.password, inputFields.confirmedPassword])

    const inputs = [{
        label: "Name",
        type: "text",
        id: "name",
        value: inputFields.name,
        onChangeVal: nameChange
    },
    {
        label: "Email",
        type: "email",
        id: "email",
        value: inputFields.email,
        onChangeVal: emailChange
    },
    {
        label: "Password",
        type: "password",
        id: "password",
        value: inputFields.password,
        onChangeVal: passwordChange
    },
    {
        label: "Confirm Password",
        type: "password",
        id: "c_password",
        value: inputFields.confirmedPassword,
        onChangeVal: c_PasswordChange
    },
    {
        label: "Date of Birth",
        type: "date",
        id: "date",
        value: inputFields.dob,
        onChangeVal: DOBChange,
        min: "1920-01-01",
        max: "2017-12-31"
    }
    ]
    async function submitSignUpForm(e) {
        e.preventDefault();
        setError('')
        try {
            await createUser(inputFields)
            await resetFields();
            navigate('/account')
        }
        catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }
    return (
        <div>
            <form onSubmit={submitSignUpForm}>
                {inputs.map((item) => {
                    return <SignUpCard item={item} key={item.id} />
                })}
                <div className=' mb-3 d-flex flex-row justify-content-between justify-content-md-center align-items-center align-content-center px-sm-5'>
                    <div className='col-4'>
                        <label className='col-2 col-sm-3 col-md-4 col-lg-4 h5'
                        >
                            Gender
                        </label>
                    </div>
                    <div className='col-6 d-flex flex-row justify-content-start align-items-center'>

                        <label htmlFor="Male"
                            className='col-4 py-md-3 mx-1 border border-1 border-dark rounded rounded-5'
                        >
                            <input type='radio' value="Male" name="Gender" checked id="Male"
                                className='mx-2'
                                onChange={(e) => {
                                    genderChange(e.target.value)
                                }}
                            />
                            Male
                        </label>

                        <label htmlFor="Female"
                            className='col-4 py-md-3 mx-1 border border-1 border-dark rounded rounded-5'>
                            <input type='radio' value="Female" name="Gender" id="Female"
                                className='mx-2'
                                onChange={(e) => {
                                    genderChange(e.target.value)
                                }}
                            />
                            Female
                        </label>
                    </div>

                </div>
                <input type="submit" className=' p-2 px-4 bg-transparent m-5 mx-1 rounded rounded-pill' />
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    )
}
