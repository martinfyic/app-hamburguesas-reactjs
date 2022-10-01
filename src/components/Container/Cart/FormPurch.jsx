import { useForm } from "react-hook-form";
import styled from "./FormPurch.module.css";

export const FormPurch = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className={styled.FormContainer}>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" {...register("name")} />

                <label htmlFor="lastName">Apellido</label>
                <input type="text" id="lastName" {...register("lastName")} />
                <label htmlFor="email">Email</label>
                <input id="email" type="text" {...register("email")} />
                <label htmlFor="direction">Dirección</label>
                <input id="direction" type="text" {...register("direction")} />
                <label>Telefono</label>
                <input type="number" {...register("phone")} />
                <button type="submit" value="Enviar">
                    Enviar
                </button>
            </form>
        </div>
    );
};
