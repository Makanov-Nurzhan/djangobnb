'use client'

import Modal from "@/app/components/modals/Modal";
import {useState} from "react";
import {useRouter} from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "@/app/components/forms/CustomButton";
import apiServices from "@/app/services/apiServices";
import {handlerLogin} from "@/app/lib/actions";



const LoginModal = () => {
    const router = useRouter();
    const loginModal = useLoginModal()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([]);


    const submitLogin = async () => {
        const formData = {
            email: email,
            password: password
        }

        const response = await apiServices.post('/api/auth/login/', JSON.stringify(formData))
         if (response.access) {

            handlerLogin(response.user.pk, response.access, response.refresh)

            loginModal.close()

            router.push('/')
        } else {
             setErrors(response.non_field_errors)
         }

    }
    const content = (
        <>
            <form
                action={submitLogin}
                className="space-y-2"
            >
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="You e-mail address"
                    className="w-full h-[54px] border border-gray-300 rounded-xl"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="You password"
                    className="w-full h-[54px] border border-gray-300 rounded-xl"
                />
                {
                    errors.map((error, index) => {
                        return (
                            <div
                                key={`error_${index}`}
                                className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                            >
                                {error}
                            </div>
                        )
                    })
                }
                <CustomButton
                    label="Submit"
                    onClick={submitLogin}
                />
            </form>
        </>
    )
    return (
        <Modal
            label="Log in"
            content={content}
            isOpen={loginModal.isOpen}
            close={loginModal.close}
        />
    )
}
export default LoginModal