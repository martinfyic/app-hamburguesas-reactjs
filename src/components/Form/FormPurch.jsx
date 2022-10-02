import styled from "./FormPurch.module.css";

export const FormPurch = ({ register, handleSubmit, onSubmit }) => {
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
                <label htmlFor="phone">Teléfono</label>
                <input id="phone" type="number" {...register("phone")} />
                <button type="submit" value="Enviar">
                    Finalizar Compra
                </button>
            </form>
        </div>
    );
};
