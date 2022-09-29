import React, { useEffect, useState } from "react";
import useInput from "./useInput";

const useInputs_Info = () => {
  const [state, onChange] = useInput({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  return (
    <div>
      <div>
        <input value={name} onChange={onChange} />
        <input value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 :</b> {name}
        </div>
        <div>
          <b>닉네임 :</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default useInputs_Info;
