import React, { useState, useRef, useEffect } from 'react'
import Logo from "../images/AICTE-logo.png"


export default function PersonalDetails(PersonalDetails) {
    const details = PersonalDetails.Details;
    const [name_, setName] = useState(details.cndtName);
    const [photo, setphoto] = useState();
    const [gender, setGender] = useState('');
    const [domicileJandK, setDomicile] = useState(details.isDomicile);
    const [DOB, setDOB] = useState('');
    const [casteCategory, setCaste] = useState('');
    const [physicallyDisability, setDisability] = useState('');
    const [aadharDetail, setAadhar] = useState(details.aadharcard)
    const inputRef = useRef(null);
    const onImgClick = () => {
        inputRef.current.click();
    }

    

    return (
        <div className='bg-slate-100'>
            <form onSubmit={()=>PersonalDetails.onButtonClick("pagetwo")} className='flex flex-col m-auto mb-5 w-3/4 md:w-2/4 lg:w-1/4'>
                <h1 className='border-b-4 border-black py-5 text-4xl mb-7'>Basic Details</h1>


                <div className='flex gap-1 md:gap-4'>
                    <div>

                        {/* name */}
                        <input

                            value={name_}
                            onChange={(e) => setName(e.target.value)}
                            type='text'
                            placeholder="Name*"
                            className='border border-solid border-white w-full h-12 mx-auto mt-5 p-2 rounded-lg'
                            required>
                        </input>

                        {/* Gender */}
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className='border border-solid border-white w-full mx-auto mt-5 p-2 rounded-lg'
                            required>

                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    {/* Photo Input */}
                    <input
                        id='photoInput'
                        ref={inputRef}
                        filename={photo}
                        type='file'
                        onChange={(e) => {
                            setphoto(e.target.files[0]);
                        }}
                        className='hidden '
                        required>
                    </input>
                    <div onClick={onImgClick} className='border-4 border-solid border-black w-36 h-28  ml-2 mt-5 rounded'>
                        {photo ? <img className='h-full'
                            src={URL.createObjectURL(photo)} required /> : <img src={Logo} alt='None' className='h-full' />}
                    </div>
                </div>


                {/* Domicile */}
                <div className='mt-5 text-left'>

                    <label>Domicile Of J&K/Ladakh?</label>
                    <select
                        value={domicileJandK}
                        // onChange={(e) => setDomicile(e.target.value)}
                        className='border border-solid border-white w-full mx-auto p-2 rounded-lg'
                        required>

                        <option value="">A Domicile of J&K or Ladakh</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>

                <input
                    value={DOB}
                    onChange={(e) => setDOB(e.target.value)}
                    type='text'
                    id='DOB'
                    placeholder='Date Of Birth'
                    onFocus={() => {
                        document.getElementById('DOB').setAttribute('type', 'date');
                    }}
                    onBlur={() => {
                        document.getElementById('DOB').setAttribute('type', 'text');
                    }}
                    className='border border-solid border-white w-full mx-auto mt-5 p-2 rounded-lg'
                    required>
                </input>

                {/* Caste */}
                <select
                    value={casteCategory}
                    onChange={(e) => setCaste(e.target.value)}
                    className='border border-solid border-white w-full mx-auto mt-5 p-2 rounded-lg'
                    required>

                    <option value="">Caste Category</option>
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                </select>

                {/* Physical Disability */}
                <select
                    value={physicallyDisability}
                    onChange={(e) => setDisability(e.target.value)}
                    className='border border-solid border-white w-full mx-auto mt-5 p-2 rounded-lg'
                    required>

                    <option value="">Physically Disable?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>

                </select>

                <div className='mt-5 text-left'>
                    <lable>Aadhar Number:</lable>
                    <input
                        value={aadharDetail}
                        // onChange={(e) => setAadhar(e.target.value)}
                        type='number'
                        placeholder='Aadhar Number'
                        className='border border-solid border-white w-full mx-auto  p-2 rounded-lg'
                        required>
                    </input>
                </div>

                <input type='submit' value={' Next '} className='bg-yellow-300 p-2 rounded-2xl w-24 mx-auto mt-5 hover:cursor-pointer' ></input>


            </form>
        </div>
    )
}
