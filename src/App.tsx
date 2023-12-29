import { Basic, NicknameConfirm, PasswordConfirm } from "./components";

function App() {
    return (
        <>
            <h2>기본 submit 실습</h2>
            <Basic />

            <h2>닉네임 중복 확인 실습</h2>
            <NicknameConfirm />

            <h2>비밀번호 확인 실습</h2>
            <PasswordConfirm />
        </>
    );
}

export default App;
