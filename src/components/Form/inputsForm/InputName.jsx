export const InputName = ({ register, errors }) => {
    return (
        <>
            <label htmlFor="name">Nombre</label>
            <input
                type="text"
                id="name"
                {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && <p>El campo es requerido</p>}
        </>
    );
};
