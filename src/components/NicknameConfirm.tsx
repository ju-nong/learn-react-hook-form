import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
    nickname: string;
};

const inputsDefaultValues: Inputs = {
    nickname: "",
};

function NicknameConfirm() {
    const [nicknames, setNicknames] = useState(["admin", "user", "agent"]);
    const [duplicated, setDuplicated] = useState(false);

    const { register, reset, handleSubmit } = useForm<Inputs>({
        defaultValues: inputsDefaultValues,
    });

    function onSubmit({ nickname }: Inputs) {
        if (duplicated) {
            alert("다른 닉네임을 입력해주세요.");

            return;
        }

        setNicknames((nicknames) => [...nicknames, nickname]);
        reset();
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;

        if (!value) {
            setDuplicated(false);
        }

        setDuplicated(nicknames.includes(value));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="text-gray-400">
                등록된 닉네임 : {nicknames.join(", ")}
            </label>
            <label>
                <span>입력시 중복 확인</span>
                <input
                    type="text"
                    {...register("nickname", {
                        onChange: handleChange,
                    })}
                />
            </label>
            {duplicated && <span className="text-red-600">중복!</span>}
            <button>제출</button>
        </form>
    );
}

export { NicknameConfirm as default };
