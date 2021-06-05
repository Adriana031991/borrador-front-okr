import React from 'react'
import { useForm } from 'react-hook-form';
import './OkrFormCss.css';

const OkrFormPage = () => {

    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section className="section">
            <h1>Crear Objetivo</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form">

                <section className="lado-izq">

                <div className="input_Okr_general">
                    <label htmlFor="titulo" >
                        Titulo OKR
                    </label>
                    <input type="text" id='input_Okr_titulo' placeholder="Titulo del OKR" className="input" {...register('titulo', { required: true })} />
                </div>
                <div className="input_Okr_general">
                    <label htmlFor="objetivo">
                        Objetivo
                    </label>
                    <input type="text" id='input_Okr_objetivo' placeholder="Objetivo del OKR" {...register('objetivo', { required: true })} />
                </div>
                <div >
                    <h3>Responsable</h3>
                    <div className="input_Okr_general">
                        <label htmlFor="nombre">
                            Nombre
                        </label>
                        <input type="text" id='input_Okr_nombre' placeholder="Nombre" {...register('nombre', { required: true })} />
                    </div>
                    <div className="input_Okr_general">
                        <label htmlFor="correo">
                            Correo
                        </label>
                        <input type="email" id='input_Okr_email' placeholder="Correo" {...register('correo', { required: true })} />
                    </div>
                </div>
                </section>
            <aside className="lado-der">
                <div className="input_Okr_general">
                    <label htmlFor='type'>Verticales:</label>
                    <select {...register('type')} id='input_Okr_verticales'>
                        <option value='Sofka testing'>Sofka testing</option>
                        <option value='Agile Services'>
                            Agile Services </option>
                        <option value='Arquitectura y Desarrollo'>
                            Arquitectura y Desarrollo </option>
                        <option value='IA (inteligencia artificial)'>
                            IA (inteligencia artificial) </option>
                    </select>
                </div>
                <div className="input_Okr_general">
                    <label htmlFor='description'>Descripcion</label>
                    <textarea
                        name='description'
                        id='description'
                        cols='30'
                        rows='10'
                        {...register('description', { required: true })}></textarea>
                </div>
                </aside>
            </div>
                <div className="bton-general">

                <button type='submit' className="btn-guardar">Guardar</button>
                <button type='submit' className="btn-siguiente">Siguiente</button>
                </div>
            </form>

        </section>

    )
}

export default OkrFormPage;
