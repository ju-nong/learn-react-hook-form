import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
    password: string;
    passwordConfirm: string;
};

const inputsDefaultValues: Inputs = {
    password: "",
    passwordConfirm: "",
};

function PasswordConfirm() {
    const [same, setSame] = useState(false);

    const { register, watch } = useForm<Inputs>({
        defaultValues: inputsDefaultValues,
    });

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;

        setSame(watch("password") === value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>비밀번호</span>
                <input type="password" {...register("password")} />
            </label>
            <label>
                <span>비밀번호 확인</span>
                <input
                    type="password"
                    {...register("passwordConfirm", {
                        onChange: handleChange,
                    })}
                />
            </label>

            <div className="h-[24px]">
                {watch("passwordConfirm") ? (
                    same ? (
                        <span className="text-green-600">일치합니다.</span>
                    ) : (
                        <span className="text-red-600">일치하지 않습니다.</span>
                    )
                ) : null}
            </div>
        </form>
    );
}

export { PasswordConfirm as default };
