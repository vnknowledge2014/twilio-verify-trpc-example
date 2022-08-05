import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Message } from "../../components/Message";
import {
    Link
  } from "react-router-dom";
export const GenerateVerifyCode = ({ client, trpc }) => {
    const [mobile, setMobile] = useState("");
    const [result, setResult] = useState("");

    const addVerify = trpc.useMutation(["staff.generateVerifyCode"]);

    const onVerify = () => {
        addVerify.mutate(mobile, {
            onSuccess: (data) => {
                const dataJSON = JSON.parse(JSON.stringify(data));
                setResult(dataJSON);
            },
            onError(error) {
                const errorJSON = JSON.parse(JSON.stringify(error));
                setResult(errorJSON);
            }
        });
    }

    return (
        <>
            <div className="h-screen flex">
                <div className="m-auto justify-center items-center text-gray-800 px-80 flex-col space-y-4">
                    {JSON.parse(JSON.stringify(result))?.message ? <Message message={JSON.parse(JSON.stringify(result))?.message} style={JSON.parse(JSON.stringify(result))?.message ? "bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-white-700 mb-3" : "hidden"} /> : <Message message={`${JSON.parse(JSON.stringify(result))?.sid} - ${JSON.parse(JSON.stringify(result))?.status}`} style={JSON.parse(JSON.stringify(result))?.sid ? "bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3" : "hidden"} />}
                    <Input type={"text"} val={mobile} fn={(e) => setMobile(e.target.value)} placeholder={"Mobile Phone"} style={"p-5 border-2 border-gray-300 rounded-lg w-full"} />
                    <Button type={"button"} val={"Verify"} onClickAction={onVerify} style={"inline-block w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"} />
                    <Link to="/verify"><div className="text-purple-600 hover:text-purple-700 transition duration-300 ease-in-out mb-4 mt-2">Go Verify {">"}</div></Link>
                </div>
            </div>
        </>
    )
}