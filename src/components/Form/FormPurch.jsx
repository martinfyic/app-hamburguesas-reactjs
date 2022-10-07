import styled from "./FormPurch.module.css";
import { InputDirection } from "./inputsForm/InputDirection";
import { InputEmail } from "./inputsForm/InputEmail";
import { InputLastName } from "./inputsForm/InputLastName";
import { InputName } from "./inputsForm/InputName";
import { InputPhone } from "./inputsForm/InputPhone";

export const FormPurch = ({ register, handleSubmit, onSubmit, errors }) => {
    return (
        <div className={styled.FormContainer}>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputName register={register} errors={errors} />
                <InputLastName register={register} errors={errors} />
                <InputEmail register={register} errors={errors} />
                <InputDirection register={register} errors={errors} />
                <InputPhone register={register} errors={errors} />
                <button type="submit" value="Enviar">
                    Finalizar Compra
                </button>
            </form>
        </div>
    );
};
