import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
//import libreria calendar
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//slider
import { Slider } from '@material-ui/core';
//CSS
import './KRPage.css';


export const KRPage = () => {
    //form hook
    const { register, handleSubmit } = useForm();
    // estados fechas
    const [startDate, setStartDate] = useState(new Date());
    const [finalDate, setFinalDate] = useState(new Date());
    //   Estado slider
    const [slider, setSlider] = useState(50);

    const onSubmit = (data) => {
        data.initDay = startDate.toLocaleDateString();
        data.endDay = finalDate.toLocaleDateString();
        data.slider = slider;
        console.log(data);
    };

    return (
        <div className='container-general'>
            <h1 className='title-center'>Crear KR</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form">
                <div className='lado-izq'>

                    <div className='input_Okr_general'>
                        <label htmlFor='input_kr'>Resultado Clave</label>
                        <input
                            type='text'
                            id='input_kr'
                            {...register('keyResult', { required: true })}
                        />
                    </div>

                    <h3>Responsable</h3>
                        <div className='input_Okr_general'>
                            <label htmlFor='input_name'>Nombre</label>
                            <input
                                type='text'
                                id='input_name'
                                {...register('name', { required: true })}
                            />
                        </div>

                        <div className='input_Okr_general'>
                            <label htmlFor='input_email'>Correo</label>
                            <input
                                type='email'
                                id='input_email'
                                {...register('email', { required: true })}
                            />
                        </div>
                        <div className='input_Okr_general'>
                            <label htmlFor='text_description'>Descripcion</label>
                            <textarea
                                name='description'
                                id='text_description'
                                {...register('description', { required: true })}></textarea>
                        </div>
                                </div>

                        <div className='lado-der'>
                            <div className='input_Okr_general'>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                />
                                <DatePicker
                                    selected={finalDate}
                                    onChange={(date) => setFinalDate(date)}
                                />
                            </div>
                            <div className='input_Okr_general'>
                                <Slider
                                    value={slider}
                                    aria-labelledby='discrete-slider'
                                    valueLabelDisplay='auto'
                                    step={10}
                                    marks
                                    min={0}
                                    max={100}
                                    onChange={(event, newValue) => {
                                        setSlider(newValue);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bton-general">

                <button className="anterior">Anterior</button>
                <button type='submit' className="btn-guardar">Guardar</button>
                <button className="añadir-otro">Añadir otro KR</button>
                </div>

            </form>
        </div>
    );
};
export default KRPage;