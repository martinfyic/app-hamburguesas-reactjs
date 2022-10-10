export const InputName = ({ register, errors }) => {
    return (
        <>
            <label htmlFor="name">Nombre</label>
            <input
                type="text"
                id="name"
                {...register("name", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                    maxLength: 10,
                    minLength: 3,
                })}
            />
            {errors.name?.type === "required" && <p>El campo es requerido</p>}
            {errors.name?.type === "pattern" && (
                <p>El nombre no debe incluir números</p>
            )}
            {errors.name?.type === "maxLength" && <p>Máximo 10 caracteres</p>}
            {errors.name?.type === "minLength" && <p>Mínimo 3 caracteres</p>}
        </>
    );
};
